import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import watch from "../../assets/watch-one.jpg"
const BestSellingWatches = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="mt-16 flex justify-center">
            <div className="w-96">
                <h2 className="font-bold text-4xl mb-6 text-center">Best Selling</h2>

                {/* Card */}
                <div
                    className="relative bg-base-100 shadow-xl overflow-hidden rounded-xl group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Image Container */}
                    <div className="relative h-64 w-full">
                        {/* Default Image */}
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Product"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
                        />

                        {/* Hover Image */}
                        <img
                            src={watch}
                            alt="Product Hover"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                        />

                        {/* Action Buttons */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 flex gap-4">
                            <button className="bg-white p-2 rounded-full hover:bg-[#0FABCA] hover:text-white shadow-md transition">
                                <IoMdHeartEmpty className="text-xl" />
                            </button>
                            <button className="bg-white p-2 rounded-full hover:bg-[#0FABCA] hover:text-white shadow-md transition">
                                <HiArrowsUpDown className="text-xl" />
                            </button>
                            <button className="bg-white p-2 rounded-full hover:bg-[#0FABCA] hover:text-white shadow-md transition">
                                <IoEyeOutline className="text-xl" />
                            </button>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Premium Shoes</h2>
                        <p className="text-gray-600 mt-1">
                            If a dog chews shoes whose shoes does he choose?
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellingWatches;
