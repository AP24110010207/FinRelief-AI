import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-5">
            <h2 className="text-2xl font-bold mb-6">Menu</h2>

            <ul className="space-y-4">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/loans">Loans</Link></li>
                <li><Link to="/financial">Financial Analysis</Link></li>
                <li><Link to="/ai">AI Recommendation</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;