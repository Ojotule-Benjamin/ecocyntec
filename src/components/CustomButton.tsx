import React from "react";

type CustomButtonProps = {
  title: string;
  //onClick: Function;
  onClick?: () => void;
  titleStyle?: string;
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  className,
  titleStyle,
  onClick,
}) => {
  return (
    <div
      className={`w-[154px] h-[51px] rounded-[4px] flex items-center justify-center bg-primaryColor font-CrimsonText font-bold text-textColorWhite text-base ${titleStyle} ${className}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default CustomButton;
