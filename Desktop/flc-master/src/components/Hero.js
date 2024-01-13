import Image from "next/image";
import Link from "next/link";
import React from "react";



const Hero = ({ title,banner }) => {
 
  return (
    <section
      className={`  relative w-full bg-cover bg-center bg-no-repeat font-inter h-[47vw] md:h-[57vw]  `}
    >
      <div className="absolute  inset-0">
        <Image
          src={banner?.attributes?.url}
          width={1000}
          alt=""
          height={1000}
          className=" w-full object-cover  h-[53vw] "
        />
      </div>

      <div className="relative mx-auto max-w-screen-xl pt-24 md:pt-40 flex justify-center sm:px-6 lg:flex md:flex md:justify-center md:items-center lg:justify-center lg:h-full lg:items-center lg:px-8">
        <div className=" w-64 mt-[-5vh] lg:mt-[-10vh] xl:mt-[-15vh] xxl:mt-0 text-center lg:w-[444px] xl:w-[544px] xxl:w-[544px]  text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl   xxl:font-semibold xl:text-[90px] font-inter font-gothamBold  lowercase">
            {title}
          </h1>

          <div className="flex flex-wrap -mt-2  text-center ">
            <Link
              href="#"
              className="block w-full text-[16px] md:text-[24px]  font-normal px-12 py-3  underline text-white shadow  focus:outline-none focus:ring active:font-bold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
