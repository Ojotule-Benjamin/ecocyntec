import React from "react";
import CustomButton from "../../../components/CustomButton";

const PartnerWithUs = () => {
  return (
    <div
      className=" w-full h-96 flex flex-col items-center justify-center gap-4 py-10 px-3 md:px-24 my-10"
      style={{
        backgroundImage: `url(${require("../../../assets/PartnerWithUs.png")})`, // Use 'url()' to specify the background image
        backgroundSize: "cover", // Optional: Adjust the background size based on your requirements
      }}
    >
      <h2 className=" font-CrimsonText font-bold text-2xl md:text-4xl text-white text-center">
        PARTNER WITH US
      </h2>
      <p className=" font-CrimsonText font-normal text-sm leading-5 md:text-xl text-white text-center">
        By fostering strong partnerships, we empower ourselves to effectively
        address the ever-changing needs of our valued clients, embracing agility
        and adaptability. Let's engage in a conversation to explore how we can
        further enhance our collective offerings and seize upcoming
        opportunities.
      </p>
      <CustomButton title="Contact Us" />
    </div>
  );
};

export default PartnerWithUs;
