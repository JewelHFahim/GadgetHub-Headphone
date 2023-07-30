"use client"

import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import "./HeaderSlide.css"
import { ThemeContext } from "@/Context/AppContext";

const HeaderSlide = () => {

  const { isDarkmode } = useContext(ThemeContext);

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
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className={`myHeaderSwiper ${ isDarkmode ? "forDarkMode" : "forLightMode"}`}
        navigation={true}
        loop={true}
        >
        {
          datas.map((item, i) => (
            <SwiperSlide key={i}>
              <div className='imgConatainer'>

                <div className={` w-[100%] lg:h-[95vh] relative `}>
                <Image src={item.img} alt='' fill={true} className=" pt-0 p-[85px]" />
                </div>

                {/* <Image src={item.img} alt='' fill={true} className='img' /> */}


              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  );
}

export default HeaderSlide;