import React from "react";

const Banner = () => {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);
  return (
    <div className="flex flex-row items-center justify-between bg-[#F0F71B] p-6 rounded-xl shadow-lg">
    
      <div className="max-w-md">
        
      <div class='flex flrx-row gap-2'><i class='bx  bx-sparkles-alt'></i><p>{today}</p> </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back to your wellness journey
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Start your day with mindful reflection. Write about your thoughts,
          feelings, and goals to track your mental wellness journey.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-r from-[#2597F7] to-[#00E6FA] p-5 rounded-3xl shadow-md">
          <i className="bx bxs-florist text-white text-3xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Banner;
