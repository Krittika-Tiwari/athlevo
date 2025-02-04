import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 relative z-10 bg-black/40 backdrop-blur-sm">
      <div className="text-2xl font-bold">
        <Link href="/">
          <span className="hover:text-gray-400 text-gray-300 transition-colors cursor-pointer relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gray-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
            Athlevo
          </span>
        </Link>
      </div>

      <div className="flex space-x-8 items-center">
        <Link href="/">
          <span className="text-lg hover:text-gray-400 text-gray-300 transition-colors cursor-pointer relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gray-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
            Home
          </span>
        </Link>
        <Link href="/workouts">
          <span className="text-lg hover:text-gray-400 text-gray-300 transition-colors cursor-pointer relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gray-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
            Workouts
          </span>
        </Link>
        <Link href="/nutrition">
          <span className="text-lg hover:text-gray-400 text-gray-300 transition-colors cursor-pointer relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gray-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
            Nutrition
          </span>
        </Link>
        <Link href="/about">
          <span className="text-lg hover:text-gray-400 text-gray-300 transition-colors cursor-pointer relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gray-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
            About Us
          </span>
        </Link>
        <Link href="/contact">
          <span className="text-lg hover:text-gray-400 text-gray-300 transition-colors cursor-pointer relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gray-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
            Contact
          </span>
        </Link>

        <Link href="/sign-in">
          <Button className=" font-semibold py-2 px-4 ml-10 rounded-lg transition duration-300">
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
};
