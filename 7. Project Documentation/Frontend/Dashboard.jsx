import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import api from "../Services/api";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
);

function Dashboard() {

    const [summary, setSummary] = useState({
        total_loans: 0,
        outstanding: 0,
        emi: 0,
        health_score: 100,
    });

    useEffect(() => {
        loadSummary();
    }, []);

    const loadSummary = async () => {
        try {
            const res = await api.get("/dashboard/summary");
            setSummary(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const pieData = {
        labels: ["Outstanding", "Remaining Health"],
        datasets: [
            {
                data: [
                    summary.health_score,
                    100 - summary.health_score,
                ],
            },
        ],
    };

    const barData = {
        labels: ["Outstanding", "Monthly EMI"],
        datasets: [
            {
                label: "₹ Amount",
                data: [
                    summary.outstanding,
                    summary.emi,
                ],
            },
        ],
    };

    return (
        <>
            <Navbar />

            <div className="flex">

                <Sidebar />

                <div className="flex-1 bg-gray-100 min-h-screen p-8">

                    <h1 className="text-4xl font-bold mb-8">
                        Dashboard
                    </h1>

                    <div className="grid grid-cols-4 gap-6 mb-10">

                        <DashboardCard
                            title="Loans"
                            value={summary.total_loans}
                            color="bg-blue-600"
                        />

                        <DashboardCard
                            title="Outstanding"
                            value={`₹${summary.outstanding}`}
                            color="bg-red-500"
                        />

                        <DashboardCard
                            title="Monthly EMI"
                            value={`₹${summary.emi}`}
                            color="bg-green-600"
                        />

                        <DashboardCard
                            title="Health Score"
                            value={`${summary.health_score}%`}
                            color="bg-purple-600"
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-8">

                        <div className="bg-white p-6 rounded-xl shadow-lg">

                            <h2 className="text-2xl font-bold mb-4">
                                Financial Health
                            </h2>

                            <Pie data={pieData} />

                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">

                            <h2 className="text-2xl font-bold mb-4">
                                Loan Summary
                            </h2>

                            <Bar data={barData} />

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Dashboard;