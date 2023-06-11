import { NavLink, Outlet } from "react-router-dom";
import { FaBookOpen, FaBookReader, FaHome, FaUsers, FaWallet } from 'react-icons/fa';
import useSelectedClass from "../components/hooks/useSelectedClass";

const Dashboard = () => {
    const [cart] = useSelectedClass();

    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-red-200 text-base-content">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home'><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/mypayment'><FaBookReader />Manage Classes</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers />Manage Users</NavLink></li>

                        </> : <>

                            <li><NavLink to='/dashboard/home'><FaHome />User Home</NavLink></li>
                            <li><NavLink to='/dashboard/mypayment'><FaWallet />Payment History</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/myclasses'><FaBookOpen />My Selected Classes
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/myenroll'><FaBookReader />My Enrolled Classes</NavLink></li>
                        </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/allclasses'><FaBookReader />All Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;