import React from 'react';
import styels from "./Header.module.css";
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import HeaderSlide from '@/components/HomePage/Header/HeaderSlide';
import 'react-modern-drawer/dist/index.css'

const HeaderSlider = () => {


    return (
        <div className={`${styels.container} relative`}>


            {/* Slider */}
            <div className="w-full">
                <HeaderSlide />
            </div>

            {/* Follow Us Icons */}
            <div className='hidden  absolute left-[-170px] bottom-[126px] rotate-[-90deg] lg:flex items-center gap-[20px] z-[99]'>

                <button>
                    <div className='w-[61px] h-[31px] border-[3px] border-[#C5C5C5] border-opacity-[50%] rounded-[47px] flex justify-end items-center'>
                        <div className='w-[14px] h-[3px] bg-white bg-opacity-[50%] rounded-[30px] mr-4'></div>
                    </div>
                </button>

                <div className='w-[342px] h-[24px] flex items-center gap-[14px]  rotate-[-360deg]'>
                    <p className='text-[20px] font-[500] font-inter text-[#C5C5C5]'>FOLLOW US</p>

                    <div className='w-[91px] h-[1px] bg-[#C5C5C5]'></div>

                    <div className='flex items-center gap-[18px]'>
                        <button><FaFacebookF className='text-[20px] text-[#C5C5C5] rotate-[90deg]' /></button>
                        <button><FaYoutube className='text-[20px] text-[#C5C5C5] rotate-[90deg]' /></button>
                        <button> <FaTwitter className='text-[20px] text-[#C5C5C5] rotate-[90deg]' /></button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeaderSlider