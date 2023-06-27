import React from "react";
import CustomButton from "./CustomButton";

type ProjectCardProps = {
  src?: string;
  alt?: string;
  title?: string;
  location?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  src,
  alt,
  title,
  location,
}) => {
  return (
    <div className=" w-96 h-96 ">
      <div className=" h-[500px] relative rounded-md border-4 ">
        <div className="w-full h-full">
          <img src={src} alt={alt} className=" w-full h-full object-cover" />
        </div>
        <div className=" w-4/5  h-40 pl-7 pt-5 flex flex-col bg-white absolute bottom-0">
          <h1 className=" font-CrimsonText font-bold text-2xl text-primaryColor">
            {title}
          </h1>
          <p className=" font-CrimsonText font-bold text-sm text-textColor pb-4">
            {location}
          </p>
          <CustomButton
            title="VIEW PROJECT"
            className="w-40 h-8 text-sm"
            titleStyle=" text-400"
          />
        </div>
      </div>

      <div className=" w-[360px] h-[25px] flex items-center justify-center mx-auto bg-gradient-to-t from-white  to-emerald-700 rounded-t-lg shadow-md"></div>
    </div>
  );
};

export default ProjectCard;

// w-[480px] h-[530px]
// w-[360px] h-[190px]
