import axios from "axios";
import { filterProps } from "@/types/types";

export const getCars = async (filters: filterProps) => {
  const { manufacturer, year, fuel, limit, model } = filters;
  try {
    const response = await axios.request({
      method: "GET",
      url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}&model=${model}`,
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPIKEY,
        "X-RapidAPI-Host": process.env.RAPIDAPIHOST,
      },
    });
    const result = await response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParam = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
