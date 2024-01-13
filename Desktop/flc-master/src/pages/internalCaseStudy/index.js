import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Carousel from "../../components/BottomCarousel/Carousel";
import VideoComponent from "../../components/VideoComponent";
import ReactMarkdown from "react-markdown";
const Index = ({ caseStudyDetails }) => {
  const youtubeUrl = caseStudyDetails.thumbnailUrl;

  return (
    <div className="md:mb-0 w-full ">
      <Navbar />
      <div>
        <div className=" max-h-3xl overflow-hidden">
          <div className="w-screen mb-24  xxl:max-w-6px relative ">
            <div className="absolute inset-0 h-96  bg-gray-200">
              <div className="w-screen relative">
                <div className="   absolute mx-4 inset-0 md:mx-14 xl:mx-28 xln:mx-32 xxl:mx-52 mt-36  h-full">
                  <div className=" w-full ">
                    <h1 className=" md:text-[33px] md:mb-5   font-gothamBold">
                      {caseStudyDetails?.name}
                    </h1>
                    <div className="  w-full h-[200px] md:h-[520px]    lg:h-[510px] xl:h-[600px] xln:h-[630px]  xxl:h-[1050px]   ">
                      <VideoComponent youtubeUrl={youtubeUrl} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto max-w-screen-xl px-4 py-48 md:py-40 xl:py-5  sm:px-6 lg:flex lg:justify-center md:mb-[400px] xl:mb-[780px] xnl:[1020px] xxl:mb-[1040px] lg:items-center lg:px-3"></div>
          </div>
        </div>
        <div className="hidden xl:flex justify-center xxl:mt-0 opacity-0">b</div>
        <div className=" lg:mt-[-130px] xl:mt-[-100px]  xxl:mt-[-30px]">
          <div className=" mx-2 md:mx-16 lg:mx-14 xl:mx-28 xxl:mx-52 xln:mx-32 mb-20 xl:mt-56  md:mb-0">
            <div className="flex flex-col sm:flex-row gap-8 xln:gap-3  md:mt-40  xl:mt-[-190px]">
              <div className="  mt-4 lg:w-[650px] xl:w-[750px] xl:text-[14px] xxl:text-[25px]  text-gray-600 font-gothamBook  xln:w-[850px] xxl:w-[1200px]  md:pr-20 sm:w-3/4 flex flex-col gap-2">
                <ReactMarkdown>{caseStudyDetails.overview}</ReactMarkdown>
              </div>
              <div className="md:w-[250px] xxl:ml-10  mt-5">
                <h2 className="text-2xl xxl:text-3xl font-gothamBook">
                  {caseStudyDetails.sideText}
                </h2>
              </div>
            </div>
            <div className="mx-auto mt-28  w-full mb-10">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const { caseStudyId } = context.query;
  const apiUrl = process.env.APIURL;
  var caseStudyDetails = {};

  await axios
    .get(`${apiUrl}/products/${caseStudyId}?populate=*`)

    .then((res) => {
      caseStudyDetails = res.data.data.attributes;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return {
    props: {
      caseStudyDetails,
    },
  };
}
