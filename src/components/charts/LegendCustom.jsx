import React from "react";

const LegendCustom = ({ bgColor, item, percentage }) => {
  return (
    <div className="flex items-center ibm-plex-sans-regular text-xs gap-x-1">
      <span
        className="!size-[15px]"
        style={{ backgroundColor: bgColor }}
      ></span>
      <div className="flex items-center space-x-1 font-normal ibm-plex-sans-regular">
        <p className="text-[10px]">{item}</p>
         <span className="font-bold text-[10px]">{percentage}%</span>
      </div>
    </div>
  );
};

export default LegendCustom;
