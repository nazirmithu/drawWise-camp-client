import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaBookOpen, FaHome } from 'react-icons/fa';
import useSelectedClass from '../../../components/hooks/useSelectedClass';
import useAdmin from '../../../components/hooks/useAdmin';
import useInstructor from '../../../components/hooks/useInstructor';

const NavBar = () => {
    const { user, handleSignOut } = useContext(AuthContext);
    const [cart] = useSelectedClass();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleLogOut = () => {
        handleSignOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Instructors</Link></li>
        <li><Link to='/allclasses'>Classes</Link></li>
        {
            user ? <>
                {/* <li><Link to='/order/salad'>Dashboard </Link></li> */}
                <li>
                    <Link to='/dashboard/myclasses'>
                        <button className="btn">
                            <FaBookOpen />
                            <div className="badge badge-secondary">+{cart?.length || 0}</div>
                        </button>
                    </Link>
                </li>
            </> : ''
        }
        {
            isAdmin ? <>
                <li><Link to='/dashboard/adminhome'><FaHome />Dashboard</Link></li>
               

            </> :
                isInstructor ? <>
                    <li><Link to='/dashboard/instructorhome'><FaHome />Dashboard</Link></li>
                   
                </> :
                  user?  <>

                        <li><Link to='/dashboard/userhome'><FaHome />Dashboard</Link></li>
                        
                    </>:''
        }

        {
            user ? <>
                <li><Link onClick={handleLogOut}>LogOut</Link></li>
            </> : <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <a className="btn btn-ghost normal-case text-xl">DrawWiseCamp</a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {
                user ? <div className="navbar-end">
                    <div className="avatar">
                        <div className="w-10 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                </div> : ''
            }
        </div>
    );
};

export default NavBar;