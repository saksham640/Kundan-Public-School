import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home></Home>,
    },
  ]
);

export default function App(){
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}