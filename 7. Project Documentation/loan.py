from pydantic import BaseModel

class LoanCreate(BaseModel):
    loan_name: str
    lender: str
    outstanding_amount: float
    emi: float
    interest_rate: float
    overdue_months: int

class LoanResponse(LoanCreate):
    id: int
    status: str

    class Config:
        from_attributes = True