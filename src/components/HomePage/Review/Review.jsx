"use client"

import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./Review.css"
import { GrStar } from 'react-icons/gr';
import { IoStarOutline } from 'react-icons/io5';
import SubTitle from "@/utils/Subtitle";
import PrimaryTitle from "@/utils/PrimaryTitle";
import { ThemeContext } from "@/Context/AppContext";


const Review = () => {

    const { isDarkmode } = useContext(ThemeContext)

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
        <div className={`py-[24px] lg:pt-[120px] px-[10px] lg:px-[200px] relative ${ isDarkmode ? "bg-bgSecondary" : " bg-bgOffWhite" }`}>

            <div className="flex flex-col items-center">
                <SubTitle className={`text-[30px] lg:text-[60px] font-[800px] ${ isDarkmode ? "text-white" : " text-black" }`}>Public</SubTitle>
                <PrimaryTitle className="text-[50px] lg:text-[130px] leading-[20px] lg:leading-[110px]" >Review</PrimaryTitle>
            </div>

            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={80}
                loop={true}
                centeredSlides={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}

                modules={[Pagination, Navigation]}
                navigation={true}
                className={`myReviewSwipper ${ isDarkmode ? "forDarkMode" : "forLightMode"}`}

                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    datas.map((data, i) => (
                        <SwiperSlide key={i}>

                            <div  className={`w-[80%] h-[153px]  mx-auto lg:w-[460px] lg:h-[200px] border relative ${ isDarkmode ? "border" : "border border-black"}`}> 
                                <div className='absolute top-[-40px] lg:top-[-60px] left-[40%] lg:left-[185px] '>
                                <div className="w-[71px] h-[71px] lg:w-[100px] lg:h-[100px] relative">
                                    <Image src={data.img} fill alt="" />
                                </div>
                            </div>

                                <div className={`flex gap-1 text-[17px] lg:text-[23px] justify-center mt-[40px] lg:mt-[60px]  ${ isDarkmode ? "text-white" : "text-black"}`}>
                                <GrStar />
                                <GrStar />
                                <GrStar />
                                <GrStar />
                                <IoStarOutline />
                            </div>

                            <p className={`px-[50px] lg:px-[89px] pb-[29px] pt-[10px] text-center text-[10px] lg:text-[12px] font-poppins  ${ isDarkmode ? "text-white text-opacity-[50%]" : "text-black"}`}>
                                {data.desc}
                            </p>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

            <div className={`w-[350px] hidden lg:block h-full absolute left-0 top-0 ${ isDarkmode ? "bgGradient1" : "bg-gradient-to-r from-bgOffWhite from-80% to-bgOffWhite to-20%" } z-[999]`} />

            <div className={`w-[320px] hidden lg:block h-full absolute right-0 top-0 bg-red-60  ${ isDarkmode ? "bgGradient1" : "bg-gradient-to-l from-bgOffWhite from-20% to-bgOffWhite to-80%" } z-[999]`} />


        </div>
    )
}

export default Review