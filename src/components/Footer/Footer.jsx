import React from 'react'
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import PrimaryTitle from '@/utils/PrimaryTitle';


const Footer = () => {

    return (
        <div className='mt-[30px] lg:mt-[57px] lg:mx-[315px] mx-[42px] pb-[20px]'>

            <div className='flex flex-col justify-center  items-center lg:gap-[20px]'>

                <div className='w-[64px] h-[64px] lg:w-[138px] lg:h-[138px] relative'>
                    <Image src="/Logo2.png" alt='' fill />
                </div>

                <div className="text-center">
                    <PrimaryTitle className="text-[35px] lg:text-[120px] font-poppins" >Microbuddy</PrimaryTitle>
                </div>

                <div className='flex items-center gap-[30px] text-[22px] text-white'>
                    <button><FaFacebookF /></button>
                    <button><FaInstagram /></button>
                    <button><FaTwitter /></button>
                    <button><FaTiktok /></button>
                    <button> <FaYoutube /></button>
                </div>
            </div>

            <div className='mt-[40px] lg:mt-[60px] grid grid-cols-1 gap-[26px] lg:flex justify-between items-center text-center lg:text-left'>

                <div className='flex lg:block flex-col items-center'>
                    <p className='text-[25px] font-[600] font-poppins text-white'> PAGES</p>
                    <div className='flex items-center gap-[4px]'>
                        <span className='w-[21px] h-[1px] bg-white'></span>
                        <span className='w-[11px] h-[1px] bg-white'></span>
                        <span className='w-[87px] h-[1px] bg-white'></span>
                    </div>
                    <p className='text-[15px] font-[600] font-poppins text-white text-opacity-[50%] mt-6'>HOME</p>
                    <p className='text-[15px] font-[600] font-poppins text-white text-opacity-[50%] my-2'>ABOUT US</p>
                    <p className='text-[15px] font-[600] font-poppins text-white text-opacity-[50%]'>CONTACT US</p>
                </div>

                <div className='flex lg:block flex-col items-center'>
                    <p className='text-[25px] font-[600] font-poppins text-white'> CONTACT</p>
                    <div className='flex items-center gap-[4px]'>
                        <span className='w-[21px] h-[1px] bg-white'></span>
                        <span className='w-[11px] h-[1px] bg-white'></span>
                        <span className='w-[87px] h-[1px] bg-white'></span>
                    </div>
                    <p className='text-[15px] font-[600] font-poppins text-white text-opacity-[50%] mt-6'>+00 000 000</p>
                    <p className='text-[15px] font-[600] font-poppins text-white text-opacity-[50%] my-2'>+00 000 000</p>
                    <p className='text-[15px] font-[600] font-poppins text-white text-opacity-[50%]'>info@company.com</p>
                </div>

                <div className='flex lg:block flex-col items-center'>
                    <p className='text-[25px] font-[600] font-poppins text-white'> ADDRESS</p>
                    <div className='flex items-center gap-[4px]'>
                        <span className='w-[21px] h-[1px] bg-white'></span>
                        <span className='w-[11px] h-[1px] bg-white'></span>
                        <span className='w-[87px] h-[1px] bg-white'></span>
                    </div>
                    <p className='text-[15px] font-[600] font-poppins text-white text-opacity-[50%] mt-6'>Company Location- Wolrd</p>
                </div>

            </div>

            <div className='mt-[40px] lg:mt-[111px] text-center'>
                <div className='w-full h-[1px] bg-white bg-opacity-[50%]'></div>
                <p className='mt-[10px] text-[20px] font-[500] font-poppins text-white text-opacity-[50%]'>@Copyright
                    <span className='text-white '>“MicroBuddy”</span>
                </p>
            </div>


        </div>
    )
}

export default Footer