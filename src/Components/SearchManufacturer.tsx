"use client";
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { manufacturers } from "@/Constants/constant";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturerProps } from "@/types/types";

const SearchManufacturer = ({
  manufacturer,
  setManuFacturer,
}: manufacturerProps) => {
  const [query, setQuery] = useState<string>("");
  const filteredManufacturers = manufacturers.filter((manufacturer) => {
    return query === ""
      ? manufacturer
      : manufacturer.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="company"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-[#f5f5f5] outline-none cursor-pointer text-sm"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="select-none py-2 pl-10 pr-4 cursor-pointer"
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((manufacturer) => {
                  return (
                    <Combobox.Option
                      key={manufacturer}
                      value={manufacturer}
                      className={({ active }) => {
                        return `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? "bg-blue-800 text-white" : "text-gray-900"
                        }`;
                      }}
                      onClick={() => setManuFacturer(manufacturer)}
                    >
                      {manufacturer}
                    </Combobox.Option>
                  );
                })
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
