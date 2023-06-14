import { NavLink, Outlet } from "react-router-dom";
import { FaBookOpen, FaBookReader, FaHome, FaUsers, FaWallet } from 'react-icons/fa';
import useSelectedClass from "../components/hooks/useSelectedClass";
import useInstructor from "../components/hooks/useInstructor";
import useAdmin from "../components/hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useSelectedClass();

    // const isAdmin = true;

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-red-200 text-base-content">


                    {isAdmin ? <>
                        <li><NavLink to='/dashboard/adminhome'><FaHome />Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/manageclass'><FaBookReader />Manage Classes</NavLink></li>
                        <li><NavLink to='/dashboard/allusers'><FaUsers />Manage Users</NavLink></li>
                    </> :
                        isInstructor ? <>
                            <li><NavLink to='/dashboard/instructorhome'><FaHome />Instructor Home</NavLink></li>
                            <li><NavLink to='/dashboard/instructorclass'><FaBookReader />My Classes</NavLink></li>
                            <li><NavLink to='/dashboard/addclass'><FaUsers />Add Class</NavLink></li>
                        
                        </> : <>

                            <li><NavLink to='/dashboard/userhome'><FaHome />User Home</NavLink></li>
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