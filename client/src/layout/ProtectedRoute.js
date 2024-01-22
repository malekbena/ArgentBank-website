import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const isLogged = useSelector(state => state.auth.isLogged)

    return (
        isLogged ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRoute