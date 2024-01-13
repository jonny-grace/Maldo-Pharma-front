import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// impor/t { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="relative md:mx-24 font-inter ">
        <div className="left-2 transform -translate-y-1/2 flex gap-3 ml-5">
          <button
            className={`carousel-button  border border-black  rounded-full p-3 ${
              this.slider && this.slider.currentSlide() === 0
                ? "carousel-button-disabled border-opacity-10"
                : ""
            }`}
            onClick={() => this.slider && this.slider.slickPrev()}
            disabled={this.slider && this.slider.currentSlide() === 0}
          >
            <AiOutlineArrowLeft className="h-3 w-3 text-gray-600" />
          </button>
          <button
            className={`carousel-button border border-black  rounded-full px-3 ${
              this.slider &&
              this.slider.currentSlide() ===
                this.slider.slideCount() - this.slider.props.slidesToShow
                ? "carousel-button-disabled"
                : ""
            }`}
            onClick={() => this.slider && this.slider.slickNext()}
            disabled={
              this.slider &&
              this.slider.currentSlide() ===
                this.slider.slideCount() - this.slider.props.slidesToShow
            }
          >
            <AiOutlineArrowRight className="h-3 w-3 text-gray-600 " />
          </button>
        </div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {/* Slide 1 */}

          <div>
            <div className="relative mx-2">
              <div>
                <div className="relative mx-2">
                  <Image
                    src="/assets/perfume.png"
                    alt=""
                    height={1000}
                    width={1000}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute top-4 w-full">
                    <div className="grid pl-5">
                      <h1 className="text-white text-lg">Retail</h1>
                      <h5 className="text-white text-2xl">Ajmal Perfumes</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div>
            <div className="relative mx-2">
              <div>
                <div className="relative mx-2">
                  <Image
                    src="/assets/percil.png"
                    alt=""
                    height={1000}
                    width={1000}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute top-4 w-full">
                    <div className="grid pl-5">
                      <h1 className="text-white text-lg">FMCG</h1>
                      <h5 className="text-white text-2xl">Persil Gel</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div>
            <div className="relative mx-2">
              <div>
                <div className="relative mx-2">
                  <Image
                    src="/assets/burger.png"
                    alt=""
                    height={1000}
                    width={1000}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute top-4 w-full">
                    <div className="grid pl-5">
                      <h1 className="text-white text-lg">F&B</h1>
                      <h5 className="text-white text-2xl">Thryve</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 4 */}
          <div>
            <div className="relative mx-2">
              <div>
                <div className="relative mx-2">
                  <Image
                    src="/bannerService.jpg"
                    alt=""
                    height={1000}
                    width={1000}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute top-4 w-full">
                    <div className="grid pl-5">
                      <h1 className="text-white text-xl">FMCG</h1>
                      <h5 className="text-white text-3xl">Persil Gel</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 5 */}
          <div>
            <div className="relative mx-2">
              <div>
                <div className="relative mx-2">
                  <Image
                    src="/bannerService.jpg"
                    alt=""
                    height={1000}
                    width={1000}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute top-4 w-full">
                    <div className="grid pl-5">
                      <h1 className="text-white text-xl">FMCG</h1>
                      <h5 className="text-white text-3xl">Persil Gel</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 6 */}
          <div>
            <div className="relative mx-2">
              <div>
                <div className="relative mx-2">
                  <Image
                    src="/bannerService.jpg"
                    alt=""
                    height={1000}
                    width={1000}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute top-4 w-full">
                    <div className="grid pl-5">
                      <h1 className="text-white text-xl">FMCG</h1>
                      <h5 className="text-white text-3xl">Persil Gel</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
