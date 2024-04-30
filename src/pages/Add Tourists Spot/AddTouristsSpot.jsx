import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import Swal from "sweetalert2";

const AddTouristsSpot = () => {
  const handleAddTouristsSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    const newTouristSpot = {
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
    };

    console.log(newTouristSpot);
    // send data to server
    fetch("http://localhost:5000/touristSpots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){

          

            Swal.fire({
                title: "Success",
                text: "New Tourist Spot Added successfully",
                icon: "success",
              });
              form.reset()
        }
        
      });
  };

  return (
    <div>
      <Helmet>
        <title>SEAventures - Add Tourists Spot</title>
      </Helmet>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200 ">
          <div className="card shrink-0 md:w-5/6 lg:w-3/4  shadow-2xl bg-base-100 my-8">
            <form
              onSubmit={handleAddTouristsSpot}
              className="card-body  w-full "
            >
              <div className="flex flex-col md:grid grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Image"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Tourists Spot Name</span>
                  </label>
                  <input
                    type="text"
                    name="tourists_spot_name"
                    placeholder="Tourists Spot Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Country Name</span>
                  </label>
                  <input
                    type="text"
                    name="country_name"
                    placeholder=" Country Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    type="text"
                    name="short_description"
                    placeholder="Short Description"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Average Cost</span>
                  </label>
                  <input
                    type="text"
                    name="average_cost"
                    placeholder="Average Cost"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seasonality</span>
                  </label>
                  <input
                    type="text"
                    name="seasonality"
                    placeholder="Seasonality"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Travel Time</span>
                  </label>
                  <input
                    type="text"
                    name="travel_time"
                    placeholder=" Travel Time"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Total Visitors Per Year</span>
                  </label>
                  <input
                    type="text"
                    name="total_visitors_per_year"
                    placeholder="Total Visitors Per Year"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="text"
                    name="user_email"
                    placeholder="User Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="User Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Tourist Spot</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddTouristsSpot;
