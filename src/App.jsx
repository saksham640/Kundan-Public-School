import React from "react";
import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Nav from "./components/Nav.jsx";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorElement/>

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