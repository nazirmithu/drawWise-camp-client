import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import PopularClasses from "../pages/PopularClasses/PopularClasses";
import SignUp from "../pages/SignUp/SignUp";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/popularclass',
                element: <PopularClasses></PopularClasses>
            },
            {
                path: '/allclasses',
                element: <AllClasses></AllClasses>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'myclasses',
                element:<MyClasses></MyClasses>
            },
            {
                path:'allusers',
                element:<AllUsers></AllUsers>
            },
            {
                path:''
            }
        ]
    },
    {
        path: '/login', element: <Login></Login>
    },
    {
        path: '/signup', element: <SignUp></SignUp>
    }
]);

export default router;