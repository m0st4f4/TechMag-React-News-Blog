<div align="center">

<img src="./public/favicon.svg" width="80" alt="TechMag Logo" />

# TechMag


**A multilingual tech blog/magazine built with React 19, TypeScript, and Vite**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
![Node](https://img.shields.io/badge/node-%3E%3D22.17.0-brightgreen)
![Vite](https://img.shields.io/badge/vite-8.x-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-19.x-61DAFB?logo=react&logoColor=black)

[فارسی](#-فارسی) • [English](#-english)

</div>

---

## 🇬🇧 English

### About

TechMag is a multilingual tech blog/magazine application built with the latest tools in the React ecosystem. The project supports **Persian (RTL)**, **English**, and **Arabic (RTL)**, and includes user authentication, article categories, search, and a mock backend powered by json-server.

### Key Features

- 📰 Featured articles and latest articles sections
- 🔎 Article search
- 🗂️ Category pages
- 🔐 User authentication (register / login / logout) with JWT
- 🌍 Multilingual support via i18next (fa / en / ar) with full RTL support
- 🎨 Styled with Tailwind CSS v4 and shadcn/ui components (built on Radix UI)
- ⚡ Server-state management with TanStack Query
- 📝 Forms with React Hook Form + Zod
- 🧪 Testing with Vitest
- 🧹 Linting with ESLint and automatic import sorting via Prettier
- 🚀 Automated versioning/releases with Semantic Release

### Tech Stack

| Area               | Technology                           |
|--------------------|--------------------------------------|
| Framework          | React 19 + Vite 8                    |
| Language           | TypeScript                           |
| Styling            | Tailwind CSS v4, shadcn/ui, Radix UI |
| Routing            | React Router v7                      |
| Server state       | TanStack Query                       |
| Forms & validation | React Hook Form, Zod                 |
| i18n               | i18next, react-i18next               |
| HTTP client        | Axios                                |
| Auth               | JSON Web Token (jsonwebtoken)        |
| Mock backend       | json-server + Express (server.cjs)   |
| Testing            | Vitest                               |
| Global state       | Zustand                              |

### Prerequisites

- Node.js `>= 22.17.0` (see `.nvmrc`)
- npm

### Getting Started (Local Setup)

```bash
# 1. Clone the repository
git clone https://github.com/m0st4f4/Blog-React-TS.git
cd Blog-React-TS

# 2. Install dependencies
npm install

# 3. Run the mock backend (json-server) in one terminal
npm run api

# 4. Run the frontend in another terminal
npm run dev
```

Once running:
- Frontend is available at `http://localhost:5173`
- Mock API runs at `http://localhost:4000`

> 💡 You can override the API base URL with the `VITE_API_BASE_URL` environment variable (create a `.env` file).

### Available Scripts

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Start the Vite dev server                |
| `npm run build`   | Type-check and build for production      |
| `npm run preview` | Preview the production build             |
| `npm run lint`    | Run ESLint                               |
| `npm run api`     | Run the mock backend (json-server + JWT) |

### Project Structure (Overview)

```
src/
├── components/     # Reusable UI components
├── forms/          # Forms (Login, Register, ...)
├── hooks/          # Custom hooks (React Query, ...)
├── layouts/        # Page layouts (RootLayout, SidebarLayout)
├── locales/        # Translation files (fa, en, ar)
├── pages/          # Route pages
├── providers/      # Context providers (Auth, Search)
├── schema/         # Zod validation schemas
├── services/       # API service layer
├── types/          # TypeScript types
└── icons/          # SVG icon components
```

### 🐳 Running with Docker

> ⚠️ This section is a work in progress and will be completed later. Here's a starting point:

```dockerfile
# Dockerfile (draft - needs completion)
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```yaml
# docker-compose.yml (draft - needs completion)
services:
  frontend:
    build: .
    ports:
      - "5173:80"
    depends_on:
      - api

  api:
    image: node:22-alpine
    working_dir: /app
    volumes:
      - .:/app
    command: sh -c "npm ci && npm run api"
    ports:
      - "4000:4000"
```

TODO before this is production-ready:
- [ ] Environment variable configuration for both services
- [ ] Proper multi-stage Dockerfile for the api service
- [ ] Add healthchecks
- [ ] Shared network setup between frontend and api
- [ ] Document final `docker compose up` usage

### Contributing

Contributions are welcome! Please open an issue or submit a pull request. Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification (use `npx cz` via `commitizen` for guided commits).

### License

This project is licensed under the [MIT License](./LICENSE).

---

## 🇮🇷 فارسی

### درباره پروژه

TechMag یک اپلیکیشن وبلاگ/مجله خبری فنی است که با جدیدترین ابزارهای اکوسیستم React ساخته شده. این پروژه از سه زبان **فارسی (RTL)**، **انگلیسی** و **عربی (RTL)** پشتیبانی می‌کند و شامل احراز هویت کاربر، دسته‌بندی مقالات، جستجو، و یک بک‌اند موک (Mock API) مبتنی بر json-server است.

### ویژگی‌های اصلی

- 📰 نمایش مقالات ویژه (Featured) و آخرین مقالات
- 🔎 جستجوی مقالات
- 🗂️ صفحات دسته‌بندی (Category)
- 🔐 احراز هویت کاربر (ثبت‌نام / ورود / خروج) با JWT
- 🌍 چندزبانه با i18next (fa / en / ar) و پشتیبانی کامل از RTL
- 🎨 استایل‌دهی با Tailwind CSS v4 و کامپوننت‌های shadcn/ui (بر پایه Radix UI)
- ⚡ مدیریت state سرور با TanStack Query
- 📝 فرم‌ها با React Hook Form + Zod
- 🧪 تست‌نویسی با Vitest
- 🧹 لینت با ESLint و فرمت‌دهی خودکار Import ها با Prettier
- 🚀 انتشار خودکار نسخه با Semantic Release

### تکنولوژی‌های استفاده‌شده

| بخش                 | تکنولوژی                             |
|---------------------|--------------------------------------|
| فریم‌ورک            | React 19 + Vite 8                    |
| زبان                | TypeScript                           |
| استایل              | Tailwind CSS v4, shadcn/ui, Radix UI |
| مسیریابی            | React Router v7                      |
| مدیریت داده سرور    | TanStack Query                       |
| فرم و اعتبارسنجی    | React Hook Form, Zod                 |
| چندزبانگی           | i18next, react-i18next               |
| درخواست HTTP        | Axios                                |
| احراز هویت          | JSON Web Token (jsonwebtoken)        |
| بک‌اند موک          | json-server + Express (server.cjs)   |
| تست                 | Vitest                               |
| مدیریت state سراسری | Zustand                              |

### پیش‌نیازها

- Node.js نسخه `22.17.0` یا بالاتر (فایل `.nvmrc` موجود است)
- npm

### نصب و راه‌اندازی (به‌صورت محلی)

```bash
# ۱. کلون کردن مخزن
git clone https://github.com/m0st4f4/Blog-React-TS.git
cd Blog-React-TS

# ۲. نصب وابستگی‌ها
npm install

# ۳. اجرای بک‌اند موک (json-server) در یک ترمینال
npm run api

# ۴. اجرای فرانت‌اند در ترمینال دیگر
npm run dev
```

پس از اجرا:
- فرانت‌اند روی آدرس `http://localhost:5173` در دسترس است.
- بک‌اند موک روی آدرس `http://localhost:4000` اجرا می‌شود.

> 💡 در صورت نیاز می‌توانید آدرس API را با متغیر محیطی `VITE_API_BASE_URL` تغییر دهید (یک فایل `.env` بسازید).

### اسکریپت‌های موجود

| دستور             | توضیح                                |
|-------------------|--------------------------------------|
| `npm run dev`     | اجرای سرور توسعه Vite                |
| `npm run build`   | بیلد نهایی پروژه (شامل type-check)   |
| `npm run preview` | پیش‌نمایش نسخه بیلد شده              |
| `npm run lint`    | اجرای ESLint                         |
| `npm run api`     | اجرای بک‌اند موک (json-server + JWT) |

### ساختار پروژه (خلاصه)

```
src/
├── components/     # کامپوننت‌های قابل استفاده مجدد
├── forms/          # فرم‌ها (Login, Register, ...)
├── hooks/          # کاستوم هوک‌ها (React Query, ...)
├── layouts/        # لایه‌های صفحه (RootLayout, SidebarLayout)
├── locales/        # فایل‌های ترجمه (fa, en, ar)
├── pages/          # صفحات اصلی روتر
├── providers/      # Context Provider ها (Auth, Search)
├── schema/         # اسکیمای اعتبارسنجی Zod
├── services/       # سرویس‌های ارتباط با API
├── types/          # تایپ‌های TypeScript
└── icons/          # آیکون‌های SVG
```

### 🐳 اجرا با Docker

> ⚠️ این بخش هنوز تکمیل نشده و در آینده کامل خواهد شد. نمونه اولیه‌ای که می‌توانید به‌عنوان نقطه شروع استفاده کنید:

```dockerfile
# Dockerfile (پیش‌نویس - نیاز به تکمیل)
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```yaml
# docker-compose.yml (پیش‌نویس - نیاز به تکمیل)
services:
  frontend:
    build: .
    ports:
      - "5173:80"
    depends_on:
      - api

  api:
    image: node:22-alpine
    working_dir: /app
    volumes:
      - .:/app
    command: sh -c "npm ci && npm run api"
    ports:
      - "4000:4000"
```

موارد باقی‌مانده برای تکمیل:
- [ ] تنظیم متغیرهای محیطی (env) برای هر دو سرویس
- [ ] بهینه‌سازی Dockerfile چندمرحله‌ای (multi-stage) برای api
- [ ] افزودن healthcheck
- [ ] تنظیم شبکه (network) مشترک بین frontend و api
- [ ] مستندسازی نهایی دستورات `docker compose up`

### مشارکت

اگر مایل به مشارکت هستید، لطفاً یک Issue باز کنید یا Pull Request ارسال کنید. پیام‌های Commit باید از الگوی [Conventional Commits](https://www.conventionalcommits.org/) پیروی کنند (با کمک `commitizen`: دستور `npx cz`).

### لایسنس

این پروژه تحت لایسنس [MIT](./LICENSE) منتشر شده است.
