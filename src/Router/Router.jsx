import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import Card from '../components/Card';
import PropertyDetails from '../Pages/PropertyDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path: "card",
    element: <Card></Card>,
    loader: () => fetch("property.json"),
  },
  {
    path: "/propertyDetails/:id",
    element: <PropertyDetails></PropertyDetails>,
    loader: ({ params }) => fetch(`property.json/${params.id}`)
  },
]);

const Router = () => {
    return <RouterProvider router={router} />
};

export default Router;