# 💰 FinRelief AI

An AI-powered Debt Settlement and Financial Analysis System built using **FastAPI**, **React.js**, **SQLite**, and **JWT Authentication**.

---

## 📌 Project Overview

FinRelief AI helps users manage their loans, analyze their financial health, and receive AI-based debt settlement recommendations. The system provides a secure platform with user authentication, loan management, dashboards, and financial insights.

---

## 🚀 Features

### 👤 User Authentication
- User Registration
- User Login
- JWT Authentication
- User Profile

### 💳 Loan Management
- Add Loan
- View Loans
- Edit Loan
- Delete Loan
- Search Loans

### 📊 Dashboard
- Total Loans
- Total Outstanding Amount
- Monthly EMI
- Financial Health Score
- Charts using Chart.js

### 📈 Financial Analysis
- Monthly Surplus
- EMI Ratio
- Debt Ratio
- Financial Stress Level
- Health Score
- Settlement Percentage
- Recommended Settlement Amount

### 🤖 AI Recommendation
- AI-based Debt Recovery Suggestions
- Personalized Financial Advice

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router
- Chart.js

### Backend
- FastAPI
- SQLAlchemy
- SQLite
- JWT Authentication
- Pydantic

---

## 📂 Project Structure

```
FinRelief-AI
│
├── backend
│   ├── app
│   ├── requirements.txt
│   └── main.py
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚙ Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/FinRelief-AI.git
```

---

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 📡 API Modules

- Authentication
- Loan Management
- Dashboard
- Financial Analysis
- AI Recommendation
- User Profile

---

## 🔒 Authentication

JWT (JSON Web Token) is used for secure user authentication.

---

## 💡 Future Enhancements

- Email Notifications
- AI Chatbot
- Loan EMI Calculator
- Loan Prediction
- Admin Dashboard
- Cloud Deployment
- Mobile Application

---

## 👩‍💻 Author

**Jalli Ratna Mahitha**

B.Tech CSE

SRM University AP

---

## 📄 License

This project is licensed under the MIT License.