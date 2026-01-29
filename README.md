# Knowly MVP

Stack: **React** (JS) + **Tailwind CSS** | **Node.js** (Express) | **PostgreSQL**

Test app: a counter stored in the database.

---

## Quick start

### 1. PostgreSQL (optional)

If PostgreSQL is not available, the backend uses an **in-memory counter** so the site still works.

**Option A — Docker** (Docker Desktop must be running):

```bash
docker compose up -d
```

> If you see `open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified` → start **Docker Desktop** and wait until it’s ready, then run `docker compose up -d` again.

**Option B — Local PostgreSQL** (no Docker):

1. Install [PostgreSQL](https://www.postgresql.org/download/windows/) and remember the password for user `postgres`.
2. Create the database:
   ```bash
   psql -U postgres -c "CREATE DATABASE unismart;"
   ```
3. In `backend/.env` set (adjust user/password/host/port if needed):
   ```
   DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/unismart
   ```

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

API: http://localhost:8000

> From project root: `npm run dev:backend`

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

App: http://localhost:5173

> From project root: `npm run dev:frontend`

---

## Project layout

```
UniSmartMVP/
├── package.json       # Root scripts: dev:backend, dev:frontend
├── backend/           # Node.js + Express + pg
│   ├── src/
│   │   ├── index.js
│   │   └── db.js
│   └── package.json
├── frontend/          # React + Vite + Tailwind
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
├── docker-compose.yml # PostgreSQL
└── README.md
```

## Env (optional)

`backend/.env`:

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/unismart
PORT=8000
```

Defaults: this `DATABASE_URL` and `PORT=8000` if `.env` is missing.
