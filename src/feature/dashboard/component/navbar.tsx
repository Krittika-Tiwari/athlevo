import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MapPin, Bell } from "lucide-react"; // Import Bell and User icons
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <MapPin className="text-gray-400" />
        <span className="text-gray-400">India, Delhi</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Button className="w-10 h-10 flex items-center justify-center bg-dark-gray shadow-sm shadow-black rounded-full cursor-pointer">
            <Bell className="text-gray-300" />
          </Button>

          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </div>
        </div>

        <Avatar className="w-14 h-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
