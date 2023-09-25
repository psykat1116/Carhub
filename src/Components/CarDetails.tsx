"use client";
import { cardetailsprops } from "@/types/types";
import React, { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

const CarDetails = ({ isOpen, car, closeModal }: cardetailsprops) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-ou duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full item-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-ou duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 sclae-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 shadow-xl flex-col gap-5 flex transition-all text-left">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 p-2 w-fit bg-blue-200 right-2 rounded-full z-10"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-co gap-3">
                    <div className="relative w-full h-40 bg-cover bg-center rounde-lg bg-pattern">
                      <Image
                        src="/hero.png"
                        alt="Car Image"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-xl font-semibold capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => {
                        return (
                          <div className="flex justify-between gap-5 w-full text-right">
                            <h4 className="text-[#232323] capitalize">
                              {key.split("_").join(" ")}
                            </h4>
                            <p className="text-black-100 font-semibold">
                              {value}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
