# Basic React + FastAPI Project

This project has separate frontend and backend folders to understand basic request flow.

## Project Structure

- `frontend/` -> React app (Vite)
- `backend/` -> FastAPI app

## 1) Run Backend (FastAPI)

```bash
cd backend
python -m venv .venv
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Backend URL: `http://127.0.0.1:8000`

## 2) Run Frontend (React)

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL: `http://localhost:5173`

## How Flow Works

1. Frontend button calls `GET /ping` on FastAPI.
2. Backend sends JSON response.
3. Frontend displays backend message and timestamp.

## Optional: Configure API URL

If needed, create `frontend/.env`:

```bash
VITE_API_BASE_URL=http://127.0.0.1:8000
```
