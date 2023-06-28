import React from "react";
import ServicesCard from "../../../components/ServicesCard";

const OurExpertise = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-white px-2 md:px-10 ">
      <div className=" flex flex-col items-center justify-center md:px-24">
        <h2 className=" font-CrimsonText font-bold text-2xl md:text-4xl text-primaryColor pb-5">
          Our Expertise
        </h2>
        <p className=" pb-5 font-CrimsonText font-normal text-[12px] leading-5 md:text-xl text-textColor text-justify md:text-center">
          We provide engineering and operations support services across various
          production facilities including but not limited to oil, gas and
          produced water processing facilities:
        </p>
      </div>
      <div className="w-full flex-col md:flex-row flex items-center justify-between gap-10 my5 md:my-10">
        <ServicesCard title="Oil, Gas & Produced Water Treatment & Management" />
        <div className=" flex flex-col gap-10">
          {" "}
          <ServicesCard title="Quality, Health, Safety and Environment" />
          <ServicesCard title="Engineering, Procurement, construction, Installation, Commissioning, & Project Management Services" />
        </div>
        <ServicesCard title="Asset Integrity & Management" />
      </div>
    </div>
  );
};

export default OurExpertise;
