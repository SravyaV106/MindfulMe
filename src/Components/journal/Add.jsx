import React, { useState } from 'react';

const Add = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [selectedMood, setSelectedMood] = useState(null);
  const [sleep, setSleep] = useState("");
  const [activity, setActivity] = useState("");

  const mood = [
    { '😔': 1 }, { '😟': 2 }, { '😕': 3 }, { '😐': 4 },
    { '🙂': 5 }, { '😊': 6 }, { '😃': 7 }, { '😄': 8 },
    { '😁': 9 }, { '🤩': 10 }
  ];

  const handleClick = (index) => setSelectedMood(index + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const moodEmoji = selectedMood ? Object.keys(mood[selectedMood - 1])[0] : null;

    onAdd({
      title,
      date,
      details,
      mood: moodEmoji,
      sleep,
      activity
    });

    // reset form
    setTitle("");
    setDate("");
    setDetails("");
    setSelectedMood(null);
    setSleep("");
    setActivity("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="w-full max-w-3xl mx-4 p-6 bg-white rounded-2xl shadow-2xl animate-fadeIn">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">Add Entry</h2>
            <span
              className="cursor-pointer text-gray-600 hover:text-red-500"
              onClick={onClose}
            >
              <i className="bx bx-x text-2xl"></i>
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="title" className="text-sm font-semibold text-gray-700">Enter Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="date" className="text-sm font-semibold text-gray-700">Date</label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="details" className="text-sm font-semibold text-gray-700">Give a description of your day</label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter details here..."
              className="w-full h-32 px-4 py-2 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <p className="text-sm font-semibold text-gray-700">Your mood today</p>
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              {mood.map((item, index) => {
                const emoji = Object.keys(item)[0];
                return (
                  <p
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`text-3xl cursor-pointer transition transform hover:scale-125 ${selectedMood === index + 1 ? "scale-125" : ""
                      }`}
                  >
                    {emoji}
                  </p>
                );
              })}
            </div>
            {selectedMood && (
              <span className="text-4xl font-bold text-gray-700 min-w-[30px] ml-20">
                {selectedMood}
              </span>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="sleep" className="text-sm font-semibold text-gray-700">Sleep Time (in Hrs)</label>
              <input
                id="sleep"
                type="text"
                value={sleep}
                onChange={(e) => setSleep(e.target.value)}
                className="w-full bg-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="activity" className="text-sm font-semibold text-gray-700">Activity (in mins)</label>
              <input
                id="activity"
                type="text"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full bg-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-200"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
