import React from "react";

const Card = ({ heading, para, count, icon }) => {
  return (
    <div className="relative w-[590px] h-[140px] p-5 rounded-2xl shadow-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200 
      hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-6">
      
     
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-3xl shadow-md">
        {icon}
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <h2 className="font-bold text-lg text-gray-800">{heading}</h2>
        <p className="text-gray-500 text-sm mt-1">{para}</p>
      </div>

      <div className="flex items-center justify-center min-w-[60px]">
        <span className="text-2xl font-extrabold text-indigo-600">{count}</span>
      </div>
    </div>
  );
};

export default Card;
