import React, { useState, useRef } from "react";
import "react-tabs/style/react-tabs.css";

import IntegratedTabContent from "./IntegratedTabContent";

import rightArrow from '../../public/assets/rightArrow.png';
import leftArrow from '../../public/assets/leftArrow.png';
import Image from "next/image";


const GaleryTab = ({ products }) => {
  let Integrated=[]
  let FMCG=[]
  let FandB=[]
  let Electronics=[]
  let FashionandStyle=[]
  let enabledProducts=[]
  products && products?.map((pr)=>{
    const productType=pr?.attributes?.product_type?.data?.attributes?.name;
    

    if(pr?.attributes?.showInHomePage){
      enabledProducts.push(pr)
      if(productType=='Integrated'){
        Integrated.push(pr)
      } else if(productType=='FMCG'){
        FMCG.push(pr)
      }
      else if(productType=='F&B'){
        FandB.push(pr)
      }
      else if(productType=='Electronics'){
        Electronics.push(pr)
      }
      else if(productType=='Fashion and style'){
        FashionandStyle.push(pr)
      }
    }
   
  })
  
  const contentRef = useRef(null);
  const [opacityChecker,setOpacityChecker]= useState(false);
  const tabsItems = [

    "Integrated",
    "FMCG",
    "Electronics",
    "Fashn & Lifestyle",
    "Food & Beverage",
  ];

  const [tabs, setTab] = useState("Integrated");

  const handleLeft = (tab) => {
    for (let i = 0; i < tabsItems.length; i++) {
      if (tabsItems[i] === tab) {
        if (i === 0) {
          setTab(tabsItems[i]);
        } else {
          setTab(tabsItems[i - 1]);
        }
      }
    }
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleRight = (tab) => {
    for (let i = 0; i < tabsItems.length; i++) {
      if (tabsItems[i] === tab) {
        if (i === tabsItems.length - 1) {
          setTab(tabsItems[i]);
        } else {
          setTab(tabsItems[i + 1]);
        }
      }
    }
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" flex flex-col  mx-2  md:mx-16 font-inter" ref={contentRef}>
      <div className="w-full mx-auto ">
        <div className="flex md:justify-evenly md:items-center gap-2 justify-center mx-10 flex-wrap max-w-3xl md:mx-auto lg:flex-nowrap">
          <button
            onClick={() => setTab("Integrated")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Integrated"
                  ? ` text-sm md:text-lg xxl:text-[22px] text-black font-gothamBold whitespace-nowrap capitalize`
                  : ` text-sm md:text-lg xxl:text-[22px] text-gray-500 font-gothamBold whitespace-nowrap capitalize`
              }
            >
              Integrated
            </span>
          </button>
          <button>|</button>
          <button
            onClick={() => setTab("FMCG")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "FMCG"
                  ? ` text-sm md:text-lg xxl:text-[22px]   text-black font-gothamBold  whitespace-nowrap capitalize`
                  : ` text-sm md:text-lg xxl:text-[22px]  text-gray-500 font-gothamBold whitespace-nowrap capitalize`
              }
            >
              FMCG
            </span>
          </button>
          <button>|</button>

          <button
            onClick={() => setTab("Electronics")}
            className="flex md:items-center md:justify-center font-gothamBold flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Electronics"
                  ? ` text-sm md:text-lg xxl:text-[22px] text-black font-gothamBold  whitespace-nowrap capitalize`
                  : ` text-sm md:text-lg xxl:text-[22px] text-gray-500 font-gothamBold whitespace-nowrap capitalize`
              }
            >
              Electronics
            </span>
          </button>
     {/*      <button>|</button>

          <button
            onClick={() => setTab("Fashn & Lifestyle")}
            className="flex md:items-center md:justify-center font-gothamBold flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Fashn & Lifestyle"
                  ? ` text-sm md:text-lg xxl:text-[22px] text-black font-gothamBold  whitespace-nowrap capitalize`
                  : ` text-sm md:text-lg xxl:text-[22px] text-gray-500 font-gothamBold whitespace-nowrap capitalize`
              }
            >
              Fashion & Lifestyle
            </span>
          </button>
          <button>|</button> */}
          {/* <button
            onClick={() => setTab("Food & Beverage")}
            className="flex md:items-center md:justify-center flex-col font-gothamBold md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Food & Beverage"
                  ? ` text-sm md:text-lg xxl:text-[22px] text-black font-gothamBold  whitespace-nowrap capitalize`
                  : ` text-sm md:text-lg xxl:text-[22px] text-gray-500 font-gothamBold whitespace-nowrap capitalize`
              }
            >
              Food & Beverage
            </span>
          </button> */}
        </div>
      </div>
      <section className="w-full mt-8 " ref={contentRef}>
        <div>{tabs === "Integrated" ? <IntegratedTabContent products={Integrated} /> : null}</div>
        <div>{tabs === "FMCG" ? <IntegratedTabContent products={FMCG} /> : null}</div>
        <div>{tabs === "Electronics" ? <IntegratedTabContent products={Electronics} /> : null}</div>
        <div>
          {tabs === "Fashn & Lifestyle" ? <IntegratedTabContent products={FashionandStyle} /> : null}
        </div>
        <div>
          {tabs === "Food & Beverage" ? <IntegratedTabContent products={FandB} /> : null}
        </div>
      </section>
      <div className="flex justify-end xxl:mx-24  gap-3 mt-5">
        <button
          className="flex justify-center items-center opacity-50 hover:opacity-100  h-9 w-9 border-[2px] rounded-full hover:border-2 hover:border-gray-600"
          onClick={() => handleLeft(tabs)}
        >
          <span className="text-gray-600">
            {/* <LeftArrow /> */}
            <Image  alt='' src={leftArrow} width={1000} height={1000} className={` w-7 h-7`} />
          </span>
        </button>
        <button
          className="flex justify-center items-center opacity-50 hover:opacity-100 h-9 w-9 border-[2px] rounded-full hover:border-2 hover:border-gray-600"
          onClick={() => handleRight(tabs)}
        >
          <span className="text-gray-600">
          <Image alt="" src={rightArrow} width={1000} height={1000} className="w-6 h-7" />
            {/* <RightArrow /> */}
          </span>
        </button>
      </div>
    </div>
  );
};

export default GaleryTab;
