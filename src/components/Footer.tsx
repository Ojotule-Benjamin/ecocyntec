import React from "react";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

const Footer = () => {
  return (
    <div className=" w-full h-auto md:h-[500px] md:px-8 gap-10 md:gap-0 flex flex-col md:flex-row bg-primaryColor pb-10 ">
      <div className="w-full md:w-[30%] px-4 md:px-0 flex flex-col md:row items-center md:items-start gap-3 md:gap-8 ">
        <Link to={"/"}>
          <div className="flex w-[100px] md:w-[200px] md:h-[112px] ">
            <img
              src={require("../assets/ecocyntec.png")}
              alt=""
              className="w-full h-full object-cover "
            />
          </div>
        </Link>
        <p className=" font-CrimsonText font-semibold text-sm text-white text-justify">
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

      <div className="right w-full flex-col md:flex-row flex justify-between gap-10 md:gap-0 pt-2 ">
        <div className="contact w-full flex flex-col items-center gap-3 md:gap-16 px-4 md:px-0 ">
          <h3 className=" font-CrimsonText font-semibold text-xl md:text-2xl text-white">
            {" "}
            Contact
          </h3>

          {/* location */}
          <div className="w-full md:w-52 flex flex-row  items-center justify-center gap-5 md:gap-0 md:justify-between ">
            <FmdGoodOutlinedIcon style={{ color: "white", fontSize: "30px" }} />
            <div className=" flex items-center justify-center flex-col">
              <h5>Head Office</h5>
              <p className=" text-center">
                14 Chestnut Close, Northern Foreshore, Lekki, Lagos
              </p>
            </div>
          </div>

          {/* email */}
          <div className="w-full flex flex-col items-center justify-center">
            <h3 className=" ">Email</h3>
            <div className=" w-full md:w-52 flex flex-row  items-center justify-center gap-5 md:gap-0 md:justify-between">
              <MailOutlinedIcon style={{ color: "white", fontSize: "30px" }} />
              <p>ecocyntect@gmail.com</p>
            </div>
          </div>

          {/* phone number */}
          <div className="w-full flex flex-col items-center justify-center ">
            <h3 className=" ">Phone Number</h3>
            <div className="w-full md:w-52 md:flex-row flex items-start justify-start gap-5 md:gap-0 md:justify-between ">
              <PhoneOutlinedIcon style={{ color: "white", fontSize: "30px" }} />
              <p className="">08034659801</p>
              <p className=" text-primaryColor">*</p>
            </div>
          </div>
        </div>

        <div className="company w-full flex flex-col items-center gap-3 md:gap-16">
          <h1 className=" font-CrimsonText font-semibold text-xl md:text-2xl text-white">
            Company
          </h1>
          <div className="w-full h-1/2 px-2 md:px-0 flex flex-row md:flex-col items-center justify-between ">
            <h1>About us</h1>
            <h1>About us</h1>
            <h1>About us</h1>
            <h1>About us</h1>
          </div>
        </div>

        <div className="subcribe w-full flex flex-col items-center gap-3 md:gap-16">
          <h1 className=" font-CrimsonText font-semibold text-xl md:text-2xl text-white">
            Subscribe To Our Newsletter
          </h1>
          <div className="w-full h-1/2 px-2 md:px-0 flex flex-col md:flex-col items-center gap-5 md:gap-10 ">
            <input
              className=" w-full h-14 md:h-20 bg-white text-textColor pl-3 outline-none "
              placeholder="Email"
            />
            <div className=" w-full h-14 md:h-20 flex items-center justify-center text-white bg-textColor ">
              Subscribe
            </div>
          </div>
        </div>

        {/* <div>3</div>
            <div>4</div> */}
      </div>
    </div>
  );
};

export default Footer;
