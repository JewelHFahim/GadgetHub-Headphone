import Image from 'next/image'
import React from 'react';
import styels from "./HeaderSlider.module.css";
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import HeaderSlide from '@/utils/HeaderSlide';



const HeaderSlider = () => {
    return (
        <div className={`${styels.container} relative`}>

            {/* Menu */}
            <button>
                <div className='flex items-center w-[150px] rotate-[-90deg] absolute right-[-32px]'>
                    <h2 className={`${styels.textStrock} font-poppins`}>MENU</h2>
                    <HiMenuAlt1 className='text-[35px] text-white' />
                </div>
            </button>

            {/* Slider */}
            <div className="w-full">
                <HeaderSlide />
            </div>

            {/* Follow Us Icons */}
            <div className='absolute left-[-170px] bottom-[126px] rotate-[-90deg] flex items-center gap-[20px] z-[999]'>

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