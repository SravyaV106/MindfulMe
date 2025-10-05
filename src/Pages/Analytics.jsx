import React, { useState } from 'react';
import AIanalysis from '../Components/analytics/AIanalysis';
import Card from '../Components/analytics/Card';

const Ansalysis = ({ data }) => {
  const [days, setDays] = useState("Last 7 days");
  
  const selectedData = data.find((item) => item.label === days) || {};

  return (
    <div className="p-6 w-[77.5vw] mx-auto flex flex-col items-center ml-10 justify-center">
      <h1 className="text-4xl font-bold text-indigo-700 mb-3 text-center">
        Your Mental Health Journey
      </h1>

      <p className="text-gray-600 mb-6 text-center max-w-xl">
        Track your progress, identify patterns, and celebrate your growth with detailed insights from your wellness data.
      </p>

      <div className="w-[77.5vw] p-6 bg-purple-50 rounded-2xl shadow-md">
        <div className="flex flex-row gap-3 items-center justify-center">
          {["Last 7 days", "Last 30 days", "Last 90 days"].map(period => (
            <button
              key={period}
              onClick={() => setDays(period)}
              className={`px-4 py-2 rounded-xl border transition-all
                ${days === period 
                  ? "bg-purple-600 text-white border-purple-600" 
                  : "text-purple-700 bg-white border-purple-300 hover:bg-purple-100"}`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white w-[77.5vw] p-6">
        <Card days={days} data={selectedData} />
      </div>

      <div className="bg-white w-[77.5vw] p-6">
        <AIanalysis />
      </div>
    </div>
  );
};

export default Ansalysis;
