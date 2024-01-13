import Image from "next/image";
import React from "react";

import Link from "next/link";

const BoxComponent = ({ products }) => {
  const sortedProducts = products.slice().sort((a, b) => a.id - b.id);

  const firstImage = sortedProducts[0];
  const secondsImage = sortedProducts[1];
  const thirdImage = sortedProducts[2];

  return (
    // general box
    <div className=" w-full">
      <div
        className={` md:h-[500px] lg:h-[670px] xxl:h-[1050px]  font-inter ${
          products.length < 1 ? " bg-slate-200" : " bg-none"
        }`}
      >
        {products.length >= 3 && (
          <div className=" flex flex-col md:flex-row h-full border-l-2">
            <div className=" md:w-[40%] bg-blue-300 h-full">
              <div className="relative lg:w-[500px] xl:w-[610px] md:w-[420px]  xxl:w-[751.36px] flex h-full">
                <Image
                  // src={phoneImage}
                  src={firstImage?.attributes?.image?.data?.attributes?.url}
                  alt="Your Image"
                  width={1000}
                  height={1000}
                  className=" hover:cursor-pointer w-full object-top object-cover"
                />

                <div className="absolute inset-0 flex   bg-slate-900 bg-opacity-50 text-white p-5">
                  <div>
                    <p className=" md:mt-4 md:ml-4 font-small font-gothamMedium opacity-70 text-left">
                      featured // events
                    </p>
                    <h2 className=" text-xl md:w-[250px] xl:text-3xl xl:w-[450px] xxl:w-[510px] xxl:text-[45px] font-gothamBold md:mt-7 md:px-4">
                      {firstImage?.attributes?.name}
                    </h2>
                    <p className="md:mt-6  xxl:w-[420px] xxl:text-[18px] md:w-[280px] font-gothamMedium  opacity-75 text-sm ml-5  mr-10">
                      {firstImage?.attributes?.description}
                    </p>
                    <Link
                      href={{
                        pathname: "/internalCaseStudy",
                        query: { caseStudyId: firstImage?.id },
                      }}
                      className=" hover:cursor-pointer mt-2 inline-flex items-center opacity-75 gap-x-1.5 text-sm text-white decoration-2 ml-5 group-hover:underline font-gothamMedium"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile view  */}
            <div className=" md:hidden">
              <div className="w-full h-full bg-red-500 overflow-hidden flex flex-col md:flex-row">
                <div className="bg-blue-500 md:flex-grow">
                  <div className="h-full">
                    <div className="h-[45%] bg-orange-500 relative">
                      <div className=" w-full h-full">
                        <Image
                          src={
                            secondsImage?.attributes?.image?.data?.attributes
                              ?.url
                          }
                          alt="The Girl"
                          width={1000}
                          height={1000}
                          className=" w-full"
                        />
                      </div>
                    </div>

                    <div
                      className="flex-grow pt-80  hover:cursor-pointer"
                      style={{ backgroundColor: "#1B413E" }}
                    >
                      <h2 className="text-3xl font-gothamBold mt-[-300px] px-10 pt-5 text-white">
                        {secondsImage?.attributes?.name}
                      </h2>
                      <p className=" w-96 text-white font-gothamMedium px-10 pt-5">
                        {secondsImage?.attributes?.description}
                      </p>

                      <Link
                        href={{
                          pathname: "/internalCaseStudy",
                          query: { caseStudyId: secondsImage?.id },
                        }}
                      >
                        <span className=" w-96 px-10 font-gothamMedium hover:cursor-pointer  ">
                          Learn More
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" flex-grow">
                  <div className="h-full">
                    <div
                      className="flex-grow pt-72  hover:cursor-pointer text-white"
                      style={{ backgroundColor: "#964a2f" }}
                    >
                      <h2 className="text-4xl xxl:text-[65px] xxl:w-[309px] font-gothamBold mt-[-280px] w-48 px-10">
                        {thirdImage?.attributes?.name}
                      </h2>
                      <p className=" w-96 px-10 font-gothamMedium pt-5">
                        {thirdImage?.attributes?.description}
                      </p>
                      <Link
                        href={{
                          pathname: "/internalCaseStudy",
                          query: { caseStudyId: firstImage?.id },
                        }}
                      >
                        <span className=" w-96 px-10 font-gothamBold hover:cursor-pointer  ">
                          Learn More
                        </span>{" "}
                      </Link>
                    </div>
                    <div className="h-[45%] bg-black relative">
                      <div className="w-full ">
                        <Image
                          src={
                            thirdImage?.attributes?.image?.data?.attributes?.url
                          }
                          alt="The Girl"
                          width={1000}
                          height={1000}
                          className=" w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* desktop view  */}
            <div className=" hidden md:block bg-orange-200 w-[60%] h-full ml-5">
              <div className="w-full h-full bg-red-500 overflow-hidden flex flex-col md:flex-row">
                <div className="bg-blue-500 md:flex-grow">
                  <div className="h-full">
                    <div className="h-[45%] bg-orange-500 relative">
                      <div className=" w-full h-full">
                        <Image
                          // src={TheGirl}
                          src={
                            secondsImage?.attributes?.image?.data?.attributes
                              ?.url
                          }
                          alt="The Girl"
                          layout="fill"
                          className="object-top object-cover"
                        />
                      </div>
                    </div>

                    <div
                      className="h-[55%] pt-10 relative pl-8 md:pl-4 xl:pl-8"
                      style={{ backgroundColor: "#1B413E" }}
                    >
                      <div className=" absolute w-60  text-white">
                        <h2 className=" font-gothamBold text-3xl md:text-xl lg:text-3xl  ">
                          {secondsImage?.attributes?.name}
                        </h2>
                        <p className=" w-72 font-gothamMedium  pt-2 text-sm md:w-[195px] xl:w-[230px]">
                          {secondsImage?.attributes?.description}
                        </p>
                        <Link
                          href={{
                            pathname: "/internalCaseStudy",
                            query: { caseStudyId: secondsImage?.id },
                          }}
                        >
                          <span className=" w-72 mt-6 underline  font-gothamMedium hover:cursor-pointer  ">
                            Learn More
                          </span>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex-grow">
                  <div className="h-full">
                    <div
                      className="h-[55%]  pt-10 relative p-5"
                      style={{ backgroundColor: "#964a2f" }}
                    >
                      <div className=" absolute xl:w-60 md:w-[195px]  xl:ml-5 text-white">
                        <h2 className=" font-gothamBold text-4xl w-64">
                          {thirdImage?.attributes?.name}
                        </h2>
                        <p className=" pt-4 text-sm  font-gothamMedium opacity-75">
                          {thirdImage?.attributes?.description}
                        </p>
                        <Link
                          href={{
                            pathname: "/internalCaseStudy",
                            query: { caseStudyId: thirdImage?.id },
                          }}
                          className=" underline hover:cursor-pointer opacity-75  mt-2 inline-flex items-center gap-x-1.5 text-sm text-white decoration-2 group-hover:underline font-gothamMedium"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                    <div className="h-[45%] bg-black relative">
                      <div className="w-full ">
                        <Image
                          // src={Perfume}
                          src={
                            thirdImage?.attributes?.image?.data?.attributes?.url
                          }
                          // width={1000}
                          // height={1000}
                          alt="The Girl"
                          layout="fill"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoxComponent;
