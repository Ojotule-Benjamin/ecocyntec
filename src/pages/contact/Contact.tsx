import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import CustomButton from "../../components/CustomButton";

const Contact = () => {
  return (
    <div
      className="w-full absolute top-32"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <Hero
        title="Contact Us"
        description={`Reach out to us today and let's start a conversation about how we can collaborate and assist you with your energy needs. 
        Our dedicated team is ready to provide personalized support and find the best solutions for your business. 
        Fill out the form below or contact us directly to get started. We look forward to hearing from you.`}
        src={require("../../assets/hero1.png")}
      />
      <div className=" w-full h-[500px] gap-10 flex px-4  md:px-24 my-5 md:my-20 ">
        {/* frame icon */}
        <div className=" w-1/2 hidden md:flex flex-col items-center p-10 gap-10 bg-primaryColor">
          <img
            src={require("../../assets/icon2.png")}
            alt=""
            className=" w-44 h-44 absolute left-20 -bottom-[220px]"
          />
          <h2 className=" font-CrimsonText font-bold text-4xl text-white">
            Address
          </h2>
          <div className="w-full flex gap-5">
            <div>
              <FmdGoodOutlinedIcon
                style={{ fontSize: "30px", color: "white" }}
              />
            </div>
            <p className=" font-CrimsonText font-semibold text-lg text-white pr-40">
              14 Chestnut Close, Northern Foreshore, Lekki, Lagos
            </p>
          </div>

          <div className="w-full flex gap-5">
            <PhoneOutlinedIcon style={{ fontSize: "30px", color: "white" }} />
            <a
              href="tel:+4733378901"
              className=" font-CrimsonText font-semibold text-lg text-white "
            >
              +234 8163650201
            </a>
          </div>

          <div className="w-full flex gap-5">
            <div>
              <MailOutlinedIcon style={{ fontSize: "30px", color: "white" }} />
            </div>
            <a
              href="mailto:someone@example.com"
              className=" font-CrimsonText font-semibold text-lg text-white "
            >
              ecocyntec@info.net
            </a>
          </div>
          <img
            src={require("../../assets/icon2.png")}
            alt=""
            className=" w-44 h-44 absolute right-1/2 -bottom-[620px]"
          />
        </div>
        <div className=" w-full md:w-1/2  flex-col py-10  bg-white">
          <div className="w-full flex items-center justify-center gap-5 mb-5 flex-col">
            <h2 className=" font-CrimsonText font-bold text-4xl text-primaryColor">
              Contact Us
            </h2>
            <div className="w-full flex gap-5">
              <input
                placeholder="First Name"
                className="w-1/2 h-12 text-textColor pl-4 font-CrimsonText font-semibold text-base md:text-lg placeholder:text-textColor bg-[#DBD8D8] rounded-md outline-none"
              />
              <input
                placeholder="Last Name"
                className="w-1/2 h-12 text-textColor pl-4 font-CrimsonText font-semibold text-base md:text-lg placeholder:text-textColor bg-[#DBD8D8] rounded-md outline-none"
              />
            </div>
            <input
              placeholder="Email"
              className="w-full h-12 text-textColor pl-4 font-CrimsonText font-semibold text-base md:text-lg placeholder:text-textColor bg-[#DBD8D8] rounded-md outline-none"
            />
            <input
              placeholder="Subject"
              className="w-full h-12 text-textColor pl-4 font-CrimsonText font-semibold text-base md:text-lg placeholder:text-textColor bg-[#DBD8D8] rounded-md outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full h-28 text-textColor pl-4 pt-4 font-CrimsonText font-semibold text-base md:text-lg placeholder:text-textColor bg-[#DBD8D8] rounded-md outline-none"
            ></textarea>
          </div>
          <CustomButton
            title="Submit"
            className=" hover:opacity-80 cursor-pointer"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
