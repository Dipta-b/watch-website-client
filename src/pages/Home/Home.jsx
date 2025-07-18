
import BestSellingWatches from '../BestSelling/BestSellingWatches'
import Carousel from '../Carousel/Carousel'
import DiscoverPage from '../DiscoverPage/DiscoverPage'
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
            <section className='w-full mx-auto mt-16 mb-16 h-screen'>
                <DiscoverPage></DiscoverPage>
            </section>

        </div>
    )
}

export default Home