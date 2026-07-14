import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Loans from "./pages/Loans";
import AddLoan from "./pages/AddLoan";
import FinancialAnalysis from "./pages/FinancialAnalysis";
import AIRecommendation from "./pages/AIRecommendation";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import EditLoan from "./pages/EditLoan";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/add-loan" element={<AddLoan />} />
        <Route path="/edit-loan/:id" element={<EditLoan />} />
        <Route path="/financial" element={<FinancialAnalysis />} />
        <Route path="/ai" element={<AIRecommendation />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;