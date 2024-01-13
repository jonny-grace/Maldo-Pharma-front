"use client";
import {  React } from "react";

import axios from "axios";

import "react-tabs/style/react-tabs.css";

import CaseStudyPageComponent from "../../components/CaseStudyPageComponent";

const index = ({ caseStudyStatic, caseStudies }) => {
  
  const sortedProducts = caseStudies.slice().sort((a, b) => a.id - b.id);

  
  return (
    <CaseStudyPageComponent caseStudies={sortedProducts} caseStudyStatic={caseStudyStatic} />
  );
};

export default index;

export async function getStaticProps() {
  const apiUrl = process.env.APIURL;
  
  var caseStudyStatic = {};

  var caseStudies = {};

  // case study static data
  await axios
  .get(`${apiUrl}/case-study?populate=*`)
    .then((res) => {
      caseStudyStatic = res.data.data.attributes;
    })
    .catch((err) => {
      console.log(err.message);
    });

  // case studies detail from api
  await axios
  .get(`${apiUrl}/products?populate=*`)
    .then((res) => {
      caseStudies = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return {
    props: {
      caseStudyStatic,
      caseStudies,
    },
    revalidate: 10,
  };
}
