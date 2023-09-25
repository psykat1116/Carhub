"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Home = () => {
  const handleScroll = () => {};

  return (
    <div className="relative flex xl:flex-row flex-col gap-5 max-w-[1440px] overflow-hidden">
      <div className="flex-1 pt-10 sm:px-16 px-6 ">
        <h1 className="2xl:text-[60px] sm:text-[50px] text-[40px] font-medium">
          Find, Book, or Rent any car - Quickly and Easily
        </h1>
        <p className="text-xl mt-5 max-md:text-lg">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="text-white rounded-full mt-10 bg-blue-700"
          handleClick={handleScroll}
        />
      </div>
      <div className="flex justify-end items-end w-full xl:h-screen xl:flex-[1.5] overflow-hidden">
        <div className="relative xl:w-full w-[50%] xl:h-full h-[590px] z-0 max-xl:h-[350px]">
          <Image src="/hero.png" alt="home" fill className="object-contain" />
        </div>
        <div className="absolute xl:-top-8 xl:-right-1/2 -right-1/4 bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden bg-hero-bg max-xl:h-[450px]" />
      </div>
    </div>
  );
};

export default Home;
