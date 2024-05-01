import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import Slider from "./slider/Slider";
import ExtraSction from "./extra sections/ExtraSction";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../All Tourists Spot/TouristSpotCard";

const Home = () => {

  const defaultSpot = useLoaderData()
  console.log(defaultSpot)
  
  return (
    <div>
        <Helmet>
            <title>SEAventures - Home</title>
        </Helmet>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Slider></Slider>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto my-8 ">
          {defaultSpot.map((touristSpot) => (
            <TouristSpotCard
              key={touristSpot._id}
              touristSpot={touristSpot}
            ></TouristSpotCard>
          ))}
        </div>
        <ExtraSction></ExtraSction>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
