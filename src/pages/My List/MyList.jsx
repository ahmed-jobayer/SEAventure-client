import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyList = () => {
  const myTouristSpots = useLoaderData();

  
  const [filteredTouristSpots, setFilteredTouristSpots] = useState([]);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("insertedIds")) || [];
    const filteredSpots = myTouristSpots.filter((spot) =>
      savedIds.includes(spot._id)
    );
    setFilteredTouristSpots(filteredSpots);
  }, [myTouristSpots]);

  const handleDelete = (_id) => {
    
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         

          fetch(`https://sea-ventures-server.vercel.app/touristSpots/${_id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your tourist spot has been deleted.",
                    icon: "success"
                  });
            }

          })

          console.log(_id);
        }
      });

  };

  return (
    <div>
      <Helmet>
        <title>SEAventures - My List</title>
      </Helmet>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="overflow-x-auto my-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Spot Name</th>
                <th>Country</th>
                <th>Travel Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredTouristSpots.map((spot) => (
                <tr key={spot._id}>
                  <td>{spot.tourists_spot_name}</td>
                  <td>{spot.country_name}</td>
                  <td>{spot.travel_time}</td>
                  <td>
                    <Link to={`/touristSpots/${spot._id}`}><span className="bg-gray-700 p-2 rounded-lg cursor-pointer">
                      Update
                    </span></Link>
                  </td>
                  <td>
                    <span
                      onClick={() => handleDelete(spot._id)}
                      className="bg-red-950 p-2 rounded-lg cursor-pointer"
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyList;
