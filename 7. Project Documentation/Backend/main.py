from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Database
from app.database.database import Base, engine

# Models
from app.models.user import User
from app.models.loan import Loan

# Routers
from app.api.auth import router as auth_router
from app.api.loan import router as loan_router
from app.api.financial import router as financial_router
from app.api.ai import router as ai_router
from app.api.dashboard import router as dashboard_router
from app.api.profile import router as profile_router

# Create Database Tables
Base.metadata.create_all(bind=engine)

# FastAPI App
app = FastAPI(
    title="FinRelief AI",
    version="1.0.0"
)

# -----------------------------
# CORS Configuration
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# API Routers
# -----------------------------
app.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"]
)

app.include_router(
    loan_router,
    prefix="/loan",
    tags=["Loan Management"]
)

app.include_router(
    financial_router,
    prefix="/financial",
    tags=["Financial Analysis"]
)

app.include_router(
    ai_router,
    prefix="/ai",
    tags=["AI Recommendation"]
)

app.include_router(
    dashboard_router,
    prefix="/dashboard",
    tags=["Dashboard"]
)

app.include_router(
    profile_router,
    prefix="/profile",
    tags=["Profile"]
)

# -----------------------------
# Root Endpoint
# -----------------------------
@app.get("/")
def root():
    return {
        "message": "FinRelief AI Backend Running 🚀",
        "status": "success"
    }