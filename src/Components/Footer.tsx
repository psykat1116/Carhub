"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/Constants/constant";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="CarHub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            &copy; {new Date().getFullYear()} CarHub, Inc. All rights reserved
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => {
            return (
              <div
                key={link.title}
                className="flex flex-col gap-6 text-base min-w-[170px]"
              >
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((item) => {
                  return (
                    <Link key={item.title} href={item.url}>
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 w-full max-lg:text-base">
          <p className="flex-1">
            &copy; {new Date().getFullYear()} Saikat Samanta. All Rights Reserve
          </p>
          <div className="flex-1 flex sm:justify-center justify-center max-sm:mt-4 gap-10 ml-6">
            <Link href="/" className="text-gray-500">
              Privacy policy
            </Link>
            <Link href="/" className="text-gray-500">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
