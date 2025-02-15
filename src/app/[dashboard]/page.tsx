import { Navbar } from "@/feature/dashboard/component/navbar";
// import GoalSection from "@/feature/dashboard/detail-section";
// import Detailsection from "@/feature/dashboard/detail-section";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="bg-dark-gray-2 w-full h-screen flex">
      <div className="w-2/12 rounded-r-3xl h-full bg-dark-gray">
        <div className="text-2xl font-bold w-full flex justify-center items-center mt-4">
          <Link href="/">
            <span className="hover:text-gray-400 pt-8 text-gray-300 transition-colors cursor-pointer relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gray-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
              Athlevo
            </span>
          </Link>
        </div>
      </div>
      <div className="w-6/12 h-full">
        <Navbar />
        {/* <GoalSection /> */}
        <div className=" p-8">
          {/* Goal Overview */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-300 mb-4">
              Your Fitness Goals
            </h2>
            <div className="bg-dark-gray p-6 rounded-3xl shadow-md">
              <p className="text-gray-600">Lose 10 lbs in 2 months</p>
              <div className="mt-4">
                <div className="w-full bg-blue-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <p className="text-gray-500 text-xs mt-2">40% completed</p>
              </div>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                Adjust Goal
              </button>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="">
            <h2 className="text-xl font-bold text-gray-300 mb-4">
              Progress Over Time
            </h2>
            <div className="bg-dark-gray  p-6 rounded-3xl shadow-md">
              <div className="h-64 bg-dark-gray-2 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Line Graph Placeholder</p>
              </div>
              <div className="mt-4 flex space-x-4">
                <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                  Weight
                </button>
                <button className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  Reps
                </button>
                <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                  Steps
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="w-4/12   bg-dark-gray mr-6 mt-4 mb-4 rounded-xl p-4">
        {" "}
        {/* Recent Activity */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-300 mb-4">
            Recent Activity
          </h2>
          <div className="bg-white p-6 rounded-3xl shadow-md">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  🏃‍♂️
                </div>
                <div>
                  <p className="text-gray-800">Logged 10,000 steps today</p>
                  <p className="text-gray-500 text-sm">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  🏋️
                </div>
                <div>
                  <p className="text-gray-800">Completed 30-minute run</p>
                  <p className="text-gray-500 text-sm">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Achievements & Rewards */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-300 mb-4">Achievements</h2>
          <div className="bg-dark-gray-2 p-6 rounded-3xl shadow-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-4 rounded-3xl flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                  🏅
                </div>
                <p className="text-blue-800">5 Workouts Completed</p>
              </div>
              <div className="bg-green-100 p-4 rounded-3xl flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                  🏆
                </div>
                <p className="text-green-800">Consistency Champion</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                100/500 points to next reward
              </p>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">
              View Rewards
            </button>
          </div>
        </section>
        {/* Motivational Messages */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-300 mb-4">Keep Going!</h2>
          <div className="bg-dark-gray-2 p-6 rounded-3xl shadow-md">
            <p className="text-gray-300">
              You’ve lost 4 lbs so far — keep going!
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">
              Share Progress
            </button>
          </div>
        </section>
        {/* Suggested Next Steps */}
        {/* <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">What’s Next?</h2>
          <div className="bg-white p-6 rounded-3xl shadow-md">
            <p className="text-gray-800">
              Now that you’ve lost 5 lbs, let’s aim for fat loss and endurance!
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">
              Set New Goal
            </button>
          </div>
        </section> */}
      </div>
    </div>
  );
}
