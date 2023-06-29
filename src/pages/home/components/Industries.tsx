import React from "react";
import {
  IndustryIcon1,
  IndustryIcon2,
  IndustryIcon3,
} from "../../../assets/svgs/icon";
import { useNavigate } from "react-router-dom";

const industriesData = [
  {
    id: 1,
    icons: IndustryIcon1,
    title: "Oil and Gas Industry",
    desc: " ECOCYNTEC specializes in providing energy products, solutions, and services for the oil and gas sector.",
    learnMore: "Learn More",
  },
  {
    id: 2,
    icons: IndustryIcon2,
    title: "Renewable Energy ",
    desc: " ECOCYNTEC is actively involved in the new energy sector, supplying products and services related to renewable energy.",
    learnMore: "Learn More",
  },
  {
    id: 3,
    icons: IndustryIcon3,
    title: "Energy  Infrastructure & Services",
    desc: " ECOCYNTEC provides its expertise in engineering and energy solutions to support the development and maintenance of energy infrastructure.",
    learnMore: "Learn More",
  },
];

const Industries = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/services");
  };
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-backgroundColor py-10 px-2 md:px-10 ">
      <div className=" flex flex-col items-center justify-center md:px-24">
        <h2 className=" font-CrimsonText font-bold text-2xl md:text-4xl text-primaryColor pb-5">
          Industries We Serve
        </h2>
        <p className=" pb-5 font-CrimsonText font-normal text-[12px] leading-5 md:text-xl text-textColor text-center md:text-center">
          At Ecocyntec, we take pride in our leadership role in the
          ever-evolving energy landscape, delivering unparalleled products,
          solutions, and services that cater to diverse client needs. With a
          deep understanding of the energy sector's pivotal role in driving
          global economic growth, we continuously push boundaries, optimize
          energy production, and foster sustainability for a brighter future.
        </p>
      </div>
      <div className="w-full flex-col md:flex-row md:flex items-center justify-between md:gap-10 my-5 md:my-10">
        {industriesData.map((card) => {
          const Icon = card.icons; // Assign the icon component to a variable
          return (
            <div
              key={card.id}
              className=" w-full h-96 flex flex-col items-center justify-between p-3 my-10 md:my-5 "
            >
              <div>
                <Icon />
              </div>
              <h3 className=" font-CrimsonText font-bold text-2xl text-center text-primaryColor">
                {card.title}
              </h3>
              <p className=" font-CrimsonText font-semibold text-textColor text-base text-center ">
                {card.desc}
              </p>

              <div
                className=" flex items-center justify-center cursor-pointer"
                onClick={handleNavigation}
              >
                <span className=" text-5xl text-primaryColor">-</span>
                <h1 className=" font-CrimsonText font-bold text-2xl text-primaryColor">
                  {card.learnMore}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Industries;
