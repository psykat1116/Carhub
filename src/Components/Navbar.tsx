"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full relative bg-transparent">
      <div className="max-w-[1440px] max-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="CarHub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-blue-600 rounded-full bg-white min-w-[30px]"
        />
      </div>
    </header>
  );
};

export default Navbar;
