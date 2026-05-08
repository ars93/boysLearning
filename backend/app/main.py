from datetime import datetime, timezone

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Basic Flow API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root() -> dict:
    return {"message": "API is running"}


@app.get("/ping")
def ping() -> dict:
    return {
        "message": "Hello from FastAPI backend!",
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }

@app.post("/formSubmit")
def form_submit(data: dict) -> dict:
    return {
        "message": "Form submitted successfully!",
        "data": data,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
