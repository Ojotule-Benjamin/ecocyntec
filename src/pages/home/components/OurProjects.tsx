import React from "react";
import ProjectCard from "../../../components/ProjectCard";
import { useNavigate } from "react-router-dom";

interface IprojectData {
  id: number;
  img: string;
  title: string;
  location: string;
}

const projectData = [
  {
    id: 1,
    img: require("../../../assets/projectImg1.png"),
    title: "Placeholder Text",
    location: "Lagos",
  },
  {
    id: 2,
    img: require("../../../assets/projectImg2.png"),
    title: "Placeholder Text",
    location: "London",
  },
  {
    id: 3,
    img: require("../../../assets/projectImg3.png"),
    title: "Placeholder Text",
    location: "Qatar",
  },
];

const OurProjects = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/projects");
  };
  return (
    <div className=" w-full h-auto flex flex-col items-center justify-center gap-4 py-10 bg-backgroundColor">
      <h2 className=" font-CrimsonText font-bold text-2xl md:text-4xl text-primaryColor text-center ">
        Our Projects
      </h2>

      <div className="w-full flex md:flex-row md:flex items-center justify-between flex-wrap pb-10 md:pb-20 my-5 md:my-10">
        {projectData.map(({ img, location, title, id }: IprojectData) => {
          return (
            <ProjectCard
              key={id}
              src={img}
              alt={title}
              title={title}
              location={location}
              onClick={handleNavigation}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurProjects;
