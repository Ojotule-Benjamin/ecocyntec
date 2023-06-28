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

const Layout = () => {
  return (
    <div className="w-full h-full relative top-0">
      <Navbar />
      <Outlet />
      <div
        className=" fixed -bottom-0 left-0 right-0"
        //style={{ bottom: "60" }}
      >
        {/* <Footer /> */}
      </div>
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
