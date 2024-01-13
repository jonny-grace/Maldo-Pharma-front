import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import BlogSlide from "../../components/BottomCarousel/BlogSlide";

const index = ({caseStudyDetails}) => {
  
  return (
    <div className=" mx-5 overflow-x-hidden ">
      <Navbar />
      <div className=" overflow-x-hidden   md:mx-32 mt-32 mb-10 font-inter">
        <div>
          <Image
            src={caseStudyDetails.attributes.thumbnail.data.attributes.url}
            alt="banner image"
            width={1000}
            height={1000}
            className=" w-full  h-48 md:h-[500px] xxl:h-[800px] object-cover mt-10"
          />
        </div>
        <div className=" mt-14 ">
          <div className=" xl:text-[14px] xxl:text-[25px]  xl:w-full font-gothamMedium text-gray-600 opacity-80">
            <ReactMarkdown>{caseStudyDetails.attributes.blog_type.data.attributes.name}</ReactMarkdown>
          </div>

          <div className="text-3xl font-gothamBold my-3">
            <ReactMarkdown>{caseStudyDetails.attributes.title}</ReactMarkdown>
          </div>
          <div className=" xl:text-[14px] xxl:text-[25px]  xl:w-full font-gothamMedium text-gray-600 opacity-80">
            {caseStudyDetails?.attributes?.createdBy?.data?.attributes?.firstname} {caseStudyDetails?.createdBy?.data?.attributes?.lastname}
          </div>
        </div>

        <div className="my-8 mb-20 ">
          <div className="xl:text-[14px] xxl:text-[25px]  xl:w-full text-gray-600 font-gothamBook opacity-78 ">
            <ReactMarkdown>
              {caseStudyDetails.attributes.description}
            </ReactMarkdown>
          </div>
        </div>
        <BlogSlide currentBlog={caseStudyDetails.id}/>
        
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { title } = context.query;
  const apiUrl = process.env.APIURL;
  var caseStudyDetails = {};
  var blogsTemp={}

  await axios
    .get(`${apiUrl}/blogs/?populate=*`)

    .then((res) => {
       blogsTemp = res.data.data;
      
    })
    .catch((err) => {
      console.log(err.message);
    });

    for (const blog of blogsTemp) {
      if (blog.attributes.title === title) {
        caseStudyDetails = blog;
        break; // Stop the loop once a match is found
      }
    }

  return {
    props: {
      caseStudyDetails,
    },
  };
}
