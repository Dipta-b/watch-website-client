import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../../components/hooks/useAuth';
import Swal from 'sweetalert2';
import {
    FaCheckCircle,
    FaTimesCircle,
    FaUser,
    FaCalendarAlt,
    FaDollarSign,
    FaTag,
    FaBox,
} from 'react-icons/fa';

const PendingProducts = () => {
    const { token } = useAuth();
    const [products, setProducts] = useState([]);

    // ✅ Fetch pending products
    useEffect(() => {
        axios
            .get('http://localhost:5000/watches/pending', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, [token]);


    const handleAction = async (id, action) => {
        const actionText = action === 'approved' ? 'Approve' : 'Reject';
        const confirmColor = action === 'approved' ? '#22c55e' : '#ef4444';

        const result = await Swal.fire({
            title: `Are you sure you want to ${actionText.toLowerCase()} this product?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: `Yes, ${actionText}!`,
            cancelButtonText: 'Cancel',
            confirmButtonColor: confirmColor,
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            try {
                await axios.put(
                    `http://localhost:5000/watches/approve/${id}`,
                    { action },
                    { headers: { Authorization: `Bearer ${token}` } }
                );

                // remove product from list after action
                setProducts(prev => prev.filter(p => p._id !== id));

                Swal.fire({
                    title: `Product ${actionText.toLowerCase()}d successfully!`,
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                });
            } catch (err) {
                console.error(err);
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        }
    };

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
                <div
                    key={p._id}
                    className="card bg-base-100 text-base-content shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300"
                >
                    {/* IMAGE */}
                    <figure className="h-48 bg-gray-100">
                        <img
                            src={
                                p.image || 'https://via.placeholder.com/300x200?text=No+Image'
                            }
                            alt={p.watchName}
                            className="object-cover h-full w-full rounded-t-lg"
                        />
                    </figure>

                    {/* CARD BODY */}
                    <div className="card-body">
                        <h2 className="card-title text-lg font-bold flex items-center gap-2">
                            <FaTag className="text-primary" /> {p.watchName || 'Unnamed Watch'}
                        </h2>
                        <p className="text-sm text-gray-600">
                            {p.shortDetails || 'No short details provided.'}
                        </p>

                        <div className="divider my-2"></div>

                        <div className="space-y-2 text-sm">
                            <p className="flex items-center gap-2">
                                <FaBox className="text-accent" />
                                <span className="font-semibold">Type:</span> {p.type}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaDollarSign className="text-success" />
                                <span className="font-semibold">Price:</span> ${p.price}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaUser className="text-info" />
                                <span className="font-semibold">Created By:</span> {p.createdBy}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaCalendarAlt className="text-warning" />
                                <span className="font-semibold">Created:</span>{' '}
                                {new Date(p.createdAt).toLocaleString()}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaCheckCircle className="text-primary" />
                                <span className="font-semibold">Status:</span>
                                <span
                                    className={`badge ${p.approved === 'pending'
                                        ? 'badge-warning'
                                        : p.approved === 'approved'
                                            ? 'badge-success'
                                            : 'badge-error'
                                        } ml-2`}
                                >
                                    {p.approved}
                                </span>
                            </p>
                        </div>

                        <div className="divider my-2"></div>

                        {/* BUTTONS */}
                        <div className="card-actions justify-between">
                            <button
                                className="btn btn-success btn-sm flex items-center gap-2 w-1/2"
                                onClick={() => handleAction(p._id, 'approved')}
                            >
                                <FaCheckCircle /> Approve
                            </button>
                            <button
                                className="btn btn-error btn-sm flex items-center gap-2 w-1/2"
                                onClick={() => handleAction(p._id, 'rejected')}
                            >
                                <FaTimesCircle /> Reject
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {products.length === 0 && (
                <div className="col-span-full text-center text-gray-500 mt-10 text-lg font-medium">
                    🎉 No pending products to review!
                </div>
            )}
        </div>
    );
};

export default PendingProducts;
