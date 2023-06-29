import React from "react";
import CustomButton from "./CustomButton";

type ProjectCardProps = {
  src?: string;
  alt?: string;
  title?: string;
  location?: string;
  onClick?: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  src,
  alt,
  title,
  location,
  onClick,
}) => {
  return (
    <div className=" w-full  md:w-96 md:h-96 p-5 md:p-0 bg-backgroundColor">
      <div className=" h-96 md:h-[500px] relative rounded-md border-4 ">
        <div className="w-full h-full">
          <img src={src} alt={alt} className=" w-full h-full object-cover" />
        </div>
        <div className="w-4/5 h-24 md:w-4/5  md:h-40 pl-3 md:pl-7 pt-2 md:pt-5 flex flex-col bg-white absolute bottom-0">
          <h1 className=" font-CrimsonText font-bold text-base md:text-2xl text-primaryColor">
            {title}
          </h1>
          <p className=" font-CrimsonText font-bold text-sm text-textColor ">
            {location}
          </p>
          <CustomButton
            title="VIEW PROJECT"
            className="w-28 h-28 md:w-[154px] md:h-[51px] text-xs md:text-base text-white cursor-pointer border-2  border-white"
            titleStyle=" text-400"
            onClick={onClick}
          />
        </div>
      </div>

      <div className=" w-full md:w-[360px] h-[25px] flex items-center justify-center mx-auto bg-gradient-to-t from-white  to-emerald-700 rounded-t-lg shadow-md"></div>
    </div>
  );
};

export default ProjectCard;
