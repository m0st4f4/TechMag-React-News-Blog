FROM node:22.23.2-alpine3.24
LABEL authors="mostafa"
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV API_URL=http://exmaple.com/api
EXPOSE 5173
EXPOSE 4000
CMD npm run dev && npm run api
