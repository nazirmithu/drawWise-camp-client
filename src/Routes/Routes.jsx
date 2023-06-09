import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import PopularClasses from "../pages/PopularClasses/PopularClasses";

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
                path:'/popularclass',
                element:<PopularClasses></PopularClasses>
            }
        ]
    },
    {path:'/login', element:<Login></Login>}
]);

export default router;