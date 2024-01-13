import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Link from "next/link";

const index = ({joinTeam,teams}) => {
  return (
    <>
      <Navbar />
      <div className="p-4 md:mx-48 mt-40 mb-10 font-inter">
        <h1 className="text-4xl font-bold mb-4">{joinTeam.title}</h1>
        <p className="text-lg mb-8">
          {joinTeam.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-20">
          {/* Add new images in a single row here */}
          {teams && teams.map((team,index)=>{
            return(
              <div key={index} className="w-full md:w-64 sm:w-1/2">
              <Image
                src={team.attributes.image.data.attributes.url}
                alt={team.attributes.name}
                width={500}
                height={300}
              />
              <h2 className=" font-bold">{team.attributes.name}</h2>
              <h3>{team.attributes.jobTitle}</h3>
            </div>
            )
          })}
        
        </div>
      </div>
      <div className="bg-gray-300 py-8">
        <div className="container mx-auto">
          <h1 className="text-xl px-10 md:px-32 md:text-2xl font-bold text-start mb-4">
            {joinTeam.join}
          </h1>
          <div className="flex px-10 md:px-32 justify-start">
            <button  className="text-black py-2 px-4 rounded hover:font-bold">
              <Link href="/joinOurTeam">Join our Team</Link>
            </button>
          </div>
        </div>
      </div> 
    </>
  );
};

export default index;


export async function getStaticProps() {
  var joinTeam = {};
  var teams = {};
  const apiUrl=process.env.APIURL;
  // var caseStudies={}

  // home page data api 
  await axios
  .get(`${apiUrl}/join-team?populate=*`)
    .then((res) => {
      
      joinTeam = res.data.data.attributes;
    })
    .catch((err) => {
      console.log(err.message);
    });

    await axios
    .get(`${apiUrl}/teams?populate=*`)
    .then((res) => {
     
      teams = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return {
    props: {
      joinTeam,
      teams
      // footer
    
    },
    revalidate: 10, 
  };
}