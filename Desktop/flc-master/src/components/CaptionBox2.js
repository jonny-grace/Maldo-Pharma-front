"use client"
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../../public/assets/leftArrow.png';
import rightArrow from '../../public/assets/rightArrow.png';
import Image from "next/image";

function CaptionBox2({  feedback }) {
    

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
<div dangerouslySetInnerHTML={{ __html: '<div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="12" data-height="375" data-nofollow="true" data-expandifr="true" data-reviews="" data-clutchcompany-id="568691"></div>' }} />

    );
}

export default CaptionBox2;
