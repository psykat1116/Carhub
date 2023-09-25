"use client";
import React from "react";
import Image from "next/image";
import { buttonProps } from "@/types/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  isDisabled,
  rightIcon,
}: buttonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`px-5 py-2 ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right arrow"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
