import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import Partner from "../../components/Partner";

const Service = () => {
  const location = useLocation();

  const { service } = location.state || {};
  const sentences = service.desc.split(" |");
  return (
    <div
      className="w-full absolute top-32"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <Hero
        title={service.title}
        src={service.img}
        description={service.titleDesc}
      />
      <div className="flex flex-col items-start justify-center gap-2 md:gap-3 font-CrimsonText font-normal text-sm md:text-xl text-textColor text-justify p-5 md:p-20 ">
        {sentences.map((item: any) => (
          <div key={item}>
            <p className=" ">{item}</p>
          </div>
        ))}

        {/* project images */}

        <div className="w-full md:w-96 h-72 mt-5 md:mt-10">
          <div className="w-full h-[263px] relative">
            <img
              src={service.img}
              alt={service.title}
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" w-full h-[25px] bg-gradient-to-t from-white to-emerald-700 shadow-md"></div>
        </div>
      </div>

      <div className="mb-5 md:mb-0 flex items-center justify-center">
        <CustomButton title="Back to Services" />
      </div>

      <Partner />

      <Footer />
    </div>
  );
};

export default Service;
