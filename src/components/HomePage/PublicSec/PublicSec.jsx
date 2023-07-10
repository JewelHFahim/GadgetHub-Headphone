"use client"

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./PublicSec.css"
import Title from "@/utils/Subtitle";
import SubTitle from "@/utils/Subtitle";
import PrimaryTitle from "@/utils/PrimaryTitle";


const PublicSec = () => {

    
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 600) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(6);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);




    const datas = [
        {
            img: "/RS1.png",
            view: '400K'
        },
        {
            img: "/RS2.png",
            view: '400K'
        },
        {
            img: "/RS3.png",
            view: '400K'
        },
        {
            img: "/RS4.png",
            view: '400K'
        },
        {
            img: "/RS5.png",
            view: '400K'
        },
        {
            img: "/RS2.png",
            view: '400K'
        },
        {
            img: "/RS1.png",
            view: '400K'
        },
        {
            img: "/RS2.png",
            view: '400K'
        },
        {
            img: "/RS3.png",
            view: '400K'
        },
        {
            img: "/RS4.png",
            view: '400K'
        },
        {
            img: "/RS5.png",
            view: '400K'
        },
        {
            img: "/RS2.png",
            view: '400K'
        },
    ]

    return (
        <div className='  lg:mt-[120px] pt-[10px] lg:pt-[0px] lg:mr-[315px] mr-[10px]'>

            <div className="text-right">

                <SubTitle className=" text-[30px] lg:text-[60px]">Public</SubTitle>

                <PrimaryTitle className="text-[40px] lg:text-[120px] leading-[20px] lg:leading-[100px]" >Reals & Shorts</PrimaryTitle>
            </div>


            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={10}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}

                modules={[Pagination, Navigation]}
                navigation={true}
                className="myPublicSwipper mt-6"

                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    datas.map((data, i) => (
                        <SwiperSlide key={i} className="relative">
                            <Image src={data.img} alt='' width={262} height={466} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    )
}

export default PublicSec