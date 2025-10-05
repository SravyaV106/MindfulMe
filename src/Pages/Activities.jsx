import {React,  useState } from 'react';
import Meditation from '../Components/activities/Meditation';
import Breathing from '../Components/activities/Breathing';
import Affirmation from '../Components/activities/Aff';

const Activities = () => {
  const [item, setItem] = useState("meditation");

  return (
    <div>
      <div className="flex flex-col items-center text-center px-6  mt-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Find Your Inner Peace
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Take a moment to breathe, center yourself, and cultivate mindfulness
          through guided exercises and meditation.
        </p>
      </div>
      <div className='Box'>
        <div className="container flex flex-row flex-wrap gap-4 h-[130px] w-[77.5vw] ml-10 mt-5">
          <div onClick={() => setItem("meditation")} className="flex-1 bg-purple-200 rounded-2xl flex items-center justify-center gap-2 text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
            <i className="bx bx-brain text-3xl"></i>
            Meditation
          </div>
          <div onClick={() => setItem("breathing")} className="flex-1 bg-blue-200 rounded-2xl flex items-center justify-center gap-2 text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
            <i className="bx bx-air text-3xl"></i>
            Breathing
          </div>
          <div onClick={() => setItem("affirmation")} className="flex-1 bg-green-200 rounded-2xl flex items-center justify-center gap-2 text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
            <i className="bx bx-clock text-3xl"></i>
            Daily Affirmation
          </div>
        </div>
      </div>
      <div className="mt-6">
        {item === "meditation" && <Meditation />}
        {item === "breathing" && <Breathing />}
        {item === "affirmation" && <Affirmation />}
      </div>
    </div>
  );
};

export default Activities;
