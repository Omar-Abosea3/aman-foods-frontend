import axios from 'axios';
import React, { useState } from 'react'
import Slider from 'react-slick';
import $ from 'jquery';
export default function HomeSection({homeSlider}) {
    const settings = {
        dots: true,
        arrows:false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
    };
 

  return <>
    <section id='Home' className='my-5 container shadow-lg rounded-3 overflow-hidden position-relative'>
        <Slider {...settings}>
          {homeSlider?homeSlider[0].images.map((image , index) => <div key={index}>
            <img src={image.secure_url} className='w-100' alt="slider1" loading='lazy' />
          </div>):''}
        </Slider>
    </section>
  </>
}
