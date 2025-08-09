import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../components/hooks/useAuth";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { user } = useAuth();

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
                {/* Table Head */}
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Watch Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>

                {/* Table Body */}
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
                                <button className="btn btn-sm btn-primary">Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
