import React from "react";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <div className=" w-full h-auto md:h-[500px] md:px-8 gap-10 md:gap-20 flex flex-col-reverse md:flex-row bg-primaryColor  pb-10 ">
      <div className="w-full md:w-[30%] px-4 md:px-0 flex flex-col md:row items-center md:items-start gap-3 md:gap-8 ">
        <Link to={"/"}>
          <div className="hidden md:flex w-[100px] md:w-[200px] md:h-[112px] ">
            <img
              src={require("../assets/ecocyntec.png")}
              alt=""
              className="w-full h-full object-cover "
            />
          </div>
        </Link>
        <p className=" font-CrimsonText font-semibold text-sm text-white text-center md:text-justify">
          Please don't hesitate to contact us for more information or to request
          a quote. You can also connect with us on social media to stay
          up-to-date on the latest industry news and tips. We look forward to
          serving you
        </p>
        <div className="flex items-center justify-center gap-4">
          <FacebookOutlinedIcon style={{ color: "white", fontSize: "32px" }} />
          <TwitterIcon style={{ color: "white", fontSize: "32px" }} />
          <LinkedInIcon style={{ color: "white", fontSize: "32px" }} />
        </div>
      </div>

      <div className="right w-full flex-col md:flex-row flex justify-between gap-5 md:gap-0 pt-2 ">
        <div className="contact w-full flex flex-col items-center gap-3 md:gap-16 px-4 md:px-0 ">
          <h3 className=" font-CrimsonText font-semibold text-lg md:text-2xl text-white pt-0 md:pt-8">
            Contact
          </h3>

          <div className=" w-full flex items-center gap-5 ">
            <FmdGoodOutlinedIcon style={{ color: "white", fontSize: "30px" }} />
            <div>
              <h3 className=" font-CrimsonText font-bold text-sm md:text-2xl text-white ">
                Head Office
              </h3>
              <p className=" font-CrimsonText font-semibold text-xs md:text-lg text-white">
                14 Chestnut Close, Northern Foreshore, Lekki, Lagos
              </p>
            </div>
          </div>

          <div className=" w-full flex items-center gap-5 ">
            <MailOutlinedIcon style={{ color: "white", fontSize: "30px" }} />
            <div>
              <h3 className=" font-CrimsonText font-bold text-sm md:text-2xl text-white">
                Email
              </h3>
              <a
                href="mailto:someone@example.com"
                className=" font-CrimsonText font-semibold text-sm md:text-lg text-white"
              >
                ecocyntec@info.net
              </a>
            </div>
          </div>

          <div className=" w-full flex items-center gap-5 ">
            <PhoneOutlinedIcon style={{ color: "white", fontSize: "30px" }} />
            <div>
              <h3 className=" font-CrimsonText font-bold text-sm md:text-2xl text-white">
                Phone Number
              </h3>
              <a
                href="tel:+4733378901"
                className=" font-CrimsonText font-semibold text-sm md:text-lg text-white"
              >
                +234 8163650201
              </a>
            </div>
          </div>
        </div>

        <div className="company w-full flex flex-col items-center gap-3 md:gap-16">
          <h1 className=" font-CrimsonText font-semibold text-lg md:text-2xl text-white pt-0 md:pt-8">
            Company
          </h1>
          <div className="w-full h-1/2 px-2 md:px-0 flex flex-row md:flex-col items-center justify-between ">
            <Link
              to={"/aboutUs"}
              className=" font-CrimsonText font-semibold text-lg md:text-2xl text-white"
            >
              About Us
            </Link>
            <Link
              to={"/services"}
              className=" font-CrimsonText font-semibold text-lg md:text-2xl text-white"
            >
              Services
            </Link>
            <Link
              to={"/projects"}
              className=" font-CrimsonText font-semibold text-lg md:text-2xl text-white"
            >
              Projects
            </Link>
            <Link
              to={"/contact"}
              className=" font-CrimsonText font-semibold text-lg md:text-2xl text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="subcribe w-full flex flex-col items-center gap-3 md:gap-16">
          <h1 className=" font-CrimsonText font-semibold text-lg md:text-2xl text-white pt-0 md:pt-8">
            Subscribe To Our Newsletter
          </h1>
          <div className="w-full h-1/2 px-2 md:px-0 flex flex-col md:flex-col items-center gap-5  ">
            <input
              className=" w-full h-12 md:h-14 bg-white text-textColor pl-3 outline-none "
              placeholder="Email"
            />
            <CustomButton
              title="Subscribe"
              className=" w-full h-12 md:h-14 flex items-center justify-center text-white bg-textColor hover:bg-white hover:text-textColor rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
