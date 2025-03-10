import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import "./Navbar.css"

const Navbar = () => {
  const { user, logut } = useContext(AuthContext);

  const handleLogut = () => {
    logut();
  };

  const links = (
    <>
      <NavLink to="/" className="lg:mr-2 p-2 lg:bg-slate-800 lg:rounded-lg">
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/allTouristsSpot"
        className="lg:mr-2 p-2 lg:bg-slate-800 lg:rounded-lg"
      >
        <li>All Tourists Spot</li>
      </NavLink>
      <NavLink
        to="/addTouristsSpot"
        className="lg:mr-2 p-2 lg:bg-slate-800 lg:rounded-lg"
      >
        <li>Add Tourists Spot</li>
      </NavLink>
      <NavLink to="/myList" className=" p-2 lg:bg-slate-800 lg:rounded-lg">
        <li>My List</li>
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            SEAventures
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <div className="flex items-center gap-2">
              <div
                className="avatar tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div className="w-9 rounded-full  ">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </div>
              <NavLink
                onClick={handleLogut}
                className=" mr-2 p-2 bg-slate-800 rounded-lg"
              >
                Log out
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink
                to="/login"
                className=" mr-2 p-2 bg-slate-800 rounded-lg"
              >
                Login
              </NavLink>
              <NavLink to="/register" className=" p-2 bg-slate-800 rounded-lg">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
