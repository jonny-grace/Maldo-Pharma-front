
import axios from "axios";
import HomePage from "./Home";

// import Footer from "../components/Footer";


export default function Home({homepageContent,services,clients,blogs,products,allClient}) {
  return (
   
    <HomePage services={services} products={products} allClient={allClient} homepageContent={homepageContent.attributes} clients={clients.data} blogs={blogs} />
    
  
  )
}

export async function getStaticProps() {
  let homepageContent = {};
  let services={}
  let clients={}
  let blogs={}
  let products={}
  let allClient={}
  const apiUrl = process.env.APIURL;
  // var caseStudies={}

  // home page data api 
  await axios
  .get(`${apiUrl}/header?populate=*`)
    .then((res) => {
      homepageContent = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

    // services list api 
    await axios
    .get(`${apiUrl}/service-homes?populate=*`)
    .then((res) => {
      services=res.data
    })
    .catch((err) => {
      console.log(err.message);
    });

    // clients and logo list api 
    await axios
    .get(`${apiUrl}/client?populate=*`)

    .then((res) => {
      
      clients=res.data
      
    })
    .catch((err) => {
      console.log(err.message);
    });

    // blogs data api 
    await axios
    .get(`${apiUrl}/blogs?populate=*`)

    .then((res) => {
     
      blogs = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

    await axios
    .get(`${apiUrl}/products?populate=*`)

    .then((res) => {
    //  console.log('products detail file on home page',res.data.data)
      products = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

    await axios
    .get(`${apiUrl}/all-clients?populate=*`)

    .then((res) => {
    //  console.log('products detail file on home page',res.data)
      allClient = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return {
    props: {
      homepageContent,
      services,
      clients,
      blogs,
      products,
      allClient
      // caseStudies,
    },
    revalidate: 10, // Optional: specify the number of seconds after which to re-generate the page
  };
}
