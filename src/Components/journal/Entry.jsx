import React from "react";
import { Smile, Moon, Activity } from "lucide-react"; // icons

const Entry = ({ date,title, details, mood, sleep, activity }) => {
  // Fallback: today's date if none passed
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className=" p-5 rounded-2xl shadow-lg w-[77.5vw] h-[200px] mb-6 transition-transform hover:scale-[1.01] flex flex-col justify-between">
      <div>
        <p className="text-gray-400 text-sm font-medium mb-2">{date || today}</p>
        <p className="text-gray-900 text-xl font-medium mb-2">{title}</p>
        <p className="text-gray-800 text-base leading-relaxed line-clamp-3">
          {details}
        </p>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-700 mt-3">

        <div className="flex items-center gap-1">
          <Smile size={16} className="text-yellow-500" />
          <span className="font-semibold">Mood:</span>
          <span>{mood}</span>
        </div>

        <div className="flex items-center gap-1">
          <Moon size={16} className="text-indigo-500" />
          <span className="font-semibold">Sleep:</span>
          <span>{sleep}</span>
        </div>

        <div className="flex items-center gap-1">
          <Activity size={16} className="text-green-500" />
          <span className="font-semibold">Activity:</span>
          <span>{activity}</span>
        </div>
      </div>
    </div>
  );
};

export default Entry;


