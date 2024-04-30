import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AllTouristsSpot from "../pages/All Tourists Spot/AllTouristsSpot";
import AddTouristsSpot from "../pages/Add Tourists Spot/AddTouristsSpot";
import MyList from "../pages/My List/MyList";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/error/Error";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/view details/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('http://localhost:5000/touristSpots')
      },
      {
        path: "/addTouristsSpot",
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/touristSpots/${params.id}`)
      },
      {
        path: "*",
        element: <Error></Error>
      },
    ],
  },
]);

export default router;
