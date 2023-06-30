import React from "react";

const whoWeAreData = [
  {
    id: 1,
    title: "Who We Are",
    desc: `
        EcoCynTec is a limited liability company incorporated in 2023 under the laws of the Federal Republic of Nigeria. EcoCynTec limited is a wholly indigenous company specializing in Engineering, Procurement, construction, Installation, 
        and commissioning as well as Project management services. |
        
        Our core Solutions and Services include: Engineering, Procurement, Construction, Installation, Commissioning
        and Project Management. |
        
        We are committed to providing exceptional services that meet the diverse needs of our clients in the energy industry. With our expertise, dedication to excellence, and customer-centric approach, we strive to deliver solutions that drive success, enhance operational efficiency, and contribute to a more sustainable future.
         `,
    img: require("../../../assets/whoWeAre1.png"),
  },
  {
    id: 2,
    title: "Mission Statement",
    desc: `To be the leading provider of customer centric Engineering, Procurement, construction, and Production Facilities services and Project management
      focused on delivering world class solutions and services for the energy industry.`,
    img: require("../../../assets/whoWeAre2.png"),
  },
  {
    id: 3,
    title: "Our Vision",
    desc: `
      Our Vision - To be the preferred energy services company with global recognition for customer centricity, integrity, commitment and target delivery.
           `,
    img: require("../../../assets/whoWeAre3.png"),
  },
];

const WhoWeAre = () => {
  return (
    <div className=" w-full h-auto flex flex-col bg-white mt-10">
      {whoWeAreData.map((item) => {
        const sentences = item.desc.split(" |");

        return (
          <div
            key={item.id}
            className={`w-full md:flex flex-1 items-center justify-center gap-4 md:gap-0 bg-backgroundColor px-4 md:px-8 mb-10 md:mb-0  ${
              item.id % 2 === 0 ? "flex-row md:flex-row-reverse " : ""
            }`}
          >
            <img
              src={item.img}
              alt=""
              className=" w-full md:w-1/2 h-[300px] md:h-[500px] object-cover"
            />

            <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-3 md:py-0 md:p-10">
              <h3 className=" font-CrimsonText font-bold text-2xl md:text-4xl text-primaryColor">
                {item.title}
              </h3>
              <p className=" flex flex-col font-CrimsonText font-medium text-justify md:text-justify text-sm md:text-xl text-textColor">
                {sentences.map((sentence) => (
                  <span key={sentence}>
                    {sentence} <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhoWeAre;
