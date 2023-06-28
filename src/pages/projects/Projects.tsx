import React from "react";
import ProjectCard from "../../components/ProjectCard";
import Hero from "../../components/Hero";

import CustomButton from "../../components/CustomButton";

const projectData = [
  {
    id: 1,
    img: require("../../assets/projectImg1.png"),
    title: "Placeholder Text",
    location: "Lagos",
  },
  {
    id: 2,
    img: require("../../assets/projectImg2.png"),
    title: "Placeholder Text",
    location: "London",
  },
  {
    id: 3,
    img: require("../../assets/projectImg3.png"),
    title: "Placeholder Text",
    location: "Qatar",
  },
];

interface IprojectData {
  id: number;
  img: string;
  title: string;
  location: string;
}

const Projects = () => {
  return (
    <div
      className="w-full absolute top-32"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <Hero
        title="Projects"
        description={`ECOCYNTEC Limited, a leading provider of professional engineering services and energy solutions for the upstream,
              midstream, and downstream sectors of the oil and energy industry.
              Established in 2023, we have built a strong reputation in the industry for delivering exceptional results.
              As a limited liability company,
              we are dedicated to providing top-quality engineering services and energy products to our clients.`}
        src={require("../../assets/hero1.png")}
      />
      <h1>projetcs</h1>
      <h1>projetcs</h1>
      <h1>projetcs</h1>
      <h1>projetcs</h1>
      <h1>projetcs</h1>
      <h1>projetcs</h1>
      <h1>projetcs</h1>
      <h1>projetcs</h1>
      <h1>projetcs</h1>

      <Hero
        title="Empowering Energy Solutions for a Sustainable Future"
        description={`ECOCYNTEC Limited, a leading provider of professional engineering services and energy solutions for the upstream,
              midstream, and downstream sectors of the oil and energy industry.
              Established in 2023, we have built a strong reputation in the industry for delivering exceptional results.
              As a limited liability company,
              we are dedicated to providing top-quality engineering services and energy products to our clients.`}
        src={require("../../assets/hero1.png")}
        button={
          <CustomButton
            title="Discover More"
            className="w-28 h-10 md:w-[154px] md:h-[51px] text-xs md:text-base text-white cursor-pointer border-2  border-white"
          />
        }
      />

      <div className="w-full flex items-center justify-between flex-wrap">
        {projectData.map(({ img, location, title, id }: IprojectData) => {
          return (
            <ProjectCard
              key={id}
              src={img}
              alt={title}
              title={title}
              location={location}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
