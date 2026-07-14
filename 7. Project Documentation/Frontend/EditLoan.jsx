import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../Services/api";

function EditLoan() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [loan, setLoan] = useState({
    loan_name: "",
    lender: "",
    outstanding_amount: "",
    emi: "",
    interest_rate: "",
    overdue_months: "",
  });

  useEffect(() => {
    loadLoan();
  }, []);

  const loadLoan = async () => {
    try {
      const res = await api.get(`/loan/${id}`);
      setLoan(res.data);
    } catch (err) {
      console.log(err);
      alert("Unable to load loan");
    }
  };

  const handleChange = (e) => {
    setLoan({
      ...loan,
      [e.target.name]: e.target.value,
    });
  };

  const updateLoan = async (e) => {
    e.preventDefault();

    try {

      await api.put(`/loan/${id}`, {
        loan_name: loan.loan_name,
        lender: loan.lender,
        outstanding_amount: Number(loan.outstanding_amount),
        emi: Number(loan.emi),
        interest_rate: Number(loan.interest_rate),
        overdue_months: Number(loan.overdue_months),
      });

      alert("Loan Updated Successfully");

      navigate("/loans");

    } catch (err) {

      console.log(err);
      alert("Update Failed");

    }
  };

  return (
    <>
      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8 bg-gray-100 min-h-screen">

          <h1 className="text-4xl font-bold mb-8">
            Edit Loan
          </h1>

          <form
            onSubmit={updateLoan}
            className="bg-white p-8 rounded shadow max-w-xl"
          >

            <input
              className="border p-3 w-full mb-4"
              name="loan_name"
              value={loan.loan_name}
              placeholder="Loan Name"
              onChange={handleChange}
            />

            <input
              className="border p-3 w-full mb-4"
              name="lender"
              value={loan.lender}
              placeholder="Lender"
              onChange={handleChange}
            />

            <input
              className="border p-3 w-full mb-4"
              name="outstanding_amount"
              value={loan.outstanding_amount}
              placeholder="Outstanding Amount"
              onChange={handleChange}
            />

            <input
              className="border p-3 w-full mb-4"
              name="emi"
              value={loan.emi}
              placeholder="Monthly EMI"
              onChange={handleChange}
            />

            <input
              className="border p-3 w-full mb-4"
              name="interest_rate"
              value={loan.interest_rate}
              placeholder="Interest Rate"
              onChange={handleChange}
            />

            <input
              className="border p-3 w-full mb-6"
              name="overdue_months"
              value={loan.overdue_months}
              placeholder="Overdue Months"
              onChange={handleChange}
            />

            <button className="bg-green-600 text-white px-6 py-3 rounded w-full">
              Update Loan
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default EditLoan;