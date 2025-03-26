import React from "react";

interface IconContainerProps {
  icon: React.ElementType | React.ReactNode;
  containerClassName?: string;
  iconClassName?: string;
  wrapperSize?: number;
  iconSize?: number;
}

const IconContainer = ({
  icon,
  containerClassName = "",
  iconClassName = "",
  wrapperSize = 35,
  iconSize = 10,
}: IconContainerProps) => {
  const wrapperSizeClass = `w-[${wrapperSize}px] h-[${wrapperSize}px]`;
  
  return (
    <div
      className={`rounded-xl flex items-center bg-white/20 border-0 justify-center ${wrapperSizeClass} ${containerClassName}`}
    >
      {React.isValidElement(icon) ? (
        icon
      ) : (
        React.createElement(icon as React.ElementType, {
          className: `text-gray-300 ${iconClassName}`,
          width: iconSize,
          height: iconSize,
        })
      )}
    </div>
  );
};

export default IconContainer;