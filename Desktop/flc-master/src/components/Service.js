import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["cyrillic"], weight: ["400"] });
import ReactMarkdown from 'react-markdown';
const Service = ({ serviceSection, services }) => {
  function getColorByIndex(index) {
    switch (index) {
      case 0:
        return "#E20423";
      case 1:
        return "#AE127E";
      case 2:
        return "#006BB2";
      case 3:
        return "#55bf0f";
      default:
        return "";
    }
  }
  return (
    <div className="mb-16 xl:mb-32 xxl:mb-48">
    <div className="md:max-w-[80rem] px-4 m-5  lg:px-16 lg:pt-8 mx-auto">
      <div className="font-bold justify-center items-center text-center ">
        
        <div className=" text-center w-full flex xl:my-4 xxl:my-2 justify-center">
          <h1 className="text-5xl font-gothamBold xxl:text-[78px] xl:text-[70px] lg:text-[60px] md:text-[60px] xxl:w-[400px]  xl:w-[380px] lg:text-5xl  text-center w-96 md:mx-56 lowercase">
            {serviceSection?.title}
          </h1>
        </div>
      </div>
      <div className=" flex justify-center text-center ">

        <div className="mt-14 font-gothamBook md:text-lg lg:text-xl xxl:text-[26.63px]   md:text-center   md:mx-40 xxl:mx-24 text-gray-800">
         
         {serviceSection && <ReactMarkdown>{serviceSection?.desc}</ReactMarkdown>}

        </div>
      </div>
      
      
</div>
<div className=" flex justify-center ">
<div className=" xl:w-[1100px] xln:w-[1200px] xxl:w-[1600px] py-8 ">
        <div className="grid sm:grid-cols-1   md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-2 xxl:gap-7 mt-10 ">
        {services &&
          services.map((service, index) => {
            return (
              <div key={index} className="h-80  md:h-84 px-10 md:px-0  rounded-xl ">
                <Link
                  className="group flex flex-col justify-center gap-4 items-center md:justify-start md:items-start p-4 md:p-7"
                  href="/services"
                >
                  <div className=" w-full  py-4 flex ">
                    <div className=" h-28 xxl:h-64 mb-3 flex flex-col ml-5">
                      <Image
                        src={service?.attributes?.image?.data?.attributes?.url}
                        alt="Your Image"
                        width={1000}
                        height={1000}
                        className="w-full h-full "
                      />
                    </div>
                  </div>

                  <div className="h-40 xxl:w-[236px]  lg:w-[180px] ">
                    <h3
                      className=" xxl:text-[18px]  font-gothamBold"
                      style={{ color: getColorByIndex(index) }}
                    >
                      {service.attributes.name}
                    </h3>
                    <p className={` text-sm mt-3 font-gothamBook text-gray-800 `}>
                      <span >
                        {service.attributes.description}
                      </span>
                    </p>
                    <span className="mt-2 inline-flex items-center font-gothamBook gap-x-1.5 text-sm  decoration-2 hover:underline font-small text-gray-700">
                      Learn more
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
      </div></div>
    </div>
    </div>
  );
};

export default Service;
