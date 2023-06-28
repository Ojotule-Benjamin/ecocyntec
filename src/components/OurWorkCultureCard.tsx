import React from "react";

type OurWorkCultureCardProps = {
  title: string;
  desc: string;
  icon: React.ReactElement | null;
};

const OurWorkCultureCard: React.FC<OurWorkCultureCardProps> = ({
  title,
  desc,
  icon,
}) => {
  return (
    <div className=" w-full mx-auto md:h-64 md:w-96 p-2 flex items-center gap-2 md:gap-4 ">
      <div className="">{icon}</div>
      <div className=" ">
        <h2 className=" font-CrimsonText font-bold text-xl md:text-3xl text-primaryColor">
          {title}
        </h2>
        <p className=" font-CrimsonText font-normal text-base text-justify text-textColor">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default OurWorkCultureCard;
