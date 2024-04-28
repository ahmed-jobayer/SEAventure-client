import { Helmet } from "react-helmet-async";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  
// success message
  const handleLoginSuccess = () => {
    Swal.fire({
      title: "Login successful!",
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

//   error message
  const handleLoginError = error => {
    Swal.fire({
      title: {error},
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

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleLogin()
      .then((Result) => {
        console.log(Result.user);
        handleLoginSuccess()
      })
      .catch((error) => {
        console.log(error.message);
        handleLoginError(error.message)
      });
  };

  const handleGithubLogin = (e) => {
    e.preventDefault();
    githubLogin()
      .then((Result) => {
        console.log(Result.user);
        handleLoginSuccess()
      })
      .catch((error) => {
        console.log(error.message);
        handleLoginError(error.message)
      });
  };

  return (
    <div>
      <Helmet>
        <title>SEAventures - Login</title>
      </Helmet>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="px-8 pb-4">
                <div
                  onClick={handleGoogleLogin}
                  className="bg-base-200 p-3 rounded-xl text-center flex items-center justify-center cursor-pointer"
                >
                  <AiFillGoogleCircle className="text-3xl mr-2" />
                  Login with Google
                </div>
                <div
                  onClick={handleGithubLogin}
                  className=" mt-2 bg-base-200 p-3 rounded-xl text-center flex items-center justify-center cursor-pointer"
                >
                  <FaGithub className="text-3xl mr-2" />
                  Login with Github
                </div>
                <p className="mt-3">
                  Don't have an account?
                  <Link to="/register">
                    <span className="font-bold ml-1">Register now</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
