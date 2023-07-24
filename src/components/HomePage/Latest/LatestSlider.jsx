"use client"

import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./LatestSlider.css"
import { ThemeContext } from "@/Context/AppContext";

const LatestSlider = ({ datas }) => {

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



  return (
    <>

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
        className={`myLatestSwipper ${isDarkmode ? "forDarkMode" : "forLightMode"}`}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {
          datas.map((data, i) => (
            <SwiperSlide key={i} className="">

              <div className="">
                <Image src={data.img} alt='' width={600} height={350} className="" />
              </div>

              <div className=" mt-[-110px] pl-[10px] lg:pl-[0px] lg:mt-2">

                <p className={`text-[20px] font-[500] font-poppins  ${ isDarkmode ? "text-white" : "text-black"}`}>{data.title}</p>

                <h1 className={`text-[20px] lg:text-[40px] font-[800] font-poppins ${ isDarkmode ? "text-white" : "text-black"}`}>{data.model}</h1>
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

            </SwiperSlide>
          ))
        }

      </Swiper >


    </>

  );
}

export default LatestSlider;