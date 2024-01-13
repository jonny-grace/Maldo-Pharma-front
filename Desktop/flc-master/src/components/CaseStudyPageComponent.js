import React, { useState } from 'react'
import "react-tabs/style/react-tabs.css";
import CustomeTabs from './CustomeTabs';
import CaseStudyCards from './CaseStudyCards';
import Navbar from './Navbar';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

function CaseStudyPageComponent({ caseStudyStatic, caseStudies }) {
    const [tabs, setTab] = useState("integrated");
    let integrated=[]
    let marketing=[]
    let events=[]
    let digital=[]
    let contentProduction=[]
    caseStudies && caseStudies.map((casestudy)=>{
        if(casestudy.attributes.tab=='Integrated'){
            integrated.push(casestudy)
        } else  if(casestudy.attributes.tab=='Marketing'){
            marketing.push(casestudy)
        }
        else  if(casestudy.attributes.tab=='Events & Exhibitions'){
            events.push(casestudy)
        }
        else  if(casestudy.attributes.tab=='Digital'){
            digital.push(casestudy)
        }
        else  if(casestudy.attributes.tab=='Content  Production '){
            contentProduction.push(casestudy)
        }
        
    })

    return (
        <div className=" w-full overflow-x-hidden mb-16">
            <Navbar />

            <div
                className=" w-screen relative "
                style={{ backgroundColor: "#E6E6E6" }}
            >

                <div className=" max-w-screen mx-auto w-full  px-4 py-32  lg:px-3">
                    <div className="grid max-w-3xl xxl:max-w-5xl  text-center mx-auto   w-full">
                        <h1 className=" font-gothamBold text-[40px] sm:text-[75px] lg:text-[78px] text-gray-800 lowercase">
                            {caseStudyStatic.title}
                        </h1>

                        <div className="mt-10 text-left  font-gothamBook  xl:text-[14px] xxl:text-[25px] text-black  ">
                        
                            {caseStudyStatic && (
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {caseStudyStatic.description}
                        </ReactMarkdown>
)}
                        </div>
                        

                    </div>
                    <div className="mt-8 w-full">

                        <CustomeTabs tabs={tabs} setTab={setTab} />
                    </div>
                    <div className=" flex flex-col  mx-16  font-inter">

                    </div>
                </div>
            </div>
            <div className=" md:mx-32  xln:mx-44">
            {tabs === "integrated" ? <CaseStudyCards caseStudies={integrated} /> : null}
            {tabs === "markating" ? <CaseStudyCards caseStudies={marketing} /> : null}
            {tabs === "events" ? <CaseStudyCards caseStudies={events} /> : null}
            {tabs === "digital" ? <CaseStudyCards caseStudies={digital} /> : null}
            {tabs === "contentProduction" ? <CaseStudyCards caseStudies={contentProduction} /> : null}

            
            </div>
            <div className="mt-8">
                {/* <h1 className="text-center hover:cursor-pointer font-bold  underline text-xl">load more</h1> */}
            </div>
        </div>

    );
}

export default CaseStudyPageComponent