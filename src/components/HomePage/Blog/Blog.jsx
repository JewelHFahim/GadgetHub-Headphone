"use client"

import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./Blog.css"
import SubTitle from "@/utils/Subtitle";
import PrimaryTitle from "@/utils/PrimaryTitle";
import { ThemeContext } from "@/Context/AppContext";

const Blog = () => {

    const { isDarkmode } = useContext(ThemeContext);

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
        <div className={`mt-[40px] lg:mt-[135px]  lg:h-[96vh] px-[10px] lg:px-[14vw] ${isDarkmode ? "bg-bgSecondary" : "bg-bgOffWhite"}`}>

            <div className='pt-[10px] lg:pt-[66px] flex justify-between items-center '>

                <div >
                    <SubTitle className={`text-[30px] lg:text-[60px]  ${isDarkmode ? "text-white" : "text-black"}`}>Our</SubTitle>
                    <PrimaryTitle className=" text-[60px] lg:text-[120px] font-poppins leading-[30px] lg:leading-[100px]" >Blog</PrimaryTitle>
                </div>

                <button className='flex items-center gap-[10px]'>
                    <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>
                        {
                            isDarkmode ?
                                <Image src="/rightIcon.png" fill={true} alt='' className={`p-2 rounded-full bg-[#191919]`} />
                                :
                                <Image src="/rightIconDark.png" fill={true} alt='' className={`p-2 rounded-full bg-white`} />
                        }
                    </div>
                    <p className={`text-[10px]  lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>View All</p>
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
                className={`myBlogSwipper mt-[30px] lg:mt-[50px] ${isDarkmode ? "forDarkMode" : "forLightMode"}`}

                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    datas.map((item, i) => (
                        <SwiperSlide key={i} className='cursor-pointer'>

                            <div className={` w-[290px] h-[274px] lg:w-[20vw] lg:h-[35.5vh] pl-[10px] lg:pl-[20px] pt-[10px] lg:pt-[17px]  relative ${isDarkmode ? "border" : "border border-black"}`}>

                                <div className="w-[300px] lg:w-[20vw] h-[178px] lg:h-[21vh] relative hover:scale-[1.05] transform duration-300">
                                    <Image src={item.img} alt="" fill />
                                </div>

                                <div className='rotate-[-90deg] flex items-center gap-[10px] absolute right-[-124px] top-[90px] lg:top-[100px]'>
                                    <p className={`rotate-[-360deg] text-[12px] lg:text-[14px] font-poppins font-[600]  ${isDarkmode ? "text-white text-opacity-[50%]" : "text-black"}`}>30 AUGUST 2023</p>
                                    <span className={`w-[60px] h-[2px]  ${isDarkmode ? "bg-white bg-opacity-[50%]" : "bg-black"}`}></span>
                                </div>

                                <p className={`text-[18px] lg:text-[20px] font-[600] font-poppins  mt-[5px] w-[290px] ${isDarkmode ? "text-white" : "text-black"}`}>{item.title}</p>

                                <button className='flex items-center gap-[10px] mt-[10px]'>
                                    <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>
                                        {
                                            isDarkmode ?
                                                <Image src="/rightIcon.png" fill={true} alt='' className={`p-2 rounded-full bg-[#191919]`} />
                                                :
                                                <Image src="/rightIconDark.png" fill={true} alt='' className={`p-2 rounded-full bg-white`} />
                                        }
                                    </div>

                                    <p className={`text-[10px]  lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>View All Features</p>
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