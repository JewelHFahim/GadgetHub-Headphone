"use client"

import React, { useRef, useState } from "react";
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
        <div className='mt-[120px] mr-[315px]'>

            <div className="text-right">
                <SubTitle>Public</SubTitle>
                <PrimaryTitle className="text-[120px] font-poppins" >Reals & Shorts</PrimaryTitle>
            </div>


            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}

                modules={[Pagination, Navigation]}
                navigation={true}
                className="myPublicSwipper mt-6"
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