import React from "react";
import { NavLink, RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";

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
  ]
);

export default function App(){
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}
