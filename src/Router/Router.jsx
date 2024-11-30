import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Card from "../components/Card";
import PropertyDetails from "../Pages/PropertyDetails";
import Agents from "../Pages/Agents";
import LayOut from "../LayOut/LayOut";
import Footer from "../components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "card",
        element: <Card></Card>,
        loader: () => fetch("/property.json"),
      },
      {
        path: "/propertyDetails/:id",
        element: <PropertyDetails></PropertyDetails>,
        loader: ({ params }) => fetch(`property.json/${params.id}`),
      },
      {
        path: "agents",
        element: <Agents></Agents>,
        loader: () => fetch("/agent.json"),
      },
 
    ],
    errorElement: <Error></Error>,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
