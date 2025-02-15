import React from "react";

const GoalSection: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-3xl shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Your Fitness Goals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Weight Loss Goal Card */}
        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">⚖️</span>
          </div>
          <h3 className="font-semibold text-lg text-blue-800">Weight Loss</h3>
          <p className="text-gray-600 text-sm mt-2">Lose 10 lbs in 2 months</p>
          <div className="mt-4">
            <div className="w-full bg-blue-100 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
            <p className="text-gray-500 text-xs mt-2">40% completed</p>
          </div>
        </div>

        {/* Strength Training Goal Card */}
        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🏋️</span>
          </div>
          <h3 className="font-semibold text-lg text-green-800">
            Strength Training
          </h3>
          <p className="text-gray-600 text-sm mt-2">Bench Press 100 lbs</p>
          <div className="mt-4">
            <div className="w-full bg-green-100 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <p className="text-gray-500 text-xs mt-2">60% completed</p>
          </div>
        </div>

        {/* Flexibility Goal Card */}
        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="bg-purple-100 text-purple-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🧘</span>
          </div>
          <h3 className="font-semibold text-lg text-purple-800">Flexibility</h3>
          <p className="text-gray-600 text-sm mt-2">Touch Toes in 6 Weeks</p>
          <div className="mt-4">
            <div className="w-full bg-purple-100 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
            <p className="text-gray-500 text-xs mt-2">30% completed</p>
          </div>
        </div>

        {/* General Fitness Goal Card */}
        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="bg-orange-100 text-orange-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">❤️</span>
          </div>
          <h3 className="font-semibold text-lg text-orange-800">
            General Fitness
          </h3>
          <p className="text-gray-600 text-sm mt-2">Run 5K in 30 Minutes</p>
          <div className="mt-4">
            <div className="w-full bg-orange-100 rounded-full h-2">
              <div
                className="bg-orange-600 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="text-gray-500 text-xs mt-2">75% completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSection;
