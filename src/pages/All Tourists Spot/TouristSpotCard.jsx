import { Link } from "react-router-dom";

const TouristSpotCard = ({ touristSpot }) => {
  const {
    _id,
    image,
    tourists_spot_name,
    average_cost,
    total_visitors_per_year,
    travel_time,
    seasonality,
  } = touristSpot;

  return (
    <div className="flex items-center justify-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl ">
        <figure>
          <img className="w-full" src={image} alt={tourists_spot_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tourists_spot_name}</h2>
          <div className="my-2">
            <div className="flex justify-between ">
              <p>Travel Time: {travel_time}</p>
              <p className="text-end">Seasonality: {seasonality}</p>
            </div>
            <div className="flex justify-between ">
              <p>Average Cost: {average_cost}</p>
              <p className="text-end">
                Total Visitors Per Year: {total_visitors_per_year}
              </p>
            </div>
          </div>
         <Link to={`/viewDetails/${_id}`}>
         <div className="card-actions justify-center">
            <button  className="btn btn-primary">View Details</button>
          </div>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
