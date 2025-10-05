import React from "react";

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-[#F0F71B] p-6 rounded-xl shadow-lg h-[200px]">
            {/* Left Section */}
            <div className="flex items-center justify-center">
                <div>
                    <i className="bx bx-calendar-alt text-4xl bg-gradient-to-r from-[#2597F7] to-[#00E6FA] bg-clip-text text-transparent"></i>
                </div>

            </div>
            <div className="max-w-md w-[400px] mx-auto text-center p-4">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#2597F7] to-[#00E6FA] bg-clip-text text-transparent mb-3">
                    Ready to journal today?
                </h1>
                <p className="text-gray-600 text-base leading-relaxed">
                    Share your thoughts and let AI provide personalized wellness insights.
                </p>
            </div>


        </div>
    );
};

export default Banner;
