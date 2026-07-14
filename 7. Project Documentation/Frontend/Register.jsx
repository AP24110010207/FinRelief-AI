import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../Services/api";

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const registerUser = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post("/auth/register", form);

            alert(res.data.message);

            navigate("/login");

        } catch (err) {
    console.log(err);
    console.log(err.response);
    console.log(err.response?.data);

    alert(JSON.stringify(err.response?.data || err.message));
}
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-blue-100">

            <form
                onSubmit={registerUser}
                className="bg-white p-8 rounded-lg shadow-lg w-96"
            >

                <h2 className="text-3xl font-bold mb-6 text-center">
                    Register
                </h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full border p-3 mb-4"
                    onChange={handleChange}
                />

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
                    className="bg-blue-700 text-white w-full p-3 rounded"
                >
                    Register
                </button>

                <p className="text-center mt-4">
                    Already have an account?

                    <Link
                        className="text-blue-700 ml-2"
                        to="/login"
                    >
                        Login
                    </Link>
                </p>

            </form>

        </div>
    );
}

export default Register;