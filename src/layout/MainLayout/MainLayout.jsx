
import { Outlet } from 'react-router-dom'
import Navbar from '../../pages/shared/Navbar'
import Footer from '../../pages/shared/Footer'


const MainLayout = () => {
    return (
        <div className=' m-0 max-w-screen mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout