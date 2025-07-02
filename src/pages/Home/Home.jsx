
import BestSellingWatches from '../BestSelling/BestSellingWatches'
import Carousel from '../Carousel/Carousel'
import MarqueeText from '../Marquee/MarqueeText'
import WatchSection from '../WatchSection/WatchSection'



const Home = () => {
    return (
        <div>
            <section>
                <Carousel></Carousel>
                <MarqueeText></MarqueeText>
            </section>
            <section className='w-3/4 mx-auto mt-16'>
                <WatchSection></WatchSection>
                <BestSellingWatches></BestSellingWatches>
            </section>

        </div>
    )
}

export default Home