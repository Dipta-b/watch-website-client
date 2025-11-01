import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../components/hooks/useAuth';

const Update = () => {
    const { id } = useParams();
    const { token } = useAuth();
    const navigate = useNavigate();
    const handleUpdateProduct = e => {
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
        const updatedPart = { type, avilability, watchName, shortDetails, price, customerName, fullDescription, image };

        axios.put(`http://localhost:5000/watches/${id}`, updatedPart, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {

                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Watch updated Successfully!",
                        text: "Modal with a custom image.",
                        imageUrl: image,
                        imageWidth: 300,
                        imageHeight: 200,
                        imageAlt: "Custom image"
                    });
                }
                navigate('/all-best-selling-products');
            })

    }

    return (
        <div className="min-h-screen bg-base-200 text-black flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-2xl bg-base-100 shadow-2xl rounded-xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">Update Watch</h1>

                </div>

                <form onSubmit={handleUpdateProduct} className="space-y-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Type</span>
                        </label>
                        <select name='type' className="select select-bordered w-full text-black" >
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
                        <select name='avilability' className="select select-bordered w-full text-black" >
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

                        />
                    </div>

                    <div className="form-control pt-4">
                        <button type="submit" className="btn btn-primary w-full">
                            Update Product
                        </button>

                        <Link className='btn btn-primary w-full mt-5' to="/all-best-selling-products">Back</Link>


                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update