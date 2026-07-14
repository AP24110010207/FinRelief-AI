import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function LoanPieChart({ loans }) {

  const data = {
    labels: loans.map((loan) => loan.loan_name),

    datasets: [
      {
        data: loans.map(
          (loan) => loan.outstanding_amount
        ),
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        Loan Distribution
      </h2>

      <Pie data={data} />
    </div>
  );
}

export default LoanPieChart;