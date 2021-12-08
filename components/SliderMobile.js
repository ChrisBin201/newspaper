
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { content } from "../Data/sliderContent";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import styles from '../styles/Home.module.css'


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


export default function SliderMobile() {



    return (
        <div className="block md:hidden relative w-full h-64 sm:max-h-80" >
            <Swiper slidesPerView={1} spaceBetween={30} loop={true}>
                {content.map((item, index) => (
                <SwiperSlide key={index} >
                    <article key={index}
                        className="relative w-full h-full bg-cover bg-center  
                                                    overflow-hidden   transition duration-300 
                                                    ease-in-out mb-4 "
                        style={{ backgroundImage: `url(${item.img})`}}>
                        <div className="absolute inset-0  transition duration-300 ease-in-out"></div>
                        <div className="relative w-full h-full flex justify-center items-end ">
                            <h3 className="p-3 w-full" style={{ background: "#0003" }}>
                                <a className="text-white text-base font-semibold" href="#">
                                    <div className="absolute inset-0 w-full"></div>
                                    {item.title}
                                </a>
                            </h3>
                        </div>
                    </article>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}