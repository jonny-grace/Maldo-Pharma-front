import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getallBlogs, getallProducts } from "../../pages/api";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import leftArrow from "../../../public/assets/leftArrow.png";
import rightArrow from "../../../public/assets/rightArrow.png";

function BlogSlide({ currentBlog }) {
    const [allBlogs, setAllBlogs] = useState([]);
  
    useEffect(() => {
      const getAll = async () => {
        try {
          const response = await getallBlogs(); // Assuming the API endpoint is '/api/getAllProducts'
          const filteredBlogs = response.data.filter(blog => blog.id !== currentBlog);
          setAllBlogs(filteredBlogs);
        } catch (error) {
          console.error(error);
        }
      };
  
      getAll();
    }, [currentBlog]);
  
 
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick}>
        <div className="text-3xl absolute top-0 left-0 mt-[-50px] ml-0 h-10 w-10 border-[2px] hover:border-2 flex justify-center items-center hover:border-gray-600  rounded-full">
          <Image
            alt=""
            src={leftArrow}
            width={1000}
            height={1000}
            className="w-7 h-7 opacity-40 hover:opacity-100"
          />
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"></path></svg>  */}
        </div>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick}>
        <div className="text-3xl absolute top-0 left-0 mt-[-50px] ml-11 h-10 w-10 border-[2px] hover:border-2   flex justify-center items-center hover:border-gray-600  rounded-full">
          <Image
            alt=""
            src={rightArrow}
            width={1000}
            height={1000}
            className="w-6 h-7 opacity-40 hover:opacity-100"
          />

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
    {allBlogs &&
      allBlogs.map((blog, index) => (
        <div key={index} className="mb-4 md:mx-0  md:mr-0"> {/* Added margin-right classes */}
          <Image
            src={blog.attributes.thumbnail.data.attributes.url}
            className="w-full md:w-[350px] xl:w-[300px] xxl:w-[450px]  h-72 xxl:h-96"
            alt= {blog.attributes.title}
            width={1000}
            height={1000}
          />
          <div>
            <h2 className="text-gray-500 font-gothamMedium mt-4">
              {blog.attributes.blog_type.data.attributes.name}
            </h2>
          </div>
          <div>
            <Link
              href={{
                pathname: "/internalBlogPage",
                query: { blogId: blog.id },
              }}
              className=" font-gothamBold text-lg hover:cursor-pointer"
            >
              {blog.attributes.title}
            </Link>
          </div>
        </div>
      ))}
  </Slider>
</div>

    </>
  );
}

export default BlogSlide;
