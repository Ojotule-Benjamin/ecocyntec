import React from "react";
import {
  IndustryIcon1,
  IndustryIcon2,
  IndustryIcon3,
} from "../../../assets/svgs/icon";

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
  return (
    <div
      className="w-full h-[600px] flex flex-col items-center justify-center "
      //className=" w-full h-[600px] bg-blue-800 relative"
    >
      <div className="flex flex-col items-center justify-center px-0 md:px-24 md:py-10">
        <h2 className=" font-CrimsonText font-bold text-2xl md:text-4xl text-primaryColor text-center">
          Industries We Serve
        </h2>
        <p className=" font-CrimsonText font-normal text-sm leading-5 md:text-xl text-textColor text-center">
          At Ecocyntec, we take pride in our leadership role in the
          ever-evolving energy landscape, delivering unparalleled products,
          solutions, and services that cater to diverse client needs. With a
          deep understanding of the energy sector's pivotal role in driving
          global economic growth, we continuously push boundaries, optimize
          energy production, and foster sustainability for a brighter future.
        </p>
      </div>
      <div className="w-full  md:flex justify-between ">
        {industriesData.map((card) => {
          const Icon = card.icons; // Assign the icon component to a variable
          return (
            <div
              key={card.id}
              className=" w-80 h-72 flex flex-col items-center justify-between border-2 border-red-500"
            >
              <div className=" w-20 h-20">
                <Icon />
              </div>
              <div>{card.title}</div>
              <div>{card.desc}</div>
              <div className=" w-full flex items-center justify-center bg-gray-400">
                <h1>{card.learnMore}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Industries;
