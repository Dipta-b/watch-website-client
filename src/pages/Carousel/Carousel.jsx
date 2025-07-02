import watch_one from '../../assets/watch-one.jpg'



const Carousel = () => {
    return (
        <div className="carousel w-full h-[500px]">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full group">
                <img
                    src={watch_one}
                    className="w-full h-full object-cover"
                    alt="Slide 1"
                />
                <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-md z-10">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Slide 1</h1>
                    <p className="mb-4">Explore our latest collections and offers.</p>
                    <button className="btn btn-primary">Shop Now</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full group">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                    className="w-full h-full object-cover"
                    alt="Slide 2"
                />
                <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-md z-10">
                    <h1 className="text-4xl font-bold mb-4">Discover Slide 2</h1>
                    <p className="mb-4">Fresh styles for every season.</p>
                    <button className="btn btn-secondary">Learn More</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full group">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full h-full object-cover"
                    alt="Slide 3"
                />
                <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-md z-10">
                    <h1 className="text-4xl font-bold mb-4">Slide 3 Collection</h1>
                    <p className="mb-4">High-quality gear at great prices.</p>
                    <button className="btn btn-accent">Explore</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full group">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full h-full object-cover"
                    alt="Slide 4"
                />
                <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-md z-10">
                    <h1 className="text-4xl font-bold mb-4">Slide 4 Highlights</h1>
                    <p className="mb-4">Limited-time deals and promotions.</p>
                    <button className="btn btn-warning">Check Deals</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
