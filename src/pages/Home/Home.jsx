import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>SEAventures - Home</title>
        </Helmet>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Slider></Slider>
        its home
        <h2 className="text-red-200">uyhfvwelf</h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
