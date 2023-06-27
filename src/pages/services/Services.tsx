import React from "react";
import Hero from "../../components/Hero";

const Services = () => {
  return (
    <div
      className="w-full absolute top-32"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <Hero
        title="Services"
        description={`Discover our comprehensive range of exceptional services tailored to meet your specific needs. 
        From professional engineering solutions to energy products and beyond, 
        we are committed to delivering excellence and exceeding your expectations. 
        Explore our diverse offerings below and let us empower your success in the energy industry.`}
        src={require("../../assets/hero1.png")}
      />
      {/* <ServicesCard title="Engineering, Procurement, construction, Installation, Commissioning, & Project Management Services" /> */}
    </div>
  );
};

export default Services;
