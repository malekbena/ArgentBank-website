import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux";
import { getProfile } from "../redux/userSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { checkToken } from "../utils";

const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        checkToken() && dispatch(getProfile(localStorage.getItem('token')))
    }, [dispatch])
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
export default Layout