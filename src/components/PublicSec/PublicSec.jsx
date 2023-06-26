"use client"

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./PublicSec.css"
import Title from "@/utils/Title";


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

            <div className='text-right'>
                <Title primaryText="PUBLIC"/>
                <Title secondaryText="REALS & SHORTS"/>
            </div>


            <Swiper
                slidesPerView={6}
                spaceBetween={10}
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