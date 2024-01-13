import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoBanner from "./VideoBanner";
import Hero from "./Hero";

const BannerSlider = ({ banner, hero }) => {
 
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 7000,
    dots: true,
  };

  return (
    <div className="banner-slider-container relative">
      <Slider {...settings}>
        {banner?.map((bn, index) => {
          if (bn.attributes.ext === ".mp4") {
            
            return (
              <div key={index} className="banner-slide ">
                <div className="video-banner ">
                  <VideoBanner videoLink={bn.attributes.url} title={hero.title} more={hero.moreButton}/>
                  
                </div>
              </div>
            );
          } else if (
            bn.attributes.ext === ".png" ||
            bn.attributes.ext === ".img"
          ) {
            return (
              <div key={index} className="banner-slide">
                <div className="image-banner">
                  <Hero title={hero.title} banner={bn} />
                </div>
              </div>
            );
          }
        })}
      </Slider>
      <div className="absolute inset-x-0 bottom-2 flex justify-center">
        <Slider {...settings}></Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
