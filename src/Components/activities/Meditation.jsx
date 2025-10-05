import React, { useState, useEffect } from 'react';

const Meditation = () => {
    const [seconds, setSeconds] = useState(600); // time in seconds
    const [isRunning, setIsRunning] = useState(false);

    const durations = [5, 10, 15, 30, 45, 60];

    useEffect(() => {
        let timer;
        if (isRunning && seconds > 0) {
            timer = setInterval(() => {
                setSeconds(prev => prev - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsRunning(false);
        }

        return () => clearInterval(timer);
    }, [isRunning, seconds]);

    const formatTime = (sec) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    const handleStart = () => {
        if (seconds > 0) setIsRunning(true);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    const handleStop = () => {
        setIsRunning(false);
    }

    const handleSelectDuration = (minutes) => {
        setSeconds(minutes * 60);
        setIsRunning(false);
    };

    return (
        <div className="flex flex-row items-center justify-center mt-10">
            <div className="flex flex-col items-center justify-center w-[70%]">
                <h2 className="text-2xl font-bold mb-4">Meditation Timer</h2>

                <div className="flex flex-col items-center justify-center m-8">
                    <div className="h-[250px] w-[250px] m-4 rounded-full border-4 border-indigo-600 flex items-center justify-center text-4xl font-mono bg-gray-100">
                        {formatTime(seconds)}

                    </div>
                    <div>
                        <p>Ready to begin</p></div>
                </div>
                <div className="flex gap-4 mb-6">
                    <button
                        className="bg-indigo-600 text-white px-4 py-2 w-[100px]rounded hover:bg-indigo-700 transition"
                        onClick={isRunning ? handleStop : handleStart}
                        disabled={!isRunning && seconds === 0}
                    >
                        {isRunning ? "Stop" : "Start"}
                    </button>

                    <button
                        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div className="flex flex-col bg-yellow-200 p-20 rounded-xl items-center gap-6">
                <h2 className="text-2xl font-semibold text-gray-800">Select Timer</h2>

                <div className="grid grid-cols-2 gap-4">
                    {durations.map((d) => (
                        <button
                            key={d}
                            className={`w-28 h-14 rounded-xl shadow-md font-medium transition-all
          ${seconds === d * 60
                                    ? 'bg-green-500 text-white scale-105 shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'}
        `}
                            onClick={() => handleSelectDuration(d)}
                        >
                            {d} min
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Meditation;
