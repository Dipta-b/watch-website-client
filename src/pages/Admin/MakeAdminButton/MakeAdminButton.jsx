import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../components/hooks/useAuth";

const MakeAdminButton = () => {
    const { token, admin } = useAuth();
    const [users, setUsers] = useState([]);

    // Fetch pending users
    useEffect(() => {
        if (!token) return; // wait for token
        if (!admin) return; // only fetch if user is admin

        const fetchPendingUsers = async () => {
            try {
                const res = await axios.get("http://localhost:5000/users/pending", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUsers(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchPendingUsers();
    }, [admin, token]);


    // Approve user
    const handleApprove = async (email) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: `Approve ${email} as admin?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, approve",
        });

        if (result.isConfirmed) {
            try {
                await axios.patch(
                    `http://localhost:5000/users/approve/${email}`,
                    {},
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setUsers((prev) => prev.filter((u) => u.email !== email));
                Swal.fire("Approved!", `${email} is now admin.`, "success");
            } catch (err) {
                console.error(err);
                Swal.fire("Error!", "Failed to approve user.", "error");
            }
        }
    };

    // Reject user
    const handleReject = async (email) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: `Reject ${email} from the system?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, reject",
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:5000/users/reject/${email}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUsers((prev) => prev.filter((u) => u.email !== email));
                Swal.fire("Rejected!", `${email} has been removed.`, "success");
            } catch (err) {
                console.error(err);
                Swal.fire("Error!", "Failed to reject user.", "error");
            }
        }
    };

    if (!admin) return <p className="text-gray-400 p-6">You are not authorized to view this page.</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Pending Users</h2>

            {users.length === 0 ? (
                <p className="text-gray-400">No pending users.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <div
                            key={user.email}
                            className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-col justify-between"
                        >
                            <div>
                                <p className="font-semibold text-lg">{user.name}</p>
                                <p className="text-gray-300">{user.email}</p>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <button
                                    className="btn btn-success btn-sm flex-1 flex items-center justify-center gap-1"
                                    onClick={() => handleApprove(user.email)}
                                >
                                    <FaUserCheck /> Approve
                                </button>
                                <button
                                    className="btn btn-error btn-sm flex-1 flex items-center justify-center gap-1"
                                    onClick={() => handleReject(user.email)}
                                >
                                    <FaUserTimes /> Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MakeAdminButton;
