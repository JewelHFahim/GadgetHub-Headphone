"use client"

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./Review.css"
import { GrStar } from 'react-icons/gr';
import { IoStarOutline } from 'react-icons/io5';
import Title from "@/utils/Title";


const Review = () => {

    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem dunt pellentesque. Fu fringilla,"
    const datas = [
        {
            img: "/rev1.png",
            desc: desc
        },
        {
            img: "/rev2.png",
            desc: desc
        },
        {
            img: "/rev3.png",
            desc: desc
        },
        {
            img: "/rev1.png",
            desc: desc
        },
        {
            img: "/rev2.png",
            desc: desc
        },
        {
            img: "/rev3.png",
            desc: desc
        },
    ]


    return (
        <div className='pt-[120px] pb-[80px] bg-[#191919] px-[200px] relative'>

            <div className='text-center'>
                <Title primaryText="PUBLIC" />
                <Title secondaryText="REVIEW" />
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={80}
                loop={true}
                centeredSlides={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}

                modules={[Pagination, Navigation]}
                navigation={true}
                className="myReviewSwipper"
            >
                {
                    datas.map((data, i) => (
                        <SwiperSlide key={i} className='w-[480px] h-[200px] border relative'>

                            <Image src={data.img} width={107} height={107} alt="" className='absolute top-[-60px] left-[185px]' />

                            <div className='flex gap-1 text-[23px] justify-center mt-[60px] text-white'>
                                <GrStar />
                                <GrStar />
                                <GrStar />
                                <GrStar />
                                <IoStarOutline />
                            </div>

                            <p className='px-[89px] pb-[29px] pt-[10px] text-center text-[12px] font-poppins text-white text-opacity-[50%]'>
                                {data.desc}
                            </p>

                        </SwiperSlide>
                    ))
                }

            </Swiper>

            <div className="w-[350px] h-full absolute left-0 top-0 bgGradient1" />
            <div className="w-[320px] h-full absolute right-0 top-0 bg-red-60 bgGradient2" />
        </div>
    )
}

export default Review