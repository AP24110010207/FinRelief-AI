from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.auth.oauth2 import get_current_user
from app.models.user import User

router = APIRouter()

@router.get("/me")
def get_profile(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return {
        "id": current_user.id,
        "name": current_user.name,
        "email": current_user.email,
    }