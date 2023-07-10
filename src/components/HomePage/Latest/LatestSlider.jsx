"use client"

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./LatestSlider.css"

const LatestSlider = ({ datas }) => {

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
        className="myLatestSwipper"
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
                <p className='text-[20px] font-[500] font-poppins text-white '>{data.title}</p>
                <h1 className='text-[20px] lg:text-[40px] font-[800] font-poppins text-white '>{data.model}</h1>
                <button className='flex items-center gap-[10px]'>

                  <div className="w-[25px] h-[25px] lg:w-[44px] lg:h-[44px] relative">
                    <Image src="/rightIcon.png" alt="" fill className='p-1 rounded-full bg-[#191919]' />
                  </div>

                  <p className='text-[12px] lg:text-[15px] font-poppins text-white'>View All</p>
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