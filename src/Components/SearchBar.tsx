"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import SearchButton from "./SearchButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManuFacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      return "Please enter a manufacturer and model";
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="model"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
          }}
          placeholder="Tiguan"
          className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
