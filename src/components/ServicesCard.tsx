import React from "react";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

type ServicesCardProps = {
  title: string;
};

const ServicesCard: React.FC<ServicesCardProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Add a delay of 500 milliseconds
    setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
      navigate("/services/");
    }, 300);
  };
  return (
    <div
      className={`w-64 h-[312px] md:w-96 md:h-[312px] rounded-lg shadow-xl bg-backgroundColor transition-opacity 
    `}
    >
      <div className=" border-t-[16px] border-primaryColor shadow-md rounded-t-lg"></div>
      <div className=" border-b-2 pt-14"></div>
      <div className=" flex flex-col items-center justify-center p-2 md:p-5">
        <h2
          className={` font-CrimsonText font-bold text-lg md:text-xl  text-center text-textColor`}
        >
          {title}
        </h2>
        <CustomButton
          title="Learn More"
          className="w-[120px] h-[40px] md:w-[154px] md:h-[51px] text-xs md:text-base mt-10 md:mt-10 hover:opacity-70"
          onClick={handleNavigation}
        />
      </div>
    </div>
  );
};

export default ServicesCard;
