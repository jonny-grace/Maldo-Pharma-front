import ServicesTabs from "../../components/Service/ServicesTabs";
import Carousel from "../../components/BottomCarousel/Carousel";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import CaptionBox2 from "../../components/CaptionBox2";
import rehypeRaw from "rehype-raw";
const index = ({ serviceStatic, services, feedback }) => {
  return (
    <>
      <div className="min-h-screen mt-7 overflow-x-hidden font-inter">
        <section className="md:max-h-[75vh]  w-full relative md:mb-10">
          <Navbar />
          <Image
            width={1000}
            height={1000}
            src={serviceStatic?.background?.data?.attributes?.url}
            alt="banner image"
            className="md:h-[75vh]  w-full object-top object-cover mt-20"
          />

          <div className="absolute bottom-1/4  w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:mt-28 md:ml-1 ">
              <div className="px-8 max-w-xl mt-24 mx-auto">
                <h1 className="text-white font-gothamBold md:text-2xl text-xl lowercase">
                  {serviceStatic?.title}
                </h1>

                <div className="hidden md:block font-gothamBook  text-white opacity-80 mt-4">
                {serviceStatic && (
  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
    {serviceStatic.description}
  </ReactMarkdown>
)}

                </div>
              </div>
              <div className="invisible"></div>
            </div>
          </div>
        </section>

        <div className=" mt-7 font-gothamBold" id="someDiv">
          <ServicesTabs services={services} />
        </div>
        <section className="md:my-16 mt-16 mx-2  max-w-5xl xxl:max-w-7xl md:mx-auto">
          <Carousel />
        </section>

        <section className=" ">
          <CaptionBox2 reviews={serviceStatic} feedback={feedback} />
        </section>
      </div>
    </>
  );
};

export default index;

export async function getStaticProps() {
  var serviceStatic = {};
  var services = {};
  var feedback = {};
  const apiUrl = process.env.APIURL;
  await axios
    .get(`${apiUrl}/service-static?populate=*`)

    .then((res) => {
      serviceStatic = res.data.data.attributes;
    })
    .catch((err) => {
      console.log(err.message);
    });

  await axios
    .get(`${apiUrl}/services?populate=*`)

    .then((res) => {
      services = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  await axios
    .get(`${apiUrl}/feedbacks?populate=*`)

    .then((res) => {
      feedback = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return {
    props: {
      serviceStatic,
      services,
      feedback,
    },
    revalidate: 10,
  };
}
