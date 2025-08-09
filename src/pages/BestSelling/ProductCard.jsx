import React, { useState } from "react";
import watchFallback from "../../assets/watch-one.jpg";
import imageOne from "../../assets/best-selling-images/image-one.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../components/hooks/useAuth";

const ProductCard = ({ watch, setWatches, watches }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [borderHovered, setBorderHovered] = useState(false);
    const { user } = useAuth();
    // handle add to cart
    const handleAddToCart = () => {
        const watchData = {
            ...watch,
            email: user?.email,
            watchId: watch?._id
        }

        axios.post("http://localhost:5000/watches/cart", watchData)
            .then(res => {
                console.log(res.data)
            })
    }



    // const handleDelete = async (id) => {


    //     const result = await Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     });

    //     if (result.isConfirmed) {
    //         try {
    //             await axios.delete(`http://localhost:5000/watches/${id}`);
    //             Swal.fire("Deleted!", "Your watch has been deleted.", "success");

    //             // Update UI
    //             setWatches(watches.filter(item => item._id !== id));
    //         } catch (error) {
    //             Swal.fire("Error!", "Failed to delete the watch.", "error");
    //         }
    //     }
    // };
    // 
    return (
        <div
            onMouseEnter={() => setBorderHovered(true)}
            onMouseLeave={() => setBorderHovered(false)}
            className={`relative bg-base-100 shadow-xl overflow-hidden h-[510px] duration-300 ${borderHovered ? "border border-yellow-400" : "border border-transparent"
                }`}
        >
            {/* Image Section */}
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative w-full overflow-hidden"
            >
                <div className="bg-gray-700 h-[260px] w-full">
                    <img
                        src={watch?.image || imageOne}
                        alt="Watch"
                        className={`w-full h-full object-cover opacity-50 transition-transform duration-500 ease-in-out ${isHovered ? "-translate-x-full" : "translate-x-0"
                            }`}
                    />
                </div>
                <img
                    src={watchFallback}
                    alt="Hover Watch"
                    className={`absolute inset-0 w-full h-[260px] object-cover transition-transform duration-500 ease-in-out ${isHovered ? "translate-x-0" : "translate-x-full"
                        }`}
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between items-center p-4 h-[250px] bg-black text-white">
                <div className="text-center space-y-2">
                    <p className="uppercase text-sm text-yellow-400">{watch?.type}</p>
                    <h2 className="text-xl font-semibold">{watch?.watchName || "Premium Watch"}</h2>
                    <p className="text-gray-400 text-sm leading-tight">
                        {watch?.description || "If a dog chews shoes whose shoes does he choose?"}
                    </p>
                    <p className="font-semibold">Price: ${watch?.price || "N/A"}.00</p>


                    {/* Add to cart section */}
                    <button onClick={handleAddToCart} className="mt-3 px-24 py-2 bg-white text-black rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-white">
                        Add To Cart
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
