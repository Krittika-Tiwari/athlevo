import type { Metadata } from "next";
import { Navbar } from "@/feature/site/component/navbar";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { AppleCardsCarouselDemo } from "@/feature/site/component/image-section";

export const metadata: Metadata = {
  title: "Athlevo",
  description: "landing page for Athlevo",
};

export default function Home() {
  return (
    <div className="bg-gray-950">
      <div className="relative w-full h-[calc(100vh)]">
        <div className="absolute inset-0">
          <Image
            src="/background.jpg"
            alt="Athlevo"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>

        <Navbar />

        <div className="absolute left-24 top-1/2 transform -translate-y-1/2 text-gray-300 space-y-6">
          <p className="text-xl font-semibold text-gray-400 ">
            Get Fit. Stay Healthy. Live Better
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight max-w-xl ">
            Elevate Your Fitness
            <br />
            Game, One Step
            <br />
            Forward
          </h1>

          <div className="flex gap-4">
            <Button className="p-4 bg-red-800 rounded-full hover:bg-red-600 ">
              Get Started
            </Button>
            <Button className="p-4 border-red-800 border-2 bg-transparent rounded-full">
              Dashboard
            </Button>
          </div>
        </div>
      </div>
      <div className=" w-full  bg-gray-950">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 p-8">
          <AppleCardsCarouselDemo />
        </div>
      </div>
    </div>
  );
}
