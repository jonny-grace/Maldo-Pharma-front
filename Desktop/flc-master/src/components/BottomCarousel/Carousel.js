import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getallProducts } from "../../pages/api";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import leftArrow from '../../../public/assets/leftArrow.png';
import rightArrow from '../../../public/assets/rightArrow.png';


function Carousel() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await getallProducts(); // Assuming the API endpoint is '/api/getAllProducts'
        setAllProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAll();

  }, []);

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick}>

        <div className="text-3xl absolute top-0 left-0 mt-[-50px] ml-0 h-10 w-10 border-[2px] hover:border-2 flex justify-center items-center hover:border-gray-600  rounded-full" >

          <Image alt="" src={leftArrow} width={1000} height={1000} className="w-7 h-7 opacity-40 hover:opacity-100" />
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"></path></svg>  */}
        </div>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick}>
        <div className="text-3xl absolute top-0 left-0 mt-[-50px] ml-11 h-10 w-10 border-[2px] hover:border-2   flex justify-center items-center hover:border-gray-600  rounded-full" >
          <Image alt="" src={rightArrow} width={1000} height={1000} className="w-6 h-7 opacity-40 hover:opacity-100" />

          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"></path></svg> */}
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1, // Number of slides to show at a time
    // slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 2044,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="">
        <Slider {...settings}>
          {allProducts &&
            allProducts.map((product, index) => (
              <div key={index} className=" ">
                <div className="relative md:mr-10   ">
                  <Link href={{
                    pathname: "/internalCaseStudy",
                    query: { caseStudyId: product?.id },
                  }}>
                    <Image
                      src={product?.attributes?.image?.data?.attributes?.url}
                      alt=""
                      height={1000}
                      width={1000}
                      className="h-64 xl:h-72 xxl:h-96 w-full object-cover"
                    />
                    <div className="absolute  top-4 w-full">
                      <div className="grid pl-5">
                        <h1 className="text-white text-sm font-gothamBook">
                          {product.attributes.product_type.data.attributes.name}
                        </h1>
                        <h5 className="text-white font-gothamBold text-2xl">
                          {product.attributes.name}
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
