import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import PopularClasses from "../pages/PopularClasses/PopularClasses";
import SignUp from "../pages/SignUp/SignUp";
import AllClasses from "../pages/AllClasses/AllClasses";

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
                path:'/allclasses',
                element:<AllClasses></AllClasses>
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