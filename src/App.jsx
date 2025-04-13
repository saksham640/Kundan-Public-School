import React from "react";
import { NavLink, RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import ErrorElement from "./pages/ErrorElement/ErrorElement.jsx";
import Admissions from "./pages/Admissions/Admissions.jsx";
import Holidays from "./pages/Holidays/Holidays.jsx";
import Prayer from "./pages/Prayer/Prayer.jsx";
import AdminPanel from "./pages/AdminPanel/AdminPanel.jsx";
import Calender from "./pages/Calender/Calender.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import MandatoryDisclosures from "./pages/MandatoryDisclosures/MandatoryDisclosures.jsx";

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
    },
    {
      path: "/adminPanel",
      element: <AdminPanel/>
    },
    {
      path: "/calender",
      element: <Calender/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/resources",
      element:<Resources/>
    },
    {
      path:"/MandatoryDisclosures",
      element:<MandatoryDisclosures/>
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
