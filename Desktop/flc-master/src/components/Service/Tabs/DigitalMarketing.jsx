import React from "react";
import ReactMarkdown from 'react-markdown';
const DigitalMarketing = ({ digitalMarketing }) => {
  const subServices =
    digitalMarketing &&
    digitalMarketing.attributes.sub_services.data.map((sub) => {
      return sub;
    });
  return (
    <div className="mt-16  font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        <div className="grid h-min max-w-md ">
          
          <h5 className="text-black text-4xl py-8 font-bold lowercase">
            {digitalMarketing?.attributes?.name}{" "}
          </h5>
          <div className="grid gap-y-6  h-min">
          <div className="xl:text-[14px] xxl:text-[25px]  xl:w-full text-gray-600 h-min md:w-[350px] ">
              {/* {marketing?.attributes?.description} */}
              <ReactMarkdown>{digitalMarketing?.attributes?.description}</ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="grid gap-y-8 h-min max-w-lg mx-auto">
          <div className="mt-8 invisible"></div>
          {subServices &&
            subServices.map((subService) => {
              return (
                <>
                  <div className="grid gap-y-4 max-w-lg mx-auto">
                    <h3 className="text-xl text-gray-800 font-bold">
                      {subService?.attributes?.name}
                    </h3>
                    <div className="xl:text-[14px] xxl:text-[25px]  xl:w-full text-gray-600 ">
                      <ReactMarkdown>{subService?.attributes?.description}</ReactMarkdown>
                    </div>
                  </div>
                  <hr className="border-t-1 border-gray-800 mt-2"></hr>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
