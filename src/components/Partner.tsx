import React from "react";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

const Partner = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    setTimeout(() => {
      window.scroll(0, 0);
      navigate("/");
    });
  };

  return (
    <div className="hidden w-full h-56 md:flex items-center justify-between gap-8 px-4 md:px-8 bg-[#F3F3F3] my-10">
      <h2 className="w-[15%] font-CrimsonText font-bold text-primaryColor text-2xl md:text-4xl px-3">
        PARTNER WITH US
      </h2>
      <p className="w-[70%] font-CrimsonText font-normal text-justify text-textColor text-sm md:text-xl">
        By fostering strong partnerships, we empower ourselves to effectively
        address the ever-changing needs of our valued clients, embracing agility
        and adaptability. Let's engage in a conversation to explore how we can
        further enhance our collective offerings and seize upcoming
        opportunities.
      </p>
      <CustomButton
        title="Discover More"
        className="w-[15%] bg-white hover:bg-primaryColor hover:text-white text-[#00964A] border hover:border-white border-primaryColor opacity-100 cursor-pointer"
      />
    </div>
  );
};

export default Partner;
