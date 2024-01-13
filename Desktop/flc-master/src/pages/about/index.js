import React from "react";
import Navbar from "../../components/Navbar";
import OurValues from "../../components/OurValues";
import Image from "next/image";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import JoinOurTeam from "../../components/JoinOurTeam";
import Timeline from "../../components/Service/Timeline";

const index = ({ about, values }) => {
  return (
    <div className=" overflow-x-hidden ">
      <Navbar />
      <div className=" overflow-x-hidden   md:mx-32 mt-32 mb-10 font-inter">
        <div className=" ">
          <div className="text-4xl ml-6 md:ml-6 font-gothamBold mb-10">
            <ReactMarkdown>{about.title}</ReactMarkdown>
          </div>
          <div className=" xl:text-[14px] xxl:text-[25px] mx-7 md:mx-0  xl:w-full text-gray-600 font-gothamBook opacity-80">
            <ReactMarkdown>{about.descriptionOne}</ReactMarkdown>
          </div>
        </div>
        <div>
          <Image
            src={about?.image?.data.attributes.url}
            alt="banner image"
            width={1000}
            height={1000}
            className=" w-full  h-48 md:h-[500px] xxl:h-[800px] object-cover mt-10"
          />
        </div>
        <div className="my-8 mb-10 ">
          <div className="xl:text-[14px] xxl:text-[25px] mx-7 md:mx-0  xl:w-full text-gray-600 font-gothamBook opacity-78">
            <ReactMarkdown>{about.descriptionTwo}</ReactMarkdown>
          </div>
        </div>
        <div className=" sm:py-10 px-2 ">
          <Timeline />
          <div className="flex  md:gap-5 xxl:w-[1425.87px] xl:w-[840] mx-7 lg:mx-28 justify-center ">
          </div>
        </div>
      </div>
      <OurValues title={about.value} values={values} />
      <JoinOurTeam />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  var about = {};
  var values = {};
  var awards = {};
  const apiUrl = process.env.APIURL;
  await axios
    .get(`${apiUrl}/about?populate=*`)

    .then((res) => {
      about = res.data.data.attributes;
    })
    .catch((err) => {
      console.log(err.message);
    });

  
  await axios
    .get(`${apiUrl}/values?populate=*`)
    .then((res) => {
      values = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  await axios
    .get(`${apiUrl}/awards?populate=*`)
    .then((res) => {
      awards = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return {
    props: {
      about,
      values,
      awards,
    },
    revalidate: 10,
  };
}
