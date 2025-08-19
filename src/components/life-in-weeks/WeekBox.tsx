"use client";

import { useState } from "react";
import { WeekBoxProps } from "./types";

export default function WeekBox({
  type,
  date,
  label,
  tooltip,
  basedClass = "",
  doingClass = "",
  onClick,
}: WeekBoxProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getBackgroundClass = (className: string) => {
    switch (className) {
      case "i-was-tiny":
        return "bg-life-in-weeks-stages-i-was-tiny";
      case "kindergartner":
        return "bg-life-in-weeks-stages-kindergartner";
      case "student":
        return "bg-life-in-weeks-stages-student";
      case "high-school-student":
        return "bg-life-in-weeks-stages-high-school-student";
      case "college-student":
        return "bg-life-in-weeks-stages-college-student";
      case "working":
        return "bg-life-in-weeks-stages-working";
      case "freelancing":
        return "bg-life-in-weeks-stages-freelancing";
      case "funemployed":
        return "bg-life-in-weeks-stages-funemployed";
      case "graduate":
        return "bg-life-in-weeks-stages-graduate";
      default:
        return "bg-gray-100";
    }
  };

  const getBorderClass = (className: string) => {
    switch (className) {
      case "hometown":
        return "border-life-in-weeks-locations-hometown";
      case "college-town":
        return "border-life-in-weeks-locations-college-town";
      case "paris":
        return "border-life-in-weeks-locations-paris";
      case "new-york":
        return "border-life-in-weeks-locations-new-york";
      case "san-francisco":
        return "border-life-in-weeks-locations-san-francisco";
      case "big-city":
        return "border-life-in-weeks-locations-big-city";
      case "small-town":
        return "border-life-in-weeks-locations-small-town";
      case "metro-area":
        return "border-life-in-weeks-locations-metro-area";
      default:
        return "border-gray-300";
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const baseBoxClasses = `h-8 px-1.5 py-0.5 mx-0.5 my-0.5 rounded border-2 ${getBackgroundClass(doingClass)} ${getBorderClass(basedClass)} hover:opacity-90 transition-opacity duration-150 cursor-pointer`;

  let boxClasses = baseBoxClasses;

  if (type === "empty") {
    boxClasses += " w-8";
  } else {
    boxClasses +=
      " whitespace-nowrap text-xs font-medium text-life-in-weeks-blue";
  }

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className={boxClasses}
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        title={tooltip}
      >
        {label || ""}
      </button>

      {showTooltip && tooltip && (
        <div className="pointer-events-none absolute bottom-full left-1/2 z-[999] mb-2 -translate-x-1/2 transform">
          <div className="w-[250px] rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm shadow-lg">
            <div className="mb-1 font-semibold text-life-in-weeks-blue">
              {formatDate(date)}
            </div>
            <div className="whitespace-normal text-gray-600">{tooltip}</div>
            <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            <div className="absolute left-1/2 top-full mt-px h-0 w-0 -translate-x-1/2 transform border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-gray-200"></div>
          </div>
        </div>
      )}
    </div>
  );
}
