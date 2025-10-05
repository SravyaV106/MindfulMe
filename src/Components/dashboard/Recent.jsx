import React from "react";

const Recent = () => {
    const activities = [
        { id: 1, title: "Breathing exercise", time: "2 hours ago" },
        { id: 2, title: "Meditation", time: "5 hours ago" },
        { id: 3, title: "3-4-6 breathing", time: "1 day ago" },
    ];

    return (
        <div className="max-w-md mx-auto mt-6 space-y-4">
            <div className="flex flex-row items-center justify-center mt-5 mb-5 gap-2">
                <i class='bx bx-trophy-star text-4xl text-yellow-400'></i>
                <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">
                    Recent Activities
                </h3>
            </div>

            {activities.map((activity) => (
                <div
                    key={activity.id}
                    className="p-4 bg-yellow-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                    <h3 className="text-gray-800 font-semibold">{activity.title}</h3>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                </div>
            ))}
        </div>
    );
};

export default Recent;
