import React from 'react';

const Card = ({ days, data }) => {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      
      <div className="rounded-2xl shadow-lg p-5 text-gray-500 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Journal Streak</h3>
          <p className="text-2xl font-bold">{data.streak} days</p>
          <p className="text-sm opacity-80">{days}</p>
        </div>
        <div className="bg-white/20 p-3 rounded-full">
          <i className="bx bx-fire-alt text-3xl text-white bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-3"></i>
        </div>
      </div>

      <div className="rounded-2xl shadow-lg p-5 text-gray-500 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Average Mood</h3>
          <p className="text-2xl font-bold">{data.mood} / 10</p>
          <p className="text-sm opacity-80">{days}</p>
        </div>
        <div className="bg-white/20 p-3 rounded-full">
          <i className="bx bx-heart text-3xl text-white bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-3"></i>
        </div>
      </div>

      <div className="rounded-2xl shadow-lg p-5 text-gray-500 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Total Sleep</h3>
          <p className="text-2xl font-bold">{data.sleep} h</p>
          <p className="text-sm opacity-80">{days}</p>
        </div>
        <div className="bg-white/20 p-3 rounded-full">
          <i className="bx bx-calendar text-3xl text-white bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-3"></i>
        </div>
      </div>

      <div className="rounded-2xl shadow-lg p-5 text-gray-500 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Activities Done</h3>
          <p className="text-2xl font-bold">{data.activities}</p>
          <p className="text-sm opacity-80">{days}</p>
        </div>
        <div className="bg-white/20 p-3 rounded-full">
          <i className="bx bx-medal text-3xl text-white bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-3"></i>
        </div>
      </div>

    </div>
  );
};

export default Card;
