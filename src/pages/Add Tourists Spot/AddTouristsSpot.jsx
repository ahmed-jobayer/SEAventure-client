import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";

const AddTouristsSpot = () => {
    return (
        <div>
            <Helmet>
                <title>SEAventures - Add Tourists Spot</title>
            </Helmet>
            <div className="container mx-auto">
                <Navbar></Navbar>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddTouristsSpot;