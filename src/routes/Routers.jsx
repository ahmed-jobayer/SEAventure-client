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
import UpdatePage from "../pages/update page/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://sea-ventures-server.vercel.app/defultTouristSpots')
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
        loader: () => fetch('https://sea-ventures-server.vercel.app/touristSpots')
      },
      {
        path: "/addTouristsSpot",
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch('https://sea-ventures-server.vercel.app/touristSpots')
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://sea-ventures-server.vercel.app/touristSpots/${params.id}`)
      },
      {
        path: "/touristSpots/:id",
        element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader: ({params}) => fetch(`https://sea-ventures-server.vercel.app/touristSpots/${params.id}`)
      },
      {
        path: "*",
        element: <Error></Error>
      },
    ],
  },
]);

export default router;
