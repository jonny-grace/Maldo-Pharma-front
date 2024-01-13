// components/VideoBanner.js

import Link from "next/link";
import React from "react";

const VideoBanner = ({ videoLink, title, more }) => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className=" absolute inset-0 bg-black opacity-30"></div>
      <div
        className="absolute flex flex-col justify-center items-center mt-12"
        style={{ zIndex: 1 }}
       >
        <div className="text-center w-full flex xl:my-4 xxl:my-5 justify-center items-center">
          <h1 className="text-5xl text-white font-gothamBold xxl:text-[78px] xl:text-[70px] lg:text-[60px] md:text-[60px] lg:text-5xl text-center md:mx-56 lowercase slider-caption">
            {title}
          </h1>
        </div>
        <Link
          href="/casestudy"
          className="hover:cursor-pointer underline font-gothamBook text-white mt-2"
        >
          {more}
        </Link>
      </div>

      <video
        src={videoLink}
        type="video/mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover "
      >
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBanner;
