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

          <div className="flex items-center justify-center w-[80%] m-8 rounded-xl flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-700 to-neutral-400 dark:from-neutral-400 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Fitness Goals, <br /> Strength Unleashed.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-500 dark:text-neutral-100 text-center">
              Unlock your true potential with personalized fitness plans and
              expert guidance. Whether you’re aiming for strength, endurance, or
              flexibility, our team of professional trainers will help you reach
              your goals, totally free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[85%] mt-32">
            <div className="w-full p-6 bg-gray-900/40 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Fitness Program"
                width={40}
                height={40}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                Strength Training
              </h3>
              <p className="text-center text-sm mb-4">
                Build muscle and increase strength with our specialized strength
                training program designed for all fitness levels.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="p-4 bg-red-800 rounded-full hover:bg-red-600 ">
                  Join Now
                </Button>
                <Button className="p-4 border-red-800 border-2 bg-transparent rounded-full">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="w-full p-6 bg-white/5 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src="/yoga.jpg"
                alt="Fitness Program"
                width={40}
                height={40}
                quality={100}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                Yoga & Flexibility
              </h3>
              <p className="text-center text-sm mb-4">
                Improve your flexibility and reduce stress with our yoga program
                designed for beginners and experts alike.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="p-4 bg-red-800 rounded-full hover:bg-red-600 ">
                  Join Now
                </Button>
                <Button className="p-4 border-red-800 border-2 bg-transparent rounded-full">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="w-full p-6  bg-white/5 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src="/cardio.jpg"
                alt="Fitness Program"
                width={40}
                height={40}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                Cardio Fitness
              </h3>
              <p className="text-center text-sm mb-4">
                Boost your cardiovascular health and stamina with our dynamic
                cardio training program suitable for all fitness levels.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="p-4 bg-red-800 rounded-full hover:bg-red-600 ">
                  Join Now
                </Button>
                <Button className="p-4 border-red-800 border-2 bg-transparent rounded-full">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="w-full p-6  bg-gray-900/40 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src="/HIIT.webp"
                alt="Fitness Program"
                width={40}
                height={40}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                HIIT (High Intensity Interval Training)
              </h3>
              <p className="text-center text-sm mb-4">
                Maximize fat burn and endurance with our high-intensity interval
                training program tailored to your fitness level.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="p-4 bg-red-800 rounded-full hover:bg-red-600 ">
                  Join Now
                </Button>
                <Button className="p-4 border-red-800 border-2 bg-transparent rounded-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
