import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";

const AllTouristsSpot = () => {
    return (
        <div>
            <Helmet>
                <title>SEAventures - All Tourists Spot</title>
            </Helmet>
            <div className="container mx-auto">
                <Navbar></Navbar>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllTouristsSpot;