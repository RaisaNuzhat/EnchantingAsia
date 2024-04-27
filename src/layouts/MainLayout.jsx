import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
        <div>
        <div className="">
            <NavBar/>
        </div>
        <div className=" mx-auto container ">
            <Outlet />
        </div>
        <div className="mb-0">
            <Footer />
        </div>
    </div>
    );
};

export default MainLayout;