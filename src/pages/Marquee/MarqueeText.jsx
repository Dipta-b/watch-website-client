import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeText = () => {
    return (

        <div className="p-4 bg-slate-900 font-bold text-center mt-0">
            {/* First Row */}
            <Marquee pauseOnHover speed={50}>
                <p className="text-4xl mr-12 w-2/3">
                    Watch One
                </p>
                <p className="text-4xl mr-12 w-2/3">
                    Watch One
                </p>
                <p className="text-4xl mr-12 w-2/3">
                    Watch One
                </p>
                <p className="text-4xl mr-12 w-2/3">
                    Watch One
                </p>
                <p className="text-4xl mr-12 w-2/3">
                    Watch One
                </p>
                <p className="text-4xl mr-12 w-2/3">
                    Watch One
                </p>
                <p className="text-4xl mr-12 w-2/3">
                    Watch One
                </p>
            </Marquee>


        </div>
    )
}

export default MarqueeText