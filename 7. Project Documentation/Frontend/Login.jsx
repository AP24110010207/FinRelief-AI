import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../Services/api";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const loginUser = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post("/auth/login", form);

            localStorage.setItem(
                "token",
                res.data.access_token
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch (err) {

            alert(
                err.response?.data?.detail ||
                "Login Failed"
            );
        }

    };

    return (

        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <form
                onSubmit={loginUser}
                className="bg-white p-8 rounded-lg shadow-lg w-96"
            >

                <h2 className="text-3xl font-bold text-center mb-6">
                    Login
                </h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-3 mb-4"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border p-3 mb-4"
                    onChange={handleChange}
                />

                <button
                    className="bg-green-600 text-white w-full p-3 rounded"
                >
                    Login
                </button>

                <p className="text-center mt-4">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-blue-700 ml-2"
                    >
                        Register
                    </Link>

                </p>

            </form>

        </div>

    );
}

export default Login;