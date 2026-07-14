import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def generate_settlement_recommendation(data):
    prompt = f"""
You are a financial debt recovery expert.

Borrower Details:
Monthly Income: ₹{data['income']}
Monthly Expenses: ₹{data['expenses']}
Monthly EMI: ₹{data['emi']}
Outstanding Loan: ₹{data['outstanding']}
Overdue Months: {data['overdue']}

Generate:
1. Settlement Recommendation
2. Negotiation Strategy
3. Financial Advice
4. Professional Settlement Request Letter
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text