"use client"

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./Blog.css"
import Title from "@/utils/Title";

const Blog = () => {

    const datas = [
        {
            title: "Headphone Daily Use Blog...",
            img: "/blog1.png"
        },
        {
            title: "Headphone Daily Use Blog...",
            img: "/blog2.png"
        },
        {
            title: "Headphone Daily Use Blog...",
            img: "/blog3.png"
        },
        {
            title: "Headphone Daily Use Blog...",
            img: "/blog1.png"
        },
        {
            title: "Headphone Daily Use Blog...",
            img: "/blog2.png"
        },
        {
            title: "Headphone Daily Use Blog...",
            img: "/blog3.png"
        }
    ]

    return (
        <div className='mt-[135px] bg-[#191919] h-[777px] px-[300px]'>

            <div className='pt-[66px] flex justify-between items-center '>
                <div>
                    <Title primaryText="OUR"/>
                    <Title secondaryText="BLOG"/>
                </div>

                <button className='flex items-center gap-[10px]'>
                    <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#191919]' />
                    <p className='text-[15px] font-poppins text-white'>View All</p>
                </button>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}

                modules={[Pagination, Navigation]}
                navigation={true}
                className="myBlogSwipper mt-[50px]"
            >
                {
                    datas.map((item, i) => (
                        <SwiperSlide key={i} className='hover:scale-[1.03] transform duration-300 m-2'>

                            <div className="w-[344px] h-[324px] pl-[20px] pt-[17px] border relative">

                                <Image src={item.img} alt="" width={344} height={211} className='absolute' />

                                <div className='rotate-[-90deg] flex items-center gap-[10px] absolute right-[-124px] top-[100px]'>
                                    <p className='rotate-[-360deg] text-[14px] font-poppins font-[600] text-white text-opacity-[50%]'>30 AUGUST 2023</p>
                                    <span className='w-[60px] h-[2px] bg-white bg-opacity-[50%]'></span>
                                </div>

                                <p className='text-[20px] font-[600] font-poppins text-white mt-[200px] w-[290px]'>{item.title}</p>

                                <button className='flex items-center gap-[10px] mt-[10px]'>
                                    <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#131313]' />
                                    <p className='text-[15px] font-poppins text-white'>View All Feature</p>
                                </button>
                            </div>

                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    )
}

export default Blog