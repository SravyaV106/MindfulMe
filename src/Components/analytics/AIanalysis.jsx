import React from 'react';

const AIanalysis = () => {
  return (
    <div className="p-6 space-y-8">
    <div className="flex flex-col items-center justify-between p-6 rounded-2xl shadow-md">
      <div className="flex flex-row w-full items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-2xl shadow-md">
        <div className="flex items-center gap-3">
          <i className="bx bx-sparkles-alt text-yellow-600 text-3xl"></i>
          <h1 className="text-2xl font-bold text-gray-800">
            AI-Powered Wellness Summary
          </h1>
        </div>
        <button className="mt-4 md:mt-0 px-5 py-2 rounded-xl bg-yellow-600 text-white font-medium hover:bg-yellow-700 transition">
          Generate Report
        </button>
      </div>

      <div className="flex flex-col items-center justify-between gap-6 mt-20 mb-20">
        <div className="flex items-start">
          <i className="bx bx-light-bulb text-yellow-500 text-4xl"></i>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Insights Just for You
          </h2>
        </div>
        <div>
          <p className="text-gray-600 leading-relaxed">
            Get personalized insights and recommendations based on your wellness <br />
            data, helping you make informed decisions for a healthier mind and
            body.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AIanalysis;
