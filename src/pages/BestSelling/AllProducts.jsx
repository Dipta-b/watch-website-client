import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import watchFallback from "../../assets/watch-one.jpg";
import imageOne from "../../assets/best-selling-images/image-one.jpg";
import bgUrl from "../../assets/best-selling-images/tiny-bg-all-products-page.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../components/hooks/useAuth";
import { sortWatches } from "../sortWatches";

// MUI imports for styled select
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const AllProducts = () => {
    const loadedWatches = useLoaderData() || [];
    const [watches, setWatches] = useState(loadedWatches);
    const { user } = useAuth();
    const isAdmin = user?.email === "diptabanik0@gmail.com";
    const [cart, setCart] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [borderIndex, setBorderIndex] = useState(null);
    const [sortType, setSortType] = useState(""); // new state for sorting

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:5000/watches/${id}`);
                Swal.fire("Deleted!", "Your watch has been deleted.", "success");
                setWatches((prev) => prev.filter((item) => item._id !== id));
            } catch (error) {
                Swal.fire("Error!", "Failed to delete the watch.", "error");
            }
        }
    };

    const handleAddToCart = (selectedWatch) => {
        if (!user?.email) {
            Swal.fire("Error!", "You must be logged in for add to cart.");
            return;
        }

        const exists = cart.some((item) => item._id === selectedWatch._id);
        if (exists) {
            Swal.fire("Info", "Product is already in cart!");
            return;
        }

        setCart([...cart, selectedWatch]);

        const watchData = {
            ...selectedWatch,
            email: user.email,
            watchId: selectedWatch._id,
        };

        axios
            .post("http://localhost:5000/watches/cart", watchData)
            .then((res) => {
                Swal.fire(
                    "Added!",
                    `${selectedWatch.watchName} added to cart.`,
                    "success"
                );
                console.log(res.data);
            })
            .catch((err) => {
                Swal.fire("Error!", "Failed to add to cart.", "error");
                console.error(err);
            });
    };

    // Sort watches using the utility function
    const sortedWatches = sortWatches(watches, sortType);

    return (
        <div>
            {/* Banner */}
            <div className="relative overflow-hidden h-[235px] flex justify-center items-center">
                <div
                    style={{ backgroundImage: `url(${bgUrl})` }}
                    className="h-full w-full bg-cover bg-center"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h1 className="text-white text-3xl font-bold">ALL WATCHES</h1>
                </div>
            </div>

            {/* Sort Dropdown (MUI styled) */}
            <div className="w-3/4 mx-auto mt-6 mb-4 flex justify-end">
                <FormControl sx={{ width: 250 }}>
                    <Select
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                        displayEmpty
                        input={<OutlinedInput sx={{ color: "white", borderColor: "white" }} />}
                        MenuProps={MenuProps}
                        sx={{
                            color: "white", // text color
                            ".MuiOutlinedInput-notchedOutline": { borderColor: "white" }, // border color
                            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "yellow" }, // hover border
                            backgroundColor: "#1e1e1e", // dark gray background so it shows on black
                        }}
                        renderValue={(selected) => {
                            if (!selected) return <em style={{ color: "#aaa" }}>Sort By</em>;
                            switch (selected) {
                                case "priceLowToHigh": return "Price: Low to High";
                                case "priceHighToLow": return "Price: High to Low";
                                case "newest": return "Newest";
                                default: return "Sort By";
                            }
                        }}
                    >
                        <MenuItem value=""><em style={{ color: "#aaa" }}>Sort By</em></MenuItem>
                        <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
                        <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
                        <MenuItem value="newest">Newest</MenuItem>
                    </Select>
                </FormControl>
            </div>


            {/* Grid */}
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-2 mb-4">
                {sortedWatches.map((watch, index) => (
                    <div
                        key={watch._id}
                        onMouseEnter={() => setBorderIndex(index)}
                        onMouseLeave={() => setBorderIndex(null)}
                        className={`relative bg-base-100 shadow-xl overflow-hidden h-[510px] duration-300 ${borderIndex === index ? "border border-yellow-400" : "border border-transparent"
                            }`}
                    >
                        {/* Image Section */}
                        <div
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative w-full overflow-hidden"
                        >
                            <div className="bg-gray-700 h-[260px] w-full">
                                <img
                                    src={watch?.image || imageOne}
                                    alt="Watch"
                                    className={`w-full h-full object-cover opacity-50 transition-transform duration-500 ease-in-out ${hoveredIndex === index ? "-translate-x-full" : "translate-x-0"
                                        }`}
                                />
                            </div>
                            <img
                                src={watchFallback}
                                alt="Hover Watch"
                                className={`absolute inset-0 w-full h-[260px] object-cover transition-transform duration-500 ease-in-out ${hoveredIndex === index ? "translate-x-0" : "translate-x-full"
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

                                {/* Add to Cart */}
                                <button
                                    onClick={() => handleAddToCart(watch)}
                                    className="mt-3 px-24 py-2 bg-white text-black rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-white"
                                >
                                    Add To Cart
                                </button>

                                {/* Admin / Availability */}
                                <div className="mt-3 flex justify-center gap-4">
                                    {isAdmin ? (
                                        <>
                                            <Link to={`/update/${watch._id}`}>
                                                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                                    Update
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(watch._id)}
                                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                                            >
                                                Delete
                                            </button>
                                        </>
                                    ) : (
                                        <span>{watch?.avilability || "In Stock"}</span>
                                    )}
                                    <div>
                                        <Link to="/">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
