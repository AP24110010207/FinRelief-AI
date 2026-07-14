def analyze_finances(data):
    monthly_surplus = data.income - data.expenses - data.emi
    emi_ratio = (data.emi / data.income) * 100 if data.income else 0
    debt_ratio = (data.outstanding / (data.income * 12)) * 100 if data.income else 0

    if emi_ratio < 30:
        stress = "Low"
        score = 90
    elif emi_ratio < 50:
        stress = "Medium"
        score = 70
    else:
        stress = "High"
        score = 40

    if data.overdue >= 12:
        settlement_percent = 55
    elif data.overdue >= 6:
        settlement_percent = 70
    else:
        settlement_percent = 85

    settlement_amount = data.outstanding * settlement_percent / 100

    return {
        "monthly_surplus": monthly_surplus,
        "emi_ratio": round(emi_ratio, 2),
        "debt_ratio": round(debt_ratio, 2),
        "stress_level": stress,
        "health_score": score,
        "settlement_percent": settlement_percent,
        "recommended_settlement": round(settlement_amount, 2),
    }