import Footer from "../components/Footer";
import Script from 'next/script'

import "../styles/globals.css";
import "../styles/timecss.css";
import Head from 'next/head';
import { fetchFooterData } from "./api";
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {

  const [footerData, setFooterData] = useState(null);
 
  useEffect(() => {
    async function fetchData() {
      // Fetch the data from the API
      const data = await fetchFooterData();

      setFooterData(data.data);
    }

    fetchData();
  }, []);



  return (
    <>
    <Script 
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="lazyOnload" 
      />
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="flex flex-col min-h-screen">
        {/* <Navbar /> */}

        <Component {...pageProps} />
        {footerData && footerData.attributes && <Footer footerData={footerData.attributes} />}
      </div></>
  );
}

export default MyApp;
