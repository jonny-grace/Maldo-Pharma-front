
import Blog from "../components/Blog";
import Client from "../components/Client";
import Gallery from "../components/Gallery";
import HomePageNavBar from "../components/HomePageNavbar";
import Service from "../components/Service";
import BannerSlider from "../components/bannerSlider";

export default function HomePage({homepageContent,services,clients,blogs,products,allClient}) {

  const servicesData= services?.data;
const logo= {
  alt:homepageContent?.logo?.data?.attributes?.name,
  path:homepageContent?.logo?.data?.attributes?.url,
  height:homepageContent?.logo?.data?.attributes?.height,
  width:homepageContent?.logo.data?.attributes?.width
}
const hero= {
  alt:homepageContent?.background?.data[0]?.attributes?.name,
  path:homepageContent?.background?.data[0]?.attributes?.url,
  height:homepageContent?.background?.data[0]?.attributes?.height,
  width:homepageContent?.background.data[0]?.attributes?.width,
  title:homepageContent?.title,
  moreButton:homepageContent?.more
}
const blogSectionTop={
  header: homepageContent?.blogSectionHeader,
  title:homepageContent?.blogSection
}
const clientsDetail={
  title:clients?.attributes?.title,
  desc: clients?.attributes?.description,
  logos:clients?.attributes?.images?.data
}
const serviceSection={
  title: homepageContent?.sectionTitle,
  desc:homepageContent?.sectionDescription
}

  return (
    <div className="w-full overflow-x-hidden ">
      <div><HomePageNavBar logo={logo}/></div>
     <div className=" md:mx-7 md:my-7"><BannerSlider hero={hero} banner={homepageContent?.background?.data} /></div> 
      <Service serviceSection={serviceSection} services={servicesData}/>
      <Gallery products={products} />
      <Client clientsDetail={clientsDetail} allClient={allClient}/>
      {/* <Blog blogSectionTop={blogSectionTop} blogs={blogs}/>  */}
    </div>
  );
}

