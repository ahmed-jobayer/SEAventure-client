import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import Slider from "./slider/Slider";
import ExtraSction from "./extra sections/ExtraSction";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>SEAventures - Home</title>
        </Helmet>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Slider></Slider>
        <ExtraSction></ExtraSction>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
