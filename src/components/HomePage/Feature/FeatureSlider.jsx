"use client"

import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./FeatureSlider.css"
import { ThemeContext } from "@/Context/AppContext";

const FeatureSlider = ({ services }) => {

    const { isDarkmode } = useContext(ThemeContext)

    return (
        <>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}

                modules={[Pagination, Navigation]}
                navigation={true}
                className={`myFeatureSlider mt-2 ${isDarkmode ? "forDarkMode" : "forLightMode"} `}
            >
                {
                    services.map((item, index) => (
                        <SwiperSlide key={index} className={`w-[409px] h-[458px] border p-[30px] ${isDarkmode ? "border-white border-opacity-[50%]" : "border-black"}`}>

                            <div className='flex items-center gap-[32px]'>
                                <Image src={item.icon} alt="" width={85} height={80} />
                                <h2 className={`text-[25px] font-[800] font-poppins ${isDarkmode ? "text-white" : "text-black"}`}>{item.title}</h2>
                            </div>

                            <p className={`mt-[58px] text-center text-[10px] font-[300] ${ isDarkmode ? "text-white text-opacity-[50%]" : "text-[#000]"}`}>{item.desc} Hello </p>

                            <button className='flex items-center gap-[10px] mt-[40px]'>

                                {
                                    isDarkmode ?
                                        <Image src="/rightIcon.png" alt="" width={36} height={36} className='p-2 rounded-full bg-bgSecondary' />
                                        :
                                        <Image src="/rightIconDark.png" alt="" width={36} height={36} className='p-2 rounded-full bg-bgOffWhite' />
                                }

                                <p className={`text-[12px] font-poppins uppercase ${isDarkmode ? "text-white" : "text-black"}`}>Learn More</p>
                            </button>
                        </SwiperSlide>
                    ))
                }

            </Swiper>


        </>

    );
}

export default FeatureSlider;