import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import watch from "../../assets/watch-one.jpg";

const BestSellingWatches = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="mt-16 flex justify-center">
            <div className="w-96">
                <h2 className="font-bold text-4xl mb-6 text-center">Best Selling</h2>

                {/* Card */}
                <div
                    className={`relative bg-base-100 shadow-xl overflow-hidden rounded-xl group ${isHovered ? "border border-solid border-yellow-400" : "border border-transparent"}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Image Container */}
                    <div className="relative h-64 w-full overflow-hidden">
                        {/* Default Image */}
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Product"
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${isHovered ? "-translate-x-full" : "translate-x-0"
                                }`}
                        />

                        {/* Hover Image */}
                        <img
                            src={watch}
                            alt="Product Hover"
                            className={`absolute inset-0 w-full h-full  object-cover transition-transform duration-500 ease-in-out ${isHovered ? "translate-x-0" : "translate-x-full"
                                }`}
                        />


                    </div>

                    {/* Card Body */}
                    <div className="p-4 flex items-center justify-center flex-wrap">
                        <h2 className="text-xl font-semibold">Premium Shoes</h2>
                        <p className="text-gray-600 mt-1">
                            If a dog chews shoes whose shoes does he choose?
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellingWatches;
