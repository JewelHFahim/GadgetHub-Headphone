import React, { useContext } from 'react'
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import PrimaryTitle from '@/utils/PrimaryTitle';
import { ThemeContext } from '@/Context/AppContext';


const Footer = () => {

    const { isDarkmode} = useContext(ThemeContext);

    const threeLine = isDarkmode ? "h-[1px] bg-white" : "h-[1px] bg-black"

    return (
        <div className={`pt-[30px] lg:pt-[57px] lg:px-[14vw] px-[42px] pb-[20px] ${ isDarkmode ? "bg-bgPrimary" : ""}`}>

            <div className='flex flex-col justify-center  items-center lg:gap-[0px]'>

                <div className='w-[64px] h-[64px] lg:w-[138px] lg:h-[138px] relative'>
                    {
                        isDarkmode ? <Image src="/Logo2.png" alt='' fill /> : <Image src="/darkLogo.png" alt='' fill />
                    }
                </div>

                <div className="text-center">
                    <PrimaryTitle className="text-[35px] lg:text-[120px] font-poppins lg:leading-[120px]" >Music Buddy</PrimaryTitle>
                </div>

                <div className={`flex items-center gap-[30px] text-[22px]  ${ isDarkmode ? "text-white" : "text-black"}`}>
                    <button><FaFacebookF /></button>
                    <button><FaInstagram /></button>
                    <button><FaTwitter /></button>
                    <button><FaTiktok /></button>
                    <button> <FaYoutube /></button>
                </div>
            </div>

            <div className={`mt-[40px] lg:mt-[60px] grid grid-cols-1 gap-[26px] lg:flex justify-between items-center text-center lg:text-left ${ isDarkmode ? "text-white" : "text-black"}`}>

                <div className='flex lg:block flex-col items-center'>
                    <p className='text-[25px] font-[600] font-poppins '> PAGES</p>
                    <div className='flex items-center gap-[4px]'>
                        <span className={`w-[21px] ${threeLine}`}></span>
                        <span className={`w-[11px] ${threeLine}`}></span>
                        <span className={`w-[87px] ${threeLine}`}></span>
                    </div>
                    <p className='text-[15px] font-[600] font-poppins  text-opacity-[50%] mt-6'>HOME</p>
                    <p className='text-[15px] font-[600] font-poppins  text-opacity-[50%] my-2'>ABOUT US</p>
                    <p className='text-[15px] font-[600] font-poppins  text-opacity-[50%]'>CONTACT US</p>
                </div>

                <div className='flex lg:block flex-col items-center'>
                    <p className='text-[25px] font-[600] font-poppins '> CONTACT</p>
                    <div className='flex items-center gap-[4px]'>
                        <span className={`w-[21px] ${threeLine}`}></span>
                        <span className={`w-[11px] ${threeLine}`}></span>
                        <span className={`w-[87px] ${threeLine}`}></span>
                    </div>
                    <p className='text-[15px] font-[600] font-poppins  text-opacity-[50%] mt-6'>+00 000 000</p>
                    <p className='text-[15px] font-[600] font-poppins  text-opacity-[50%] my-2'>+00 000 000</p>
                    <p className='text-[15px] font-[600] font-poppins  text-opacity-[50%]'>info@company.com</p>
                </div>

                <div className='flex lg:block flex-col items-center'>
                    <p className='text-[25px] font-[600] font-poppins '> ADDRESS</p>
                    <div className='flex items-center gap-[4px]'>
                        <span className={`w-[21px] ${threeLine}`}></span>
                        <span className={`w-[11px] ${threeLine}`}></span>
                        <span className={`w-[87px] ${threeLine}`}></span>
                    </div>
                    <p className='text-[15px] font-[600] font-poppins  text-opacity-[50%] mt-6'>Company Location- Wolrd</p>
                </div>

            </div>

            <div className='mt-[40px] lg:mt-[111px] text-center'>
                <div className={`w-full h-[1px]  ${ isDarkmode ? "bg-white bg-opacity-[50%]" : "bg-black"}`}></div>
                <p className={`mt-[10px] text-[20px] font-[500] font-poppins  ${ isDarkmode ? "text-white text-opacity-[50%]" : "text-black"}`}>@Copyright
                    <span className={`${ isDarkmode ? "text-white text-opacity-[50%]" : "text-black"}`}>MicroBuddy”</span>
                </p>
            </div>


        </div>
    )
}

export default Footer