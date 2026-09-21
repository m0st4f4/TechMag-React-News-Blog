const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

const SECRET_KEY = process.env.JWT_SECRET_KEY || "123456789";
const REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET_KEY || "987654321";
const EXPIRES_IN = "1h";
const REFRESH_EXPIRES_IN = "7d";
const SALT_ROUNDS = 10;

server.use(middlewares);
server.use(jsonServer.bodyParser);

const createToken = (payload, secret, expiresIn) => {
  return jwt.sign(payload, secret, { expiresIn });
};

const buildUserResponse = (user) => ({
  id: user.id,
  email: user.email,
  username: user.username,
  name: user.name,
  avatar: user.avatar,
  bio: user.bio,
  role: user.role,
  isActive: user.isActive,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

const getNextUserId = (usersDb) => {
  const ids = usersDb
    .value()
    .map((u) => Number(u.id))
    .filter((n) => !Number.isNaN(n));
  return ids.length ? Math.max(...ids) + 1 : 1;
};

const getNextId = (collectionDb) => {
  const ids = collectionDb
    .value()
    .map((item) => Number(item.id))
    .filter((n) => !Number.isNaN(n));
  const nextId = ids.length ? Math.max(...ids) + 1 : 1;
  return String(nextId);
};

// --- Route (Register) ---
server.post("/auth/register", async (req, res) => {
  const { email, password, username } = req.body;

  // Validate user data
  if (!email || !password || !username) {
    return res.status(400).json({
      message: "User Data is invalid",
    });
  }

  const usersDb = router.db.get("users");
  const normalizedEmail = String(email).trim().toLowerCase();

  if (usersDb.find({ email: normalizedEmail }).value()) {
    return res.status(400).json({ message: "This email already exists" });
  }

  if (usersDb.find({ username }).value()) {
    return res.status(400).json({ message: "This username already exists" });
  }

  const id = getNextUserId(usersDb);
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const newUser = {
    id,
    email: normalizedEmail,
    password: hashedPassword,
    name: username,
    username,
    avatar: "https://i.pravatar.cc/150?u=" + username,
    bio: "",
    role: "subscriber",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Write Data on DB
  usersDb.push(newUser).write();

  const accessToken = createToken(
    { email: normalizedEmail, id },
    SECRET_KEY,
    EXPIRES_IN
  );
  const refreshToken = createToken(
    { email: normalizedEmail, id },
    REFRESH_SECRET_KEY,
    REFRESH_EXPIRES_IN
  );

  res.status(201).json({
    accessToken,
    refreshToken,
    user: buildUserResponse(newUser),
  });
});

// --- Route (Login) ---
server.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const user = router.db.get("users").find({ username }).value();

  const isValidPassword = user
    ? await bcrypt.compare(password, user.password)
    : false;

  if (!user || !isValidPassword) {
    return res
      .status(401)
      .json({ message: "Username or Password is incorrect" });
  }

  const accessToken = createToken(
    { email: user.email, id: user.id },
    SECRET_KEY,
    EXPIRES_IN
  );
  const refreshToken = createToken(
    { email: user.email, id: user.id },
    REFRESH_SECRET_KEY,
    REFRESH_EXPIRES_IN
  );

  res.status(200).json({
    accessToken,
    refreshToken,
    user: buildUserResponse(user),
  });
});

// --- Route (Refresh Token) ---
server.post("/auth/refresh", (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token is incorrect" });
  }

  try {
    const verifyResult = jwt.verify(refreshToken, REFRESH_SECRET_KEY);

    const newAccessToken = createToken(
      { email: verifyResult.email, id: verifyResult.id },
      SECRET_KEY,
      EXPIRES_IN
    );
    const newRefreshToken = createToken(
      { email: verifyResult.email, id: verifyResult.id },
      REFRESH_SECRET_KEY,
      REFRESH_EXPIRES_IN
    );

    res
      .status(200)
      .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  } catch (error) {
    res.status(401).json({ message: "Refresh token is invalid or expired" });
  }
});

// --- Route (Get Current User) ---
server.get("/auth/me", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token is incorrect" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);

    const user = router.db.get("users").find({ id: decoded.id }).value();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      id: user.id,
      email: user.email,
      username: user.username,
      name: user.name,
      avatar: user.avatar,
      bio: user.bio,
      role: user.role,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (err) {
    res.status(401).json({ message: "Token is invalid or expired" });
  }
});

// --- Route (Method-based Authorization) ---
server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (req.method === "GET") {
    return next();
  }

  // Check access token for POST, PUT, PATCH, DELETE Methods
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Token is incorrect , login for this operation",
    });
  }

  try {
    const token = authHeader.split(" ")[1];
    req.user = jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is invalid or expired" });
  }
});

server.post("/comments", (req, res) => {
  const { articleId, content, parentId } = req.body;

  if (!articleId || !content || !String(content).trim()) {
    return res.status(400).json({
      message: "articleId و content الزامی هستند",
    });
  }

  const article = router.db
    .get("articles")
    .find({ id: String(articleId) })
    .value();
  if (!article) {
    return res.status(404).json({ message: "مقاله مورد نظر یافت نشد" });
  }

  if (parentId) {
    const parentComment = router.db
      .get("comments")
      .find({ id: String(parentId) })
      .value();
    if (!parentComment) {
      return res.status(404).json({ message: "کامنت والد یافت نشد" });
    }
  }

  const commentsDb = router.db.get("comments");
  const now = new Date().toISOString();

  const newComment = {
    id: getNextId(commentsDb),
    articleId: String(articleId),
    userId: String(req.user.id),
    parentId: parentId ? String(parentId) : null,
    content: String(content).trim(),
    status: "pending",
    likeCount: 0,
    createdAt: now,
    updatedAt: now,
  };

  commentsDb.push(newComment).write();

  res.status(201).json(newComment);
});

server.use(router);

server.listen(4000, () => {
  console.log("Mock Server is running on http://localhost:4000");
});
