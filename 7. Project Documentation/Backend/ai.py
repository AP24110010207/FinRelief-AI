from pydantic import BaseModel

class AIRequest(BaseModel):
    income: float
    expenses: float
    emi: float
    outstanding: float
    overdue: int