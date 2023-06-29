import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { EcocyntectLogo } from "../assets/svgs/icon";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutUs" },
  { name: "Services", to: "/services" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const currentRoute = window.location.pathname;

  return (
    <div className=" w-full h-32  bg-white  z-10 fixed top-0 bottom-0">
      <div className=" flex items-center justify-between px-2 md:px-8">
        <div className="flex w-[200px] h-[112px]">
          <Link to={"/"}>
            <EcocyntectLogo />
          </Link>
        </div>

        <ul className=" hidden md:flex items-center gap-8">
          {navLinks.map(({ name, to }) => (
            <li key={name + to}>
              <Link
                to={to}
                className={`hover:text-textNav text-primaryColor font-CrimsonText font-normal  text-xl 
                text-${
                  currentRoute ? "text-textNav font-bold" : "text-primaryColor"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" hidden md:flex items-center gap-2">
          <SearchIcon
            className=" text-primaryColor w-7"
            style={{ fontSize: "30px" }}
          />
          <SortOutlinedIcon
            className=" text-primaryColor w-7"
            style={{ fontSize: "30px" }}
          />
        </div>

        <div className=" flex md:hidden">
          {isOpen ? (
            <CloseIcon
              onClick={handleIsOpen}
              className=" w-7 font-medium text-primaryColor text-3xl"
              style={{ fontSize: "30px" }}
            />
          ) : (
            <MenuIcon
              onClick={handleIsOpen}
              className=" w-7 font-medium text-primaryColor text-3xl"
              style={{ fontSize: "30px" }}
            />
          )}
        </div>
      </div>

      {/* mobile view */}

      {isOpen && (
        <div className=" bg-slate-200 md:hidden p-4 absolute w-full">
          <ul className="flex flex-col items-start gap-4 ">
            {navLinks.map(({ name, to }) => (
              <li
                key={name + to}
                className={`hover:text-textNav text-primaryColor font-CrimsonText font-medium text-lg text-${
                  currentRoute === to
                    ? "text-textNav font-bold"
                    : "text-primaryColor"
                }`}
              >
                <Link to={to}>{name}</Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex items-center gap-2 mt-3">
            <SearchIcon
              className=" text-primaryColor w-7"
              style={{ fontSize: "30px" }}
            />
            <SortOutlinedIcon
              className=" text-primaryColor w-7"
              style={{ fontSize: "30px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
