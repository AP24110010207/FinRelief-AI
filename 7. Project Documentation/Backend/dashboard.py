from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database.database import get_db
from app.models.loan import Loan
from app.models.user import User
from app.auth.oauth2 import get_current_user

router = APIRouter()


@router.get("/summary")
def dashboard_summary(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    loans = (
        db.query(Loan)
        .filter(Loan.user_id == current_user.id)
        .all()
    )

    total_loans = len(loans)

    outstanding = (
        db.query(func.sum(Loan.outstanding_amount))
        .filter(Loan.user_id == current_user.id)
        .scalar()
        or 0
    )

    emi = (
        db.query(func.sum(Loan.emi))
        .filter(Loan.user_id == current_user.id)
        .scalar()
        or 0
    )

    # Health Score
    if outstanding == 0:
        health_score = 100
    elif outstanding < 100000:
        health_score = 90
    elif outstanding < 300000:
        health_score = 75
    elif outstanding < 500000:
        health_score = 60
    else:
        health_score = 40

    return {
        "total_loans": total_loans,
        "outstanding": outstanding,
        "emi": emi,
        "health_score": health_score,
    }