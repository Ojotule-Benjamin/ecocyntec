import React from "react";
import CustomButton from "../../../components/CustomButton";

const OurMission = () => {
  return (
    <div className=" w-full h-96 mt-72 md:mt-20 md:h-[600px] flex flex-1 flex-col-reverse md:flex-row  ">
      <div className="w-full md:w-1/2 h-full p-2 md:p-5 flex-[0.5] bg-primaryColor flex flex-col items-center justify-center md:gap-4">
        <h2 className=" font-CrimsonText font-bold text-2xl md:text-4xl text-white">
          Our Mission
        </h2>
        <p className=" pb-5 font-CrimsonText font-normal text-[12px] leading-5 md:text-xl text-white text-justify md:text-center">
          At Ecocyntec, our vision drives us to be the leading energy services
          company globally, setting a benchmark for excellence and customer
          satisfaction. We aspire to be the trusted partner for all your energy
          needs, providing innovative solutions and exceptional services. Join
          us on our mission to transform the energy industry. Experience the
          difference of working with a company that is dedicated to
          customer-centricity, engineering excellence, procurement expertise,
          construction and production facilities know-how, project management
          excellence, and delivering world-class solutions.
        </p>
        <CustomButton
          title="Discover More"
          className=" w-[120px] h-[40px] md:w-[154px] md:h-[51px] text-xs md:text-base hover:bg-white hover:text-textColor border-2 border-white"
        />
      </div>
      <div className="w-full h-full md:w-1/2 flex-[0.5]">
        <img
          src={require("../../../assets/projectImg2.png")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default OurMission;
