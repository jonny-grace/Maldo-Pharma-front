import React from "react";
import Navbar from "../../components/Navbar";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Index = ({ blogs }) => {
 
  const sortedblogs = blogs.slice().sort((a, b) => a.id - b.id);
  var feutured = {};
  var otherBlogs = [];

  sortedblogs &&
    sortedblogs.map((blog, index) => {
      if (index == 5) {
        feutured = blog;
      } else {
        otherBlogs.push(blog);
      }
    });

  return (
    <div className=" mb-20 mt-10 px-5 md:px-8 lg:px-10">
      <Navbar />
      <div className="p-4 mx-auto mt-20 mb-5  max-w-8xl xxl:max-w-7xl ">
        <h1 className="text-2xl font-gothamBold mb-4 mx-5">
          featured articles
        </h1>

        <div className="grid md:grid-cols-5 md:grid-rows-1">
          <div className=" md:w-full md:col-span-3 col-span-5 md:row-span-1  mb-10 md:mb-0  md:px-4">
            <div className=" ">
              <Image
                src={feutured.attributes.thumbnail.data.attributes.url}
                width={1000}
                height={1000}
                className="object-cover md:min-h-[405px] lg:min-h-[468px] lg:max-h[468px] xl:min-h-[400px] xl:max-h-[430px] xxl:min-h-[506px]"
                alt="Blog Banner"
              />
            </div>
            <div className="h-min">
              <h2
                className="ml-12 md:ml-0 mt-10 xl:text-[20px] font-gothamBold xxl:text-[25px]"
                style={{ color: "#999999" }}
              >
                {feutured.attributes.blog_type.data.attributes.name}
              </h2>
            </div>

            <div>
              <Link href={{
                    pathname: "/internalBlogPage",
                    query: { title: feutured?.attributes.title},
                  }}
                   className=" ml-12 md:ml-0  font-gothamBold text-black text-2xl my-5">
                {feutured.attributes.title}
              </Link>
            </div>

            <div>
              <h2 className=" ml-12 md:ml-0 font-gothamMedium text-gray-500 mt-4">
                {feutured?.attributes?.createdBy?.data?.attributes?.firstname}{" "}
                {feutured?.attributes?.createdBy?.data?.attributes?.lastname}
              </h2>
            </div>
          </div>
          <div className="w-full col-span-1">
            {otherBlogs &&
              otherBlogs
                .sort((a, b) => b.id - a.id) // Sort by blog ID in descending order
                .slice(0, 3)
                .map((blog, index) => {
                  return (
                    <div
                      key={index}
                      className="pb-8 md:flex  sm:flex-row gap-5 xxl:gap-14"
                    >
                      <div className="md:flex  lg:h-[220px] xl:h-[200px] xxl:h-[230px] ">
                        <Image
                          src={blog.attributes.thumbnail.data.attributes.url}
                          className="md:ml-0 md:min-w-[220px] min-h-[233.19px] md:min-h-[100px] md:max-h-[190px] lg:min-h-[100px] lg:max-h-[220px] xl:min-h-[100px] xl:max-h-[200px] xxl:min-h-[240px] object-fill"
                          alt={`Blog ${index + 1}`}
                          width={1000}
                          height={1000}
                        />
                        <div className=" ml-4">
                          <h5
                            className="xl:w-[232px] mt-2 font-gothamBold"
                            style={{ color: "#999999" }}
                          >
                            {blog.attributes.blog_type.data.attributes.name}
                          </h5>
                          <Link 
                          href={{
                            pathname: "/internalBlogPage",
                            query: { title: blog?.attributes.title},
                          }}
                           className="font-gothamBold text-2xl lg:my-9 lg:w-[210px] xxl:w-[253px] xxl:text-[37px] hover:cursor-pointer">
                            {blog.attributes.title.slice(0, 18)}
                          </Link>
                          <h3 className=" font-gothamMedium">
                            {feutured?.createdBy?.data?.attributes?.firstname}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>

      <div className=" md:max-w-7xl  md:mx-auto md:flex-wrap md:flex justify-center">
        <div className=" flex flex-col  md:flex-row justify-center gap-5 ">
          {otherBlogs &&
            otherBlogs
              .sort((a, b) => b.id - a.id) // Sort by blog ID in descending order
              .slice(3, 6)
              .map((blog, index) => {
                return (
                  <div key={index} className="mb-4  mx-5 md:mx-0">
                    <Image
                      src={blog.attributes.thumbnail.data.attributes.url}
                      className="w-full md:w-[450px] xxl:  md:h-72"
                      alt="Blog 1"
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
                        query: { title: blog?.attributes.title},
                    query: { blogId: blog.id },
                  }}
                   className=" font-gothamBold text-lg hover:cursor-pointer">
                        {blog.attributes.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  var blogs = {};
  const apiUrl = process.env.APIURL;
  // var footer = {};
  await axios
    .get(`${apiUrl}/blogs?populate=*`)
    .then((res) => {
      blogs = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return {
    props: {
      blogs,
    },
    revalidate: 10,
  };
}
