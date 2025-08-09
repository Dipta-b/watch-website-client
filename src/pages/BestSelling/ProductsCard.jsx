// import Swal from "sweetalert2";
// import useAuth from "../../components/hooks/useAuth";
// import { useState } from "react";
// import axios from "axios";

// const ProductsCard = ({ watch, watches, setWatches, watchData }) => {
//     const { user } = useAuth();
//     const isAdmin = user?.email === 'diptabanik0@gmail.com';
//     const [isHovered, setIsHovered] = useState(false);

//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axios.delete(`http://localhost:5000/watches/${id}`)
//                     .then(res => {
//                         if (res.data.deletedCount > 0) {
//                             setWatches(watches.filter(watch => watch._id !== id));
//                             Swal.fire("Deleted!", "Your watch has been deleted.", "success");
//                         }
//                     });
//             }
//         });
//     };

//     return (
//         <div className="relative bg-base-100 shadow-xl overflow-hidden h-[510px] duration-300">
//             {/* Image Container */}
//             <div
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//                 className="relative w-full overflow-hidden"
//             >
//                 <div className="bg-gray-700 h-[260px] w-full">
//                     <img
//                         src={watchData?.image}
//                         alt={watchData?.name || "Watch"}
//                         className={`w-full h-full object-cover opacity-50 transition-transform duration-500 ease-in-out ${isHovered ? "-translate-x-full" : "translate-x-0"
//                             }`}
//                     />
//                 </div>
//                 <img
//                     src={watchData?.image}
//                     alt="Hover Watch"
//                     className={`absolute inset-0 w-full h-[260px] object-cover transition-transform duration-500 ease-in-out ${isHovered ? "translate-x-0" : "translate-x-full"
//                         }`}
//                 />
//             </div>

//             {/* Card Body */}
//             <div className="flex flex-col justify-between items-center p-4 h-[250px] bg-black text-white">
//                 <div className="text-center">
//                     <h2 className="text-xl font-semibold">{watchData?.name}</h2>
//                     <p className="text-gray-400 mt-1 text-sm">{watchData?.description}</p>
//                     <p className="mt-2 font-semibold">${watchData?.price}.00</p>

//                     <button className="mt-4 px-28 py-3 bg-white text-black rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-white">
//                         Add To Cart
//                     </button>

//                     {/* Admin Buttons */}
//                     {isAdmin && (
//                         <div className="flex justify-between mt-4 gap-3">
//                             <button className="px-6 py-2 bg-black border border-gray-600 text-white hover:bg-white hover:text-black transition rounded">
//                                 Update
//                             </button>
//                             <button onClick={() => handleDelete(watch._id)} className="px-6 py-2 bg-black border border-gray-600 text-white hover:bg-white hover:text-black transition rounded">
//                                 Delete
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ProductsCard