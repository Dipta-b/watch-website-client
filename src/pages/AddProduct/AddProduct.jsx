import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const [productProfilePic, setproductProfilePic] = useState("");
    const handleAddproduct = e => {
        e.preventDefault();
        const from = e.target;
        const type = from.type.value;
        const avilability = from.avilability.value;
        const watchName = from.watchName.value;
        const shortDetails = from.shortDetails.value;
        const price = from.price.value;
        const customerName = from.customerName.value;
        const fullDescription = from.fullDescription.value;
        const image = from.image.value;

        const product = { type, avilability, watchName, shortDetails, price, customerName, fullDescription, image, productProfilePic, createdAt: new Date() };

        axios.post('http://localhost:5000/watches', product)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Watch Added Successfully!",
                        text: "Modal with a custom image.",
                        imageUrl: image,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: "Custom image"
                    });
                }
            })

    }

    const handleImageUpload = async (e) => {
        const image = (e.target.files[0])
        const formData = new FormData();
        formData.append("image", image);
        const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`
        const res = await axios.post(imageUploadUrl, formData)
        setproductProfilePic(res.data.data.url)

    }

    return (
        <div className="min-h-screen bg-base-200 text-black flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-2xl bg-base-100 shadow-2xl rounded-xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">Add New Watch</h1>
                    <p className="mt-4 text-base">
                        Add a new product to your catalog. Specify whether it's a limited offer or a new arrival, and provide detailed watch information.
                    </p>
                </div>

                <form onSubmit={handleAddproduct} className="space-y-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Type</span>
                        </label>
                        <select name='type' className="select select-bordered w-full text-black" required>
                            <option value="">Select type</option>
                            <option selected value="LIMITED OFFER" >Limited Offer</option>
                            <option value="NEW ARRIVAL">New Arrival</option>
                            <option value="BEST SELLER">Best Seller</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Avilability</span>
                        </label>
                        <select name='avilability' className="select select-bordered w-full text-black" required>
                            <option value="">Select type</option>
                            <option selected value="AVAILABLE" >Available</option>
                            <option value="NOT AVAILABLE" >Not Available</option>

                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Watch Name</span>
                        </label>
                        <input
                            name='watchName'
                            type="text"
                            placeholder="Enter watch name"
                            className="input input-bordered w-full text-black"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Short Details</span>
                        </label>
                        <input
                            name='shortDetails'
                            type='text'
                            placeholder="Brief description of the watch"
                            className="textarea textarea-bordered w-full text-black"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Price ($)</span>
                        </label>
                        <input
                            name='price'
                            type="number"
                            placeholder="Price in USD"
                            className="input input-bordered w-full text-black"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Customer Name</span>
                        </label>
                        <input
                            name='customerName'
                            type="text"
                            placeholder="Customer's name"
                            className="input input-bordered w-full text-black"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Image URL</span>
                        </label>
                        <input
                            name='image'
                            type="text"
                            placeholder="Paste image URL here"
                            className="input input-bordered w-full text-black"

                        />
                        <label className="label">Profile Picture</label>
                        <input
                            onChange={handleImageUpload}
                            type="file"
                            className="input"
                            placeholder="Upload for direct png/jpg format"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Full Description</span>
                        </label>
                        <input
                            name='fullDescription'
                            type='text'
                            placeholder="Detailed description of the watch"
                            className="textarea textarea-bordered w-full text-black"
                            required
                        />
                    </div>

                    <div className="form-control pt-4">
                        <button type="submit" className="btn btn-primary w-full">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
