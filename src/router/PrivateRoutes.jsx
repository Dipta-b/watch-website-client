
import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '../components/hooks/useAuth';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useAuth();

    const location = useLocation();
    if (loading) {
        return <span className='loading loading-ring loading-lg'></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin" state={location?.pathname}></Navigate>
}

export default PrivateRoutes