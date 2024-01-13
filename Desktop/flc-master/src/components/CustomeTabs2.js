import React, { useState } from "react";


const CustomeTabs2 = ({tabs,setTab}) => {
  

  return (
    <>
      <div className=" w-full mx-auto">
        <div className="flex md:justify-around md:items-center  gap-1 justify-center  md:gap-2 flex-wrap max-w-xl lg:flex-nowrap md:mx-auto lg:whitespace-nowrap">
          <button
            onClick={() => setTab("FMCG")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "FMCG"
                  ? ` text-sm md:text-lg xxl:text-[22px] text-gray-900 font-gothamBold whitespace-nowrap capitalize`
                  : ` text-sm md:text-lg xxl:text-[22px] text-gray-500 font-gothamBold whitespace-nowrap capitalize`
              }
            >
              FMCG
            </span>
          </button>
          <span>|</span>
          <button
            onClick={() => setTab("Electronics")}
            className="flex md:items-center md:justify-center font-gothamBold flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Electronics"
                  ? `  text-sm md:text-lg xxl:text-[22px] text-gray-900 font-gothamBold whitespace-nowrap capitalize`
                  : `  text-sm md:text-lg xxl:text-[22px] text-gray-500 font-gothamBold whitespace-nowrap capitalize`
              }
            >
              Electronics
            </span>
          </button>
          <span>|</span>
          <button
            onClick={() => setTab("Retail")}
            className="flex md:items-center font-gothamBold md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Retail"
                  ? `  text-sm md:text-lg xxl:text-[22px] font-gothamBold text-gray-900 whitespace-nowrap capitalize`
                  : `  text-sm md:text-lg xxl:text-[22px] font-gothamBold text-gray-500 whitespace-nowrap capitalize`
              }
            >
              Retail
            </span>
          </button>
          <span>|</span>
          <button
            onClick={() => setTab("Fashion")}
            className="flex md:items-center md:justify-center font-gothamBold flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Fashion"
                  ? `  text-sm md:text-lg xxl:text-[22px] font-gothamBold text-gray-900 whitespace-nowrap capitalize`
                  : `  text-sm md:text-lg xxl:text-[22px] font-gothamBold text-gray-500 whitespace-nowrap capitalize`
              }
            >
              Fashion & Lifestyle
            </span>
          </button>
          <span>|</span>

          <button
            onClick={() => setTab("Food")}
            className="flex md:items-center md:justify-center font-gothamBold flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Food"
                  ? `  text-sm md:text-lg xxl:text-[22px] font-gothamBold text-gray-900 whitespace-nowrap capitalize`
                  : `  text-sm md:text-lg xxl:text-[22px] font-gothamBold text-gray-500 whitespace-nowrap capitalize`
              }
            >
              Food & Beverage
            </span>
          </button>
          <span>|</span>

          <button
            onClick={() => setTab("Agency")}
            className="flex md:items-center md:justify-center font-gothamBold flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Agency"
                  ? `  text-sm md:text-lg xxl:text-[22px] text-gray-900 font-gothamBold whitespace-nowrap capitalize`
                  : `  text-sm md:text-lg xxl:text-[22px] text-gray-500 font-gothamBold whitespace-nowrap capitalize`
              }
            >
              Agency & Media
            </span>
          </button>
          <span>|</span>

          <button
            onClick={() => setTab("Luxury")}
            className="flex md:items-center md:justify-center font-gothamBold flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Luxury"
                  ? `  text-sm md:text-lg xxl:text-[22px] text-gray-900 font-gothamBold whitespace-nowrap capitalize`
                  : `  text-sm md:text-lg xxl:text-[22px] text-gray-500 font-gothamBold whitespace-nowrap capitalize`
              }
            >
              Luxury
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomeTabs2;
