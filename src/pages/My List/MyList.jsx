import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import { useLoaderData } from "react-router-dom";
// import TouristSpotCard from "../All Tourists Spot/TouristSpotCard";
import Listcard from "./Listcard";

const MyList = () => {
  const spot = useLoaderData();

  return (
    <div>
      <Helmet>
       
        <title>SEAventures - My List</title>
      </Helmet>
      <div className="container mx-auto">
        <Navbar></Navbar>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto my-8 ">
          {spot.map((touristSpot) => (
            <Listcard
              key={touristSpot._id}
              touristSpot={touristSpot}
            ></Listcard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyList;
