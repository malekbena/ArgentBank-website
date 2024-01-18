import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layout'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import User from '../pages/User'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/signin', element: <Signin /> },
            { path: '/user', element: <User /> }
        ]
    }
])


const Root = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Root