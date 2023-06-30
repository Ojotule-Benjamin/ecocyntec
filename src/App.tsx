import React from "react";
import "./App.css";
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./pages/services/Service";

const Layout = () => {
  return (
    <div className="w-full h-full relative top-0">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/service",
        element: <Service />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div className=" ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
