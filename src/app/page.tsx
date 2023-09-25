import React from "react";
import Home from "@/Components/Home";
import SearchBar from "@/Components/SearchBar";
import { getCars } from "@/utils/carsapi";
import CarCard from "@/Components/CarCard";
import { carProps, filterProps } from "@/types/types";
import CustomFilter from "@/Components/CustomFilter";
import ShowMore from "@/Components/ShowMore";
import { fuels, yearsOfProduction } from "@/Constants/constant";

const page = async ({
  manufacturer,
  year,
  fuel,
  limit,
  model,
}: filterProps) => {
  const Cars = await getCars({
    manufacturer: manufacturer || "",
    year: year || 2022,
    fuel: fuel || "",
    limit: limit || 15,
    model: model || "",
  });
  const isDataEmpty = !Array.isArray(Cars) || Cars.length < 1 || !Cars;
  return (
    <div className="min-h-screen">
      <Home />
      <div className="mt-12 sm:px-16 px-6 py-4" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="mt-12 flex w-full flex-between items center flex-wrap gap-5">
          <SearchBar />
          <div className="flex justify-between flex-wrap items-center gap-2 max-xl:justify-start">
            <CustomFilter title="fuel_type" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {Cars?.map((Car: carProps, ind: number) => {
                return <CarCard car={Car} key={ind} />;
              })}
            </div>
            <ShowMore
              pageNumber={(limit || 10) / 10}
              isNext={(limit || 10) > Cars.length}
            />
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl text-bold">Oops</h2>
            <p>Error</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
