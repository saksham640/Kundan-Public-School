import React from "react";
import { NavLink, RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import ErrorElement from "./pages/ErrorElement/ErrorElement.jsx";
import Admissions from "./pages/Admissions/Admissions.jsx";
import Holidays from "./pages/Holidays/Holidays.jsx";
import Prayer from "./pages/Prayer/Prayer.jsx";
import db from "../src/configs/fireBaseConfig.js"

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
