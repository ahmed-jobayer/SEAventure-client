import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
  const { createUserWithEmail } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

//   // success message
  const handleRegisterSuccess = () => {
    Swal.fire({
      title: "Registered successfully!",
      showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
      },
      hideClass: {
        popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
      },
    });
  };

//   //   error message
  const handleRegisterError = (error) => {
    Swal.fire({
      title:  error ,
      showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
      },
      hideClass: {
        popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
      },
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target; 
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const displayName = form.elements.name.value;
    const photoURL = form.elements.photoURL.value;
    // console.log("clicked",   email, password, displayName, photoURL);
    // password validation

    if (password.length < 6) {
        handleRegisterError("Password should be at least 6 characters or longer");
        return;
      }
  
      else if(!/[A-Z]/.test(password)){
        handleRegisterError('Your password should have at lest one uppercase characters')
          return
      }
      else if(!/[a-z]/.test(password)){
        handleRegisterError('Your password should have at lest one lowercase characters')
          return
      }

    createUserWithEmail(email, password, displayName, photoURL)
    .then(result => {
        console.log(result.user)
        handleRegisterSuccess()
        // navigate after register
        navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
        console.log(error.message)
        handleRegisterError(error.message)
    })
  };

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
              <form onSubmit={handleRegister} className="card-body ">
                <div className="lg:flex lg:gap-4 md:flex md:gap-4">
                  <div>
                    {/* name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        name="name"
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
                        name="email"
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
                        name="photoURL"
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
                        name="password"
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
                  <button className="btn btn-primary">
                    Register
                  </button>
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
