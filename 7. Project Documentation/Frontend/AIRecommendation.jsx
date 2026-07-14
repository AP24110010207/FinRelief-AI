import { useState } from "react";
import api from "../Services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AIRecommendation() {
  const [form, setForm] = useState({
    income: "",
    expenses: "",
    emi: "",
    outstanding: "",
    overdue: "",
  });

  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const generateRecommendation = async () => {
    if (
      !form.income ||
      !form.expenses ||
      !form.emi ||
      !form.outstanding ||
      !form.overdue
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/ai/settlement", {
        income: Number(form.income),
        expenses: Number(form.expenses),
        emi: Number(form.emi),
        outstanding: Number(form.outstanding),
        overdue: Number(form.overdue),
      });

      setResponse(res.data.ai_response);
    } catch (err) {
      console.log(err);
      alert("AI Recommendation Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-gray-100 min-h-screen p-8">

          <h1 className="text-4xl font-bold mb-8">
            🤖 AI Debt Recovery Assistant
          </h1>

          <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl">

            <div className="grid grid-cols-2 gap-4">

              <input
                className="border p-3 rounded"
                placeholder="Monthly Income"
                name="income"
                onChange={handleChange}
              />

              <input
                className="border p-3 rounded"
                placeholder="Monthly Expenses"
                name="expenses"
                onChange={handleChange}
              />

              <input
                className="border p-3 rounded"
                placeholder="Monthly EMI"
                name="emi"
                onChange={handleChange}
              />

              <input
                className="border p-3 rounded"
                placeholder="Outstanding Loan"
                name="outstanding"
                onChange={handleChange}
              />

              <input
                className="border p-3 rounded"
                placeholder="Overdue Months"
                name="overdue"
                onChange={handleChange}
              />

            </div>

            <div className="flex gap-4 mt-6">

              <button
                onClick={generateRecommendation}
                className="bg-blue-700 text-white px-6 py-3 rounded"
              >
                {loading ? "Generating..." : "Generate Recommendation"}
              </button>

              <button
                onClick={() => {
                  setForm({
                    income: "",
                    expenses: "",
                    emi: "",
                    outstanding: "",
                    overdue: "",
                  });
                  setResponse("");
                }}
                className="bg-gray-500 text-white px-6 py-3 rounded"
              >
                Reset
              </button>

            </div>

          </div>

          {response && (

            <div className="bg-white shadow-lg rounded-lg p-6 mt-8">

              <h2 className="text-2xl font-bold mb-4">
                AI Recommendation
              </h2>

              <pre
                className="whitespace-pre-wrap text-gray-700 leading-7"
              >
                {response}
              </pre>

            </div>

          )}

        </div>

      </div>
    </>
  );
}

export default AIRecommendation;