import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import PopularClasses from "../pages/PopularClasses/PopularClasses";
import SignUp from "../pages/SignUp/SignUp";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import AllInstructor from "../pages/AllInstructor/AllInstructor";
import InstructorClass from "../pages/Dashboard/InstructorClass/InstructorClass";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allinstructor',
                element: <AllInstructor></AllInstructor>
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
        children: [
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'myclasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'instructorhome',
                element: <InstructorRoute>
                    <InstructorHome></InstructorHome>
                </InstructorRoute>
            },
            {
                path: 'instructorclass',
                element: <InstructorRoute>
                    <InstructorClass></InstructorClass>
                </InstructorRoute>
            },
            {
                path: 'addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'manageclass',
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
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