"use client"

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./LatestSlider.css"

const LatestSlider = ({ datas }) => {

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}

        modules={[Pagination, Navigation]}
        navigation={true}
        className="myLatestSwipper"
      >
        {
          datas.map((data, i) => (
            <SwiperSlide key={i} className="">

              <div className="">
                <Image src={data.img} alt='' width={600} height={350} className="" />
              </div>

              <p className='text-[20px] font-[500] font-poppins text-white mt-2'>{data.title}</p>
              <h1 className='text-[40px] font-[800] font-poppins text-white '>{data.model}</h1>
              <button className='flex items-center gap-[10px]'>
                <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#191919]' />
                <p className='text-[15px] font-poppins text-white'>View All</p>
              </button>


            </SwiperSlide>
          ))
        }

      </Swiper>
    </>
  );
}

export default LatestSlider;