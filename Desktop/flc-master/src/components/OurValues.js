import Image from "next/image";
import React from "react";

const SmallCard = ({ icon, title, description }) => {
  return (
    <div className=" text-white p-4 mb-4 w-96  mt-4 pl-8 lg:w-72 ">
      <div className="text-2xl h-full">
        <Image
          src={icon.url}
          alt={title}
          width={icon.width}
          height={icon.height}
          className="h-[82px]  object-contain"
        />
      </div>
      <div className="h-max mt-3">
      <h3 className="md:text-lg text-3xl mb-1 font-gothamBook">{title}</h3>
        <p className="text-sm  w-48 md:w-36  font-gothamBook">{description}</p>
      </div>
    </div>
  );
};

const SmallCardList = ({ title, values }) => {
  return (
    <div
      className="px-5 max-w-7px md:mx-7  md:p-14 gap-5 mb-10 font-inter p-5 "
      style={{ background: "#66b3ff" }}
    >
      <div className="ml-12 md:ml-0">
      <h1 className="mt-5 pt-3  md:text-2xl font-bold font-gothamBold text-4xl pl-8">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center  ">
        {values &&
          values.map((item, index) => (
            <div className="w-full  " key={index}>
              <SmallCard
                icon={item.attributes.image.data.attributes}
                title={item.attributes.name}
                description={item.attributes.description}
              />
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default SmallCardList;
