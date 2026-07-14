from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserLogin
from app.auth.password import hash_password, verify_password
from app.auth.jwt_handler import create_access_token
from app.auth.oauth2 import get_current_user
router = APIRouter()

@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    try:
        existing_user = db.query(User).filter(User.email == user.email).first()

        if existing_user:
            raise HTTPException(status_code=400, detail="User already exists")

        print("Hashing password...")
        hashed = hash_password(user.password)
        print("Password hashed successfully")

        new_user = User(
            name=user.name,
            email=user.email,
            password=hashed
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return {"message": "User registered successfully"}

    except Exception as e:
        print("ERROR:", e)
        raise HTTPException(status_code=500, detail=str(e))


# LOGIN
@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    if not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    token = create_access_token({"user_id": db_user.id})

    return {
        "access_token": token,
        "token_type": "bearer"
    }
@router.get("/me")
def get_me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "name": current_user.name,
        "email": current_user.email,
    }