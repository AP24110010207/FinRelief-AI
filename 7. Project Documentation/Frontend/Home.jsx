import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-indigo-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5">
        <h1 className="text-3xl font-bold">
          💰 FinRelief AI
        </h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-24">
        <h2 className="text-6xl font-extrabold mb-6">
          AI-Powered Debt Management
        </h2>

        <p className="text-xl max-w-3xl mb-10">
          Manage your loans, analyze your financial health,
          and receive intelligent AI-powered settlement
          recommendations—all in one place.
        </p>

        <Link
          to="/register"
          className="bg-yellow-400 text-black px-8 py-4 rounded-xl text-xl font-bold hover:bg-yellow-300"
        >
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">

        <div className="bg-white text-black rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            📊 Financial Analysis
          </h3>

          <p>
            Calculate EMI ratio, debt ratio, health score,
            monthly surplus, and stress level.
          </p>
        </div>

        <div className="bg-white text-black rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            🤖 AI Recommendation
          </h3>

          <p>
            Receive AI-generated debt settlement plans
            tailored to your financial situation.
          </p>
        </div>

        <div className="bg-white text-black rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            💳 Loan Management
          </h3>

          <p>
            Add, update, and monitor all your loans in one
            secure dashboard.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-blue-500">
        <p>
          © 2026 FinRelief AI • Built with React + FastAPI + AI
        </p>
      </footer>

    </div>
  );
}

export default Home;