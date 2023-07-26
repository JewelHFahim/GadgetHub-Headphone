"use client"

import { ThemeContext } from '@/Context/AppContext';
import PrimaryTitle from '@/utils/PrimaryTitle'
import Image from 'next/image'
import React, { useContext } from 'react'
import { BsFillBuildingFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';


const Contact = () => {

    const { isDarkmode } = useContext(ThemeContext)

    return (
        <div className={`relative pt-[20px] ${isDarkmode ? "bg-bgPrimary" : "bg-white"}`}>

            <div className=''>
                <PrimaryTitle className="text-[30px] lg:text-[100px] lg:text-center lg:mr-[350px]">Contact</PrimaryTitle>
            </div>

            <div className={` lg:mr-[600px] md:pb-[200px] lg:pb-[400px] lg:mt-[-30px] absolute md:relative lg:relative z-[2] md-z[0] lg:z-[0] ${ isDarkmode ? "lg:bg-bgSecondary md:bg-bgSecondary" : " lg:bg-white md:bg-bgSecondary"} `}>

                <div className={` lg:pl-[250px] pb-[20px] lg:pb-4 pt-[40px] px-[20px] ${isDarkmode ? "bg-bgSecondary text-white" : "bg-white text-black"}`}>

                    <div className='flex flex-col lg:flex lg:flex-row gap-[15px] lg:gap-[25px]'>
                        <input type="text" placeholder='Enter your name...' className={`border w-[307px] h-[51px] lg:w-[350px] lg:h-[78px] px-[10px] bg-transparent rounded-[5px] ${isDarkmode ? "border-white border-opacity-[50%]" : "border-bgPrimary"}`} />

                        <input type="text" placeholder='Enter your name...' className={`border w-[307px] h-[51px] lg:w-[350px] lg:h-[78px] px-[10px] bg-transparent rounded-[5px] ${isDarkmode ? "border-white border-opacity-[50%]" : "border-bgPrimary"}`} />
                    </div>

                    <br />

                    <textarea id="message" rows="4" class={`block p-2.5 w-[307px] lg:w-[730px] rounded-[5px] border bg-transparent focus:none ${isDarkmode ? "border-white border-opacity-[50%]" : "border-bgPrimary"}`} placeholder="Write your thoughts here...">
                    </textarea>

                    <div className=' w-[307px] md:w-[350px] lg:w-[730px] flex justify-end mt-[20px] '>
                        <button className={`flex  items-center gap-[10px] border p-1.5 rounded-md ${isDarkmode ? "border-white border-opacity-[50%]" : "border-bgPrimary"}`}>
                            <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>
                                {isDarkmode ?
                                    <Image src="/rightIcon.png" fill={true} alt='' className={`p-2 rounded-full bg-[#191919]`} />
                                    :
                                    <Image src="/rightIconDark.png" fill={true} alt='' className={`p-2 rounded-full bg-bgOffWhite`} />
                                }
                            </div>
                            <p className={`text-[10px]  lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>View All</p>
                        </button>
                    </div>

                </div>

                <div className={`hidden md:block lg:block md:w-[330px] md:h-[] lg:w-[517px] lg:h-[695px] absolute md:right-[0px] lg:right-[-250px] top-[-40px] lg:top-[-80px] ${ isDarkmode ? "bg-white" : "bg-bgOffWhite border"}`}>

                    <p className='text-[30px] lg:text-[100px] font-[800] leading-[30px] lg:leading-[75px] text-[#000]'>US</p>


                    <div className='flex flex-col justify-center items-center gap-[20px] lg:mx-[120px] text-center'>
                        <BsFillBuildingFill className='text-[#646464] text-[32px]' />
                        <p className='text-[19px] font-poppins text-[#000]'>House: 00, Road: 00, Block: 0, XYZ, Dhaka </p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-[20px] lg:mx-[120px] text-center mt-[40px]'>
                        <HiMail className='text-[#646464] text-[42px]' />
                        <p className='text-[19px] font-poppins text-[#000]'>musicbuddy@mail.com</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-[20px] lg:mx-[120px] text-center mt-[40px]'>
                        <MdCall className='text-[#646464] text-[42px]' />
                        <p className='text-[19px] font-poppins text-[#000]'>+00 000 000 000</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mt-[30px]'>
                        <div className='w-[117px] h-[117px] relative'>
                            <Image src="/logoContact.svg" alt="" fill />
                        </div>
                        <PrimaryTitle className="text-[41px]">Music Buddy</PrimaryTitle>
                    </div>

                </div>

            </div>

            <div className='md:hidden lg:hidden absolute right-0 top-5 z-[1]'>
                <div className={`w-[230px] h-[800px] border md:border-0 lg:border-0 relative ${isDarkmode ? "bg-white" : "bg-bgOffWhite"} `}>

                    <p className='text-[30px] font-[800]'>US</p>

                    <div className='rotate-[-90deg] absolute right-[20px] top-[200px]'>
                        <PrimaryTitle className="text-[70px] leading-[80px] ">Contact</PrimaryTitle>
                    </div>

                    <div className='mt-[400px]'>

                        <div className='flex flex-col justify-center items-center gap-[10px] text-center'>
                            <BsFillBuildingFill className='text-[#646464] text-[32px]' />
                            <p className='text-[12px] font-poppins text-[#000]'>House: 00, Road: 00, Block: 0, XYZ, Dhaka </p>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-[10px] text-center mt-[20px]'>
                            <HiMail className='text-[#646464] text-[32px]' />
                            <p className='text-[12px] font-poppins text-[#000]'>musicbuddy@mail.com</p>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-[10px] lg:mx-[120px] text-center mt-[20px]'>
                            <MdCall className='text-[#646464] text-[32px]' />
                            <p className='text-[12px] font-poppins text-[#000]'>+00 000 000 000</p>
                        </div>

                        <div className='flex flex-col justify-center items-center mt-[10px]'>
                            <div className='w-[54px] h-[54px] relative'>
                                <Image src="/logoContact.svg" alt="" fill />
                            </div>
                            <PrimaryTitle className="text-[25px]">Music Buddy</PrimaryTitle>
                        </div>
                    </div>

                    <div className='rotate-[-90deg] absolute left-[-220px] bottom-[150px]'>
                        <PrimaryTitle className="text-[70px] leading-[80px]">Contact</PrimaryTitle>
                    </div>
                </div>
            </div>

            <div className='w-[100vw] h-[500px] lg:h-[1000px] relative pb-[20px] mt-[755px] md:mt-0 lg:mt-0'>
                <Image src="/map.png" alt="" fill />
            </div>

        </div>
    )
}

export default Contact