import React from 'react';

const WatchSection = () => {
    // You can map this array to render multiple cards dynamically
    const cards = [
        {
            title: 'Wet Vietnam Mountain Flow Stream Rural',
            tag: 'Featured',
            image:
                'https://img.freepik.com/free-photo/wet-vietnam-mountain-flow-stream-rural_1417-1357.jpg?t=st=1722613987~exp=1722617587~hmac=4258bcb8779776378ec091f7b349c2aa7df9b786e63ecd66704598b328cadef3&w=996',
        },
        {
            title: 'Beautiful Sunset over the Ocean View',
            tag: 'New',
            image:
                'https://img.freepik.com/free-photo/colorful-sunset-sea_1204-513.jpg?w=996',
        },
        {
            title: 'Foggy Forest Morning Light Scene',
            tag: 'Nature',
            image:
                'https://img.freepik.com/free-photo/foggy-pine-forest-background_23-2149022541.jpg?w=996',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="relative w-full overflow-hidden  group"
                >

                    <img
                        src={card.image}
                        alt="image"
                        className="w-full h-[400px] object-cover  transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />


                    <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black to-[rgba(0,0,0,0.0001)] p-5  z-10">
                        <span className="text-[0.8rem] py-1 px-3 bg-blue-500  text-white">
                            {card.tag}
                        </span>
                        <h1 className="text-[1.5rem] text-white font-bold leading-[34px] mt-4">
                            {card.title}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WatchSection;
