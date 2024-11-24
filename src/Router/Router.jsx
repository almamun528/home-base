import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className=' text-4xl text-center p-4'>Hello world!</div>,
  },
]);

const Router = () => {
    return <RouterProvider router={router} />
};

export default Router;