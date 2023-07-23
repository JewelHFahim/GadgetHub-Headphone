"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./HeaderSlide.css"

const HeaderSlide = () => {

  const datas = [
    {
      img: "/slideImg1.png"
    },
    {
      img: "/slideImg2.jpg"
    },
    {
      img: "/slideImg3.jpg"
    },
    {
      img: "/slideImg4.jpg"
    },

  ]


  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          // type: "fraction",
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="myHeaderSwiper"
        navigation={true}
        loop={true}
      // autoplay={{
      //   delay: 3500,
      //   disableOnInteraction: false,
      // }}

      >

        {
          datas.map((item, i) => (
            <SwiperSlide key={i}>
              <div className='imgConatainer'>
                <Image src={item.img} alt='' fill={true} className='img ' />
              </div>
            </SwiperSlide>
          ))
        }

     
      </Swiper>

    </div>
  );
}

export default HeaderSlide;