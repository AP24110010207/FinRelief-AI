import { useState } from "react";
import api from "../Services/api";

function FinancialAnalysis() {
  const [form, setForm] = useState({
    income: "",
    expenses: "",
    emi: "",
    outstanding: "",
    overdue: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const analyze = async () => {
    try {
      const res = await api.post("/financial/analyze", {
        income: Number(form.income),
        expenses: Number(form.expenses),
        emi: Number(form.emi),
        outstanding: Number(form.outstanding),
        overdue: Number(form.overdue),
      });

      setResult(res.data);
    } catch (err) {
      console.log(err);
      alert("Analysis Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">

      <h1 className="text-4xl font-bold mb-8">
        Financial Analysis
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-[500px]">

        <input
          className="border p-3 w-full mb-3"
          placeholder="Monthly Income"
          name="income"
          onChange={handleChange}
        />

        <input
          className="border p-3 w-full mb-3"
          placeholder="Monthly Expenses"
          name="expenses"
          onChange={handleChange}
        />

        <input
          className="border p-3 w-full mb-3"
          placeholder="Monthly EMI"
          name="emi"
          onChange={handleChange}
        />

        <input
          className="border p-3 w-full mb-3"
          placeholder="Outstanding Amount"
          name="outstanding"
          onChange={handleChange}
        />

        <input
          className="border p-3 w-full mb-3"
          placeholder="Overdue Months"
          name="overdue"
          onChange={handleChange}
        />

        <button
          onClick={analyze}
          className="bg-blue-700 text-white w-full p-3 rounded"
        >
          Analyze
        </button>

      </div>

      {result && (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8 w-[700px]">

          <h2 className="text-2xl font-bold mb-4">
            Financial Analysis Result
          </h2>

          <p><b>Monthly Surplus:</b> ₹{result.monthly_surplus}</p>

          <p><b>EMI Ratio:</b> {result.emi_ratio}%</p>

          <p><b>Debt Ratio:</b> {result.debt_ratio}%</p>

          <p><b>Stress Level:</b> {result.stress_level}</p>

          <p><b>Health Score:</b> {result.health_score}/100</p>

          <p><b>Settlement Percentage:</b> {result.settlement_percent}%</p>

          <p><b>Recommended Settlement:</b> ₹{result.recommended_settlement}</p>

        </div>
      )}

    </div>
  );
}

export default FinancialAnalysis;