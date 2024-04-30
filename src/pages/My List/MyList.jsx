import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";

const MyList = () => {
    return (
        <div>
            <Helmet>
                <title>SEAventures - My List</title>
            </Helmet>
            <div className="container mx-auto">
                <Navbar></Navbar>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyList;


