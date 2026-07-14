import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function LoanBarChart({ loans }) {

  const data = {

    labels: loans.map((loan) => loan.loan_name),

    datasets: [

      {
        label: "Outstanding Amount",

        data: loans.map(
          (loan) => loan.outstanding_amount
        ),
      },

    ],

  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-bold mb-4">
        Outstanding Amount
      </h2>

      <Bar data={data} />

    </div>
  );
}

export default LoanBarChart;