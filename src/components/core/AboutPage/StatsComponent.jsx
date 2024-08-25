import React from "react";
import { useSelector } from "react-redux";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponenet = () => {
  const {darkMode} = useSelector((state) => state.mode);
  return (
    <div className={` mt-5 mb-10 border-2 w-[98.8%] text-center items-center flex justify-center rounded-lg
     ${darkMode ? `bg-richblack-700 border-blue-5`
     : "bg-pink-5"}`}>
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-x-5  mx-4 py-4 px-4 gap-30">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col py-10 justify-between hover:scale-125 cursor-pointer transition duration-300 ease-in-out " key={index} >
                <h1 className={`text-[30px] font-bold text-pink-200 ${darkMode ? "text-pink-200 ":"text-richblack-500"}`}>
                  {data.count}
                </h1>
                <h2 className="font-semibold text-[16px] text-caribbeangreen-300">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;