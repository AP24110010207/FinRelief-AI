import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../Services/api";

function AddLoan() {
  const navigate = useNavigate();

 const [loan, setLoan] = useState({
  loan_name: "",
  lender: "",
  outstanding_amount: "",
  emi: "",
  interest_rate: "",
  overdue_months: "",
});

  const handleChange = (e) => {
    setLoan({
      ...loan,
      [e.target.name]: e.target.value,
    });
  };

  const saveLoan = async (e) => {
    e.preventDefault();

    try {
      await api.post("/loan/add", {
  loan_name: loan.loan_name,
  lender: loan.lender,
  outstanding_amount: Number(loan.outstanding_amount),
  emi: Number(loan.emi),
  interest_rate: Number(loan.interest_rate),
  overdue_months: Number(loan.overdue_months),
});
      alert("Loan Added Successfully");
      navigate("/loans");
    } catch (err) {
    console.log("Full Error:", err);
    console.log("Response:", err.response);
    console.log("Data:", err.response?.data);

    alert(
        JSON.stringify(
            err.response?.data || err.message,
            null,
            2
        )
    );
}
  };

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-8 bg-gray-100 min-h-screen">

          <h1 className="text-4xl font-bold mb-8">
            Add Loan
          </h1>

          <form
            onSubmit={saveLoan}
            className="bg-white p-8 rounded shadow max-w-xl"
          >
<input
  className="border p-3 w-full mb-4"
  placeholder="Loan Name"
  name="loan_name"
  onChange={handleChange}
/>

<input
  className="border p-3 w-full mb-4"
  placeholder="Lender"
  name="lender"
  onChange={handleChange}
/>

<input
  className="border p-3 w-full mb-4"
  placeholder="Outstanding Amount"
  name="outstanding_amount"
  onChange={handleChange}
/>

<input
  className="border p-3 w-full mb-4"
  placeholder="Monthly EMI"
  name="emi"
  onChange={handleChange}
/>

<input
  className="border p-3 w-full mb-4"
  placeholder="Interest Rate (%)"
  name="interest_rate"
  onChange={handleChange}
/>

<input
  className="border p-3 w-full mb-4"
  placeholder="Overdue Months"
  name="overdue_months"
  onChange={handleChange}
/>

            <button className="bg-blue-700 text-white px-6 py-3 rounded w-full">
              Save Loan
            </button>

          </form>

        </div>
      </div>
    </>
  );
}

export default AddLoan;