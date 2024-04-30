import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "./TouristSpotCard";

const AllTouristsSpot = () => {
  const touristSpots = useLoaderData();

  return (
    <div className="bg-base-200">
      <Helmet>
        <title>SEAventures - All Tourists Spots</title>
      </Helmet>
      <div className="container mx-auto ">
        <Navbar></Navbar>
        <h2 className="my-10 block text-center font-bold text-3xl">
          All Tourists Spots
        </h2>

        <div className="flex justify-center mb-20">
          <details className="dropdown">
            <summary className="m-1 btn btn-primary">Sort</summary>
            <ul className=" shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-40">
              <li>
                <a>Average Cost</a>
              </li>
            </ul>
          </details>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto my-8 ">
          {touristSpots.map((touristSpot) => (
            <TouristSpotCard
              key={touristSpot._id}
              touristSpot={touristSpot}
            ></TouristSpotCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllTouristsSpot;
