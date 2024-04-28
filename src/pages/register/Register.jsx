import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>SEAventures - Register</title>
      </Helmet>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full   shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="lg:flex lg:gap-4 md:flex md:gap-4">
                  <div>
                    {/* name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* email */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    {/* photo url */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Photo URL"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* password */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                      {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label> */}
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <p className=" mb-3 px-8 block text-center">
                Already have an account?
                <Link to="/login">
                  <span className="font-bold ml-1">Login now</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
