import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../Services/api";

function Profile() {

    const [user, setUser] = useState({});

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            const res = await api.get("/profile/me");
            setUser(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Navbar />

            <div className="flex">
                <Sidebar />

                <div className="flex-1 p-10 bg-gray-100 min-h-screen">

                    <div className="bg-white p-8 rounded-lg shadow max-w-xl">

                        <h1 className="text-3xl font-bold mb-6">
                            My Profile
                        </h1>

                        <p className="mb-4">
                            <b>Name:</b> {user.name}
                        </p>

                        <p className="mb-4">
                            <b>Email:</b> {user.email}
                        </p>

                        <p>
                            <b>User ID:</b> {user.id}
                        </p>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Profile;