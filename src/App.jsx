import React from "react";
import { NavLink, RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";
import Admissions from "./components/Admissions/Admissions.jsx";
import Holidays from "./components/Holidays/Holidays.jsx";
import Prayer from "./components/Prayer/Prayer.jsx";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorElement/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/admissions",
      element: <Admissions/>
    },
    {
      path: "/holidays",
      element: <Holidays/>
    },
    {
      path: "/prayer",
      element: <Prayer/>
    }
  ]
);

export default function App(){
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}
