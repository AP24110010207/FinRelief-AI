import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../Services/api";

function Loans() {
  const [loans, setLoans] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadLoans();
  }, []);

  const loadLoans = async () => {
    try {
      const res = await api.get("/loan/all");
      setLoans(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load loans");
    }
  };

  const deleteLoan = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this loan?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/loan/${id}`);
      alert("Loan deleted successfully");
      loadLoans();
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  const filteredLoans = loans.filter((loan) =>
    (loan.loan_name || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-gray-100 min-h-screen p-8">

          <div className="flex justify-between items-center mb-8">

            <h1 className="text-4xl font-bold">
              Loan Management
            </h1>

            <Link
              to="/add-loan"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
            >
              + Add Loan
            </Link>

          </div>

          <input
            type="text"
            placeholder="Search Loan..."
            className="border rounded-lg p-3 w-80 mb-6"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <table className="w-full">

              <thead className="bg-blue-700 text-white">

                <tr>
                  <th className="p-4">Loan Name</th>
                  <th>Lender</th>
                  <th>Outstanding</th>
                  <th>EMI</th>
                  <th>Interest</th>
                  <th>Overdue</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>

              </thead>

              <tbody>

                {filteredLoans.length > 0 ? (

                  filteredLoans.map((loan) => (

                    <tr
                      key={loan.id}
                      className="border-b hover:bg-gray-50 text-center"
                    >

                      <td className="p-4">
                        {loan.loan_name}
                      </td>

                      <td>{loan.lender}</td>

                      <td>
                        ₹{loan.outstanding_amount}
                      </td>

                      <td>
                        ₹{loan.emi}
                      </td>

                      <td>
                        {loan.interest_rate}%
                      </td>

                      <td>
                        {loan.overdue_months} Months
                      </td>

                      <td>

                        <span
                          className={`px-3 py-1 rounded-full text-white ${
                            loan.status === "Active"
                              ? "bg-green-600"
                              : "bg-gray-500"
                          }`}
                        >
                          {loan.status}
                        </span>

                      </td>

                      <td className="space-x-2">

                        <Link
                          to={`/edit-loan/${loan.id}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => deleteLoan(loan.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="8"
                      className="text-center p-8 text-gray-500"
                    >
                      No loans found.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </>
  );
}

export default Loans;