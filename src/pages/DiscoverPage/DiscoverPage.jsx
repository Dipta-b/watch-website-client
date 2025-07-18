import React from 'react';
import bgImageOne from "../../assets/bg-img-one.jpg";
import bgImagetwo from "../../assets/bg-img-two.jpg";

const DiscoverPage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Image 1 with text overlay */}
            <div className="group relative overflow-hidden h-[80vh]">
                <div
                    style={{ backgroundImage: `url(${bgImageOne})` }}
                    className="h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-40 pb-12">
                    <p className="text-white text-sm font-bold">Discover Nature</p>
                    <h1 className='text-white text-3xl font-bold mt-2'>REFINED STYLE</h1>
                    <button className="mt-4 px-7 py-3 bg-white text-black rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-white  hover:border-b-4 hover:border-shadow">
                        Click Me
                    </button>
                </div>
            </div>

            {/* Image 2 with text overlay */}
            <div className="group relative overflow-hidden h-[80vh]">
                <div
                    style={{ backgroundImage: `url(${bgImagetwo})` }}
                    className="h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-40 pb-12">
                    <p className="text-white text-sm font-bold">YOUR WATCH STYLE</p>
                    <h1 className='text-white text-3xl font-bold mt-2'>Classic Watches</h1>
                    <button className="mt-4 px-7 py-3 bg-white text-black rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-white  hover:border-b-4 hover:border-white">
                        Click Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiscoverPage;
