import React from "react";
import CustomButton from "./CustomButton";

type HeroProps = {
  title?: string;
  description?: string;
  src?: string;
  alt?: string;
  button?: React.ReactElement<typeof CustomButton> | null;
};

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  src,
  alt,
  button,
}) => {
  const backgroundImageStyle = src ? { backgroundImage: `url(${src})` } : {};

  return (
    <div className="w-full " style={{ height: "calc(100vh - 128px)" }}>
      <div className=" w-full, h-full flex relative">
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={backgroundImageStyle}
        ></div>

        <div className=" w-[90%] md:w-4/5 h-[90%] md:h-[403px] flex flex-col px-3 md:px-24 items-center justify-center gap-4 opacity-80 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <h2 className=" font-CrimsonText font-bold text-2xl md:text-4xl text-primaryColor text-center md:px-16">
            {title}
          </h2>
          <p className=" text-center font-CrimsonText font-normal text-sm md:text-xl text-textColor">
            {description}
          </p>
          {button} {/* Render the CustomButton component passed as a prop */}
          <div className="w-14 h-14 md:w-24 md:h-24 absolute bottom-0 right-0">
            <img
              src={require("../assets/icon.png")}
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
