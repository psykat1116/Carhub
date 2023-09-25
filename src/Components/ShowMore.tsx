"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types/types";
import CustomButton from "./CustomButton";
import { updateSearchParam } from "@/utils/carsapi";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParam("limit", `${newLimit}`);
    console.log(newPathName);
    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-blue-600 rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
