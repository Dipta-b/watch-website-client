import React, { useEffect, useState } from "react";
import watch from "../../assets/watch-one.jpg";
import imageOne from "../../assets/best-selling-images/image-one.jpg";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import AllProducts from "./AllProducts";

const BestSellingWatches = () => {

    const [watches, setWatches] = useState([]);
    //fetching watches data
    useEffect(() => {
        fetch('http://localhost:5000/watches?limit=4')
            .then(res => res.json())
            .then(data => {

                setWatches(data);
            })
    }, [])
    return (
        <div className="mt-16 px-4">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-4xl mb-10 text-center">Best Selling</h2>
                <Link to="/all-best-selling-products">View all</Link>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">
                {
                    watches.map((watch) => <>   <ProductCard watch={watch} key={watch._id}></ProductCard></>)
                }

            </div>
        </div>
    );
};

export default BestSellingWatches;
