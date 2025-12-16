# 🚀 Hirex

**Hirex** is a lightweight, open-source hiring API designed for **candidates and recruiters**.  
It serves as a clean backend foundation that anyone can **clone, customize, and deploy** to build their own hiring platform.

Built to demonstrate **real-world backend practices** without overengineering.

---

## 🔥 Tech Stack

- ⚡ **Hono** — fast, modern HTTP server
- 🟦 **TypeScript** — type-safe by default
- 🔐 **JWT Auth** — access + refresh tokens
- 🗄️ **SQL + ORM** — migrations and schema management
- 🧾 **Raw SQL** — for advanced and optimized queries
- ⏱️ **Cron Jobs** — scheduled emails and background tasks

---

## 🧱 Project Structure

```txt
src/
├─ application
│  ├─ models
│  ├─ dtos
│  ├─ enums
│  ├─ repositories
│  └─ services
│
├─ infra
│  ├─ database
│  │  ├─ migrations
│  │  ├─ repositories
│  │  └─ sql
│  ├─ auth
│  ├─ mail
│  ├─ scheduler
│  └─ config
│
├─ presentation
│  └─ http
│     ├─ routes
│     ├─ controllers
│     └─ middlewares
│
└─ main.ts
