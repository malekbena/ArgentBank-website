import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from '../redux/authSlice'
import { useEffect } from "react";

const Navbar = () => {
    const token = localStorage.getItem('token')
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (!token) {
            dispatch(setLogout())
        }
    }, [dispatch, token])

    const signout = (e) => {
        e.preventDefault()
        dispatch(setLogout())
        navigate('/')
    }
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {
                    token ? (
                        <>
                            <Link className="main-nav-item" to="/user">
                                <i className="fa fa-user-circle"></i>
                                {user ? `${user.firstName}` : 'loading...'}
                            </Link>
                            <Link className="main-nav-item" onClick={e => signout(e)} to="/">
                                <i className="fa fa-user-circle"></i>
                                Sign Out
                            </Link>
                        </>

                    ) : (
                        <Link className="main-nav-item" to="/signin">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    )
                }
            </div>
        </nav>
    )
}
export default Navbar