"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full m-0 ">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Strength Training",
    title: "Build muscle with the right exercises.",
    src: "https://media.istockphoto.com/id/1272820245/photo/the-visually-impaired-holding-dumbbell-in-hand-and-squart-doing-exercise-for-buit-muscle-fit.jpg?s=612x612&w=0&k=20&c=TgChypcmBR4xYd8bNkAI93M7cvGMPqxY2d9RvdH6E_Y=",
  },
  {
    category: "Cardio Workouts",
    title: "Boost endurance with effective cardio.",
    src: "https://images.pexels.com/photos/6388395/pexels-photo-6388395.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6388395.jpg&fm=jpg",
  },
  {
    category: "Weightlifting",
    title: "Master the perfect deadlift form.",
    src: "https://hips.hearstapps.com/hmg-prod/images/young-muscular-build-athlete-exercising-strength-in-royalty-free-image-1706546541.jpg?crop=0.668xw:1.00xh;0.107xw,0&resize=640:*",
  },
  {
    category: "Home Workouts",
    title: "Get fit from the comfort of your home.",
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    category: "Yoga & Flexibility",
    title: "Improve flexibility with daily yoga.",
    src: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Strength & Conditioning",
    title: "Enhance performance with functional training.",
    src: "https://sbdireland.com/cdn/shop/articles/Perfecting_the_Deadlift_Form__Gym_Guide.png?v=1717670375",
  },
];
