
import { Outlet } from 'react-router-dom'
import Navbar from '../../pages/shared/Navbar'


const MainLayout = () => {
    return (
        <div className=' m-0 max-w-screen mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default MainLayout