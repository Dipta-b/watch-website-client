import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/LogInAndRegister/Login";
import Register from "../pages/LogInAndRegister/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import AllProducts from "../pages/BestSelling/AllProducts";
import Update from "../pages/Update/Update";
import PrivateRoutes from "./PrivateRoutes";
import Cart from "../pages/Cart/Cart";
import CoveragePage from "../pages/CoveragePage/CoveragePage";





const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'add-product',
                element: <PrivateRoutes> <AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: 'all-best-selling-products',
                element: <AllProducts></AllProducts>,
                loader: () => fetch('http://localhost:5000/watches')
            },
            {
                path: 'update/:id',
                element: <Update></Update>
            },
            {
                path: 'my-cart',
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>
            },
            {
                path: 'coverage',
                element: <CoveragePage></CoveragePage>
            },
        ]
    },
]);

export default router