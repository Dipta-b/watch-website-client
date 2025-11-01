import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../components/hooks/useAuth";
import { FaTimes } from "react-icons/fa";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { user } = useAuth();

    // State for modal
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (user?.email) {
            axios
                .get(`http://localhost:5000/watches/cart?email=${user.email}`)
                .then((res) => {
                    setCartItems(res.data);
                })
                .catch((err) => console.error(err));
        }
    }, [user?.email]);

    return (
        <div className="overflow-x-auto p-4">
            <table className="table w-full rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Watch Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody className="bg-gray-900 text-gray-200">
                    {cartItems.map((item, idx) => (
                        <tr
                            key={item._id || idx}
                            className={idx % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                        >
                            <td>
                                <input type="checkbox" className="checkbox" />
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={item?.image}
                                            alt={item?.watchName || "Watch"}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="font-semibold">{item?.watchName}</td>
                            <td>${item?.price || "N/A"}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-primary"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-gray-900 text-gray-100 rounded-xl w-11/12 md:w-3/4 lg:w-1/2 p-6 relative shadow-2xl transform scale-95 animate-scaleUp">

                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-red-500 hover:text-red-600 text-2xl transition"
                            onClick={() => setSelectedItem(null)}
                        >
                            <FaTimes />
                        </button>

                        {/* Modal Content */}
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Image */}
                            <img
                                src={selectedItem.image || "https://via.placeholder.com/300x200"}
                                alt={selectedItem.watchName}
                                className="w-full md:w-1/3 h-56 md:h-full object-cover rounded-lg shadow-md border border-gray-700"
                            />

                            {/* Details */}
                            <div className="flex-1 flex flex-col gap-3">
                                <h2 className="text-3xl font-bold text-yellow-400">{selectedItem.watchName}</h2>
                                <p className="text-gray-300 italic">{selectedItem.shortDetails}</p>

                                <div className="space-y-1 text-gray-200">
                                    <p><span className="font-semibold text-yellow-300">Type:</span> {selectedItem.type}</p>
                                    <p><span className="font-semibold text-green-400">Price:</span> ${selectedItem.price}</p>
                                    <p><span className="font-semibold text-blue-400">Availability:</span> {selectedItem.availablity}</p>
                                    <p><span className="font-semibold text-purple-400">Full Description:</span> {selectedItem.fullDescription}</p>
                                    <p><span className="font-semibold text-indigo-400">Customer Name:</span> {selectedItem.customerName}</p>
                                    <p><span className="font-semibold text-pink-400">Created By:</span> {selectedItem.createdBy}</p>
                                    <p><span className="font-semibold text-gray-400">Created At:</span> {new Date(selectedItem.createdAt).toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Cart;
