
import { React, useState } from "react";
import "react-tabs/style/react-tabs.css";
import CustomeTabs2 from "./CustomeTabs2";
import ClientBanner from "./ClientBanner";
import ReactMarkdown from 'react-markdown';
const Client = ({ clientsDetail,allClient }) => {

  const [tab, setTab] = useState("FMCG");

  let fmcg={}
  let electronic={}
  let retail={}
  let agency={}
  let fashion={}
  let foodBV={}
  let lexury={}
   allClient && allClient.map((client)=>{
    if(client.attributes.type=="FMCG"){
      fmcg=client.attributes.image.data.attributes.url;
    }else if(client.attributes.type=="Electronics"){
      electronic=client.attributes.image.data.attributes.url;
    }
    else if(client.attributes.type=="Fashion & Lifestyle"){
      fashion=client.attributes.image.data.attributes.url;
    }
    else if(client.attributes.type=="Food & Beverage"){
      foodBV=client.attributes.image.data.attributes.url
    }
    else if(client.attributes.type=="Retail"){
      retail=client.attributes.image.data.attributes.url
    }
    else if(client.attributes.type=="Agency & Media"){
      agency=client.attributes.image.data.attributes.url
    }
    else if(client.attributes.type=="Luxury"){ 
      lexury=client.attributes.image.data.attributes.url
    }
    
   });

  
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="container mx-auto  font-inter">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className="xl:text-5xl md:text-3xl text-5xl text-center text-gray-800 font-gothamBold md:mb-5 pt-4 lowercase">
          {clientsDetail.title}
        </h1>
      </div>
      <div className="text-base font-gothamBook md:text-lg lg:text-xl text-center text-gray-800 xxl:w-[1456px] xxl:text-[26.63px] px-6 xl:w-12/12 xl:mx-48 mb-3 md:mb-9">
        <ReactMarkdown>{clientsDetail.desc}</ReactMarkdown>
      </div>
      {/* ?here is some changes  */}
      <div className=" flex flex-col mx-8  md:mx-16  font-inter pt-8">
        <CustomeTabs2 tabs={tab} setTab={setTab}  />
      </div>
            {tab === "FMCG" ? <ClientBanner logoss={fmcg} /> : null}
            {tab === "Electronics" ? <ClientBanner logoss={electronic} /> : null}
            {tab === "Retail" ? <ClientBanner logoss={retail} /> : null}
            {tab === "Fashion" ? <ClientBanner logoss={fashion} /> : null}
            {tab === "Agency" ? <ClientBanner logoss={agency} /> : null}
            {tab === "Food" ? <ClientBanner logoss={foodBV} /> : null}
            {tab === "Luxury" ? <ClientBanner logoss={lexury} /> : null}
    </div>
  );
};

export default Client;
