import React from "react";
import CustomButton from "./CustomButton";

type ServicesCardProps = {
  title: string;
};

const ServicesCard: React.FC<ServicesCardProps> = ({ title }) => {
  return (
    <div className=" w-[388px] h-[312px] rounded-lg shadow-xl ">
      <div className=" border-t-[16px] border-primaryColor shadow-md rounded-t-lg"></div>

      <div className=" border-b-2 pt-14"></div>

      <div className=" flex flex-col items-center justify-center p-5">
        <h2
          className={` font-CrimsonText font-bold text-2xl text-center text-textColor`}
        >
          {title}
        </h2>
        <CustomButton title="Learn More" className=" mt-3" />
      </div>
    </div>
  );
};

export default ServicesCard;
