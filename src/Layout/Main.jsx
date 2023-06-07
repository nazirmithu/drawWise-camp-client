import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import Banner from "../pages/Home/Banner/Banner";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;