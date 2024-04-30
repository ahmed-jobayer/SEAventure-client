import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";

const ViewDetails = () => {
  const touristSpot = useLoaderData();

  const {
    _id,
    image,
    tourists_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    total_visitors_per_year,
    user_email,
    user_name,
  } = touristSpot;

  return (
    <div className="bg-base-200">
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="card  lg:card-side bg-base-100 shadow-xl">
          <figure className=" lg:w-1/2">
            <img className="rounded-2xl sm:px-3" src={image} alt="Album" />
          </figure>
          <div className="flex flex-col  ml-4 gap-4  pr-3">
            <h2 className="card-title md:mt-2">{tourists_spot_name}</h2>
            <p>
              <span className="text-xl">Country</span>: {country_name}
            </p>
            
            <div className="flex justify-between my-2">
              <p>
                <span className="text-xl">Price</span>: ${average_cost}
              </p>
              <p className="text-end">Seasonality {seasonality}</p>
            </div>
            <div className="flex justify-between my-2">
              <p>
                <span className="text-xl">Travel Time:</span> ${travel_time}
              </p>
              <p className="text-end">
                <span className="text-xl">Location:</span> {location}
              </p>
            </div>
            <div className="flex justify-between my-2">
              <p>
                <span className="text-xl">User Name:</span> ${user_name}
              </p>
              <p className="text-end">
                <span className="text-xl">Email:</span> {user_email}
              </p>
            </div>
            <p>Total Visitors Per Year: {total_visitors_per_year}</p>
            <div >
              <p className="text-xl md:mb-2 mb-2">Description:</p>
              <p>{short_description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ViewDetails;
