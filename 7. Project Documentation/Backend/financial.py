from pydantic import BaseModel

class FinancialInput(BaseModel):
    income: float
    expenses: float
    emi: float
    outstanding: float
    overdue: int