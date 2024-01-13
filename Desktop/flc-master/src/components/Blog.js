import Image from "next/image";
import React from "react";
import img3 from "../../public/assets/Ellipse.png";
import Link from "next/link";
const Blog = ({ blogSectionTop, blogs }) => {
  console.log(blogs);
  return (
    <div
      className="   py-8 sm:px-6 lg:px-20 lg:py-14 mx-auto md:mx-16 mb-14 font-inter"
      style={{ backgroundColor: "#E6E6E6" }}
    >
      <div className=" mx-auto text-left ml-10 mb-10 lg:mb-14 ">
        <p className="mt-1 text-gray-700 text-3xl mb-4 font-gothamBook lowercase">
          {blogSectionTop.header}
        </p>
        <h2 className="text-2xl font-gothamBold md:text-6xl xxl:text-[79px] md:leading-tight text-black">
          {blogSectionTop.title}
        </h2>
      </div>

      <div className="grid px-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:grid-cols-2 ml-10 md:ml-1">
        {blogs &&
          blogs.slice(0, 4).map((blog, index) => {
            return (
              <Link
                key={index}
                className="group  rounded-xl p-5 transition-all dark:hover:bg-white/[.05]"
                href={{
                  pathname: "/internalBlogPage",
                  query: { title: blog?.attributes.title},
                }}
              >
                <div className="mt-auto items-center gap-x-6">
                  <Image
                    className="w-20 h-20 rounded-full"
                    src={img3}
                    width={1000}
                    height={1000}
                    alt="Image Description"
                  />
                  <div className="mt-6 flex items-center justify-start  w-72">
                  <span className="mr-2 font-gothamBook">
                       {blog?.attributes?.createdBy?.data?.attributes?.firstname}
                    </span>
                    <div className="border-r border-gray-400 h-4 mr-2" />
                    <span className="mr-4  font-gothamMeduim">
                      {" "}
                      {blog?.attributes?.blog_type?.data?.attributes?.name}
                    </span>
                  </div>
                </div>
                <Link href={{
                    pathname: "/internalBlogPage",
                    query: { title: blog?.attributes.title},
                  }} className="mt-5 text-2xl text-black font-gothamBold">
                  {blog?.attributes.title.substring(0, 20)}...
                </Link>
                <br/>
                <p className="mt-3 font-gothamMedium inline-flex items-center gap-x-2 text-sm  underline text-gray-00">
                  Read more
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
