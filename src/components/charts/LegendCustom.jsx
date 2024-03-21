import React from "react";

const LegendCustom = ({ bgColor, item, percentage }) => {
  return (
    <div className="flex items-center ibm-plex-sans-regular text-xs gap-2.5">
      <span
        className="!size-[15px]"
        style={{ backgroundColor: bgColor }}
      ></span>
      <p className="font-normal ibm-plex-sans-regular">
        {item} <span className="font-bold">{percentage}%</span>
      </p>
    </div>
  );
};

export default LegendCustom;
