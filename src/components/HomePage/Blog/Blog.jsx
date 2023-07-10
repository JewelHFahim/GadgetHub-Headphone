"use client"

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./Blog.css"
import SubTitle from "@/utils/Subtitle";
import PrimaryTitle from "@/utils/PrimaryTitle";

const Blog = () => {


    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 600) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(3);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


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
        <div className='mt-[40px] lg:mt-[135px] bg-[#191919] lg:h-[777px] px-[10px] lg:px-[300px]'>

            <div className='pt-[10px] lg:pt-[66px] flex justify-between items-center '>

                <div >
                    <SubTitle className="text-[30px] lg:text-[60px]">Our</SubTitle>
                    <PrimaryTitle className=" text-[60px] lg:text-[120px] font-poppins leading-[30px] lg:leading-[100px]" >Blog</PrimaryTitle>
                </div>

                <button className='flex items-center gap-[10px]'>
                    <div className=" w-[30px] h-[30px] lg:w-[44px] lg:h-[44px] relative">
                        <Image src="/rightIcon.png" alt="" fill className='p-2 rounded-full bg-[#131313]' />
                    </div>
                    <p className='text-[10px] lg:text-[15px] font-poppins text-white'>View All</p>
                </button>
            </div>

            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={20}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}

                modules={[Pagination, Navigation]}
                navigation={true}
                className="myBlogSwipper mt-[30px] lg:mt-[50px]"

                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    datas.map((item, i) => (
                        <SwiperSlide key={i} className='hover:scale-[1.03] transform duration-300 m-2'>

                            <div className=" w-[290px] h-[274px] lg:w-[344px] lg:h-[324px] pl-[10px] lg:pl-[20px] pt-[10px] lg:pt-[17px] border relative">

                                <div className="w-[300px] lg:w-[344px] h-[178px] lg:h-[211px] relative">
                                    <Image src={item.img} alt="" fill />
                                </div>
                                
                                <div className='rotate-[-90deg] flex items-center gap-[10px] absolute right-[-124px] top-[90px] lg:top-[100px]'>
                                    <p className='rotate-[-360deg] text-[12px] lg:text-[14px] font-poppins font-[600] text-white text-opacity-[50%]'>30 AUGUST 2023</p>
                                    <span className='w-[60px] h-[2px] bg-white bg-opacity-[50%]'></span>
                                </div>

                                <p className='text-[18px] lg:text-[20px] font-[600] font-poppins text-white mt-[5px] w-[290px]'>{item.title}</p>

                                <button className='flex items-center gap-[10px] mt-[10px]'>

                                    <div className="w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] relative">
                                        <Image src="/rightIcon.png" alt="" fill className='p-1 rounded-full bg-[#131313]' />
                                    </div>

                                    <p className='text-[10px] lg:text-[15px] font-poppins text-white'>View All Feature</p>
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