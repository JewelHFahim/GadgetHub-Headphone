"use client"

import { ThemeContext } from '@/Context/AppContext'
import CommonHeader from '@/utils/CommonHeader'
import FollowUs from '@/utils/FollowUs/FollowUs'
import PrimaryTitle from '@/utils/PrimaryTitle'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'


const Blog = () => {

    const { isDarkmode } = useContext(ThemeContext)

    const blogContainerH = "flex justify-between min-w-[200px] max-w-[547px] w-[10vw] md:w-[25vw] lg:w-[28.85vw] min-h-[200px] max-h-[550px] h-[15vh] md:h-[22vh] lg:h-[50.9vh] relative";

    const blogContainerV = "flex justify-between min-w-[200px] max-w-[554px] w-[10vw] md:w-[25vw] lg:w-[28.85vw] min-h-[200px] max-h-[345px] h-[15vh] md:h-[22vh] lg:h-[31.9vh] relative"


    return (
        <div>

            <CommonHeader />


            {/* Title */}
            <div className={`text-left lg:py-2 lg:pl-[94px] ${isDarkmode ? "bg-bgSecondary" : "bg-bgOffWhite"}`}>

                <p className={`font-poppins text-[25px] lg:text-[60px] font-[900] uppercase lg:leading-[50px] ml-[10px] lg:ml-0  ${isDarkmode ? "text-white"
                    : "text-black"}`} >Our</p>

                <div className="headsetPTitle pb-[10px]" >
                    <PrimaryTitle>Blog</PrimaryTitle>
                </div>
            </div>

            {/* Blog Content */}
            <div className={`flex justify-center py-[40px] lg:py-[75px] px-[10px] lg:px-[100px] ${isDarkmode ? "bg-bgPrimary" : "bg-white"}`}>

                <div className='grid items-center grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[100px]'>

                    {/* 1st */}
                    <Link href="/blog/1">
                        <div className={blogContainerV}>
                            <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>

                                <div className={` uppercase font-inter absolute left-[-63px] md:left-[-63px] lg:left-[-107px] bottom-[61px] md:bottom-[60px] lg:bottom-[104px] -rotate-90 ${isDarkmode ? "text-white" : "text-black"}`}>

                                    <h3 className=' text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap leading-[20px] md:leading-[24px] lg:leading-[40px] '>Headphone</h3>

                                    <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700] leading-[12px] md:leading-[12px] lg:leading-[20px]'>Headphone</h3>

                                </div>
                            </div>

                            <div className=' w-[83%] h-[100%] relative shadow-lg'>
                                <Image src="/gamingH1.png" alt='' fill />
                            </div>
                        </div>
                    </Link>

                    {/* 2nd- horizontal */}
                    <Link href="/blog/2">
                        <div className={blogContainerH}>

                            <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                                <div className={`uppercase font-inter absolute left-[-63px] md:left-[-63px] lg:left-[-107px] bottom-[61px] md:bottom-[60px] lg:bottom-[104px] -rotate-90 ${isDarkmode ? "text-white " : "text-black"}`}>

                                    <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap leading-[20px] md:leading-[24px] lg:leading-[40px]'>
                                        Headphone
                                    </h3>

                                    <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700] leading-[12px] md:leading-[12px] lg:leading-[20px]'>
                                        Headphone
                                    </h3>
                                </div>
                            </div>

                            <div className=' w-[84%] h-[100%] relative shadow-lg'>
                                <Image src="/gamingH1.png" alt='' fill />
                            </div>
                        </div>
                    </Link>

                    {/* 3rd */}
                    <Link href="/blog/3">
                        <div className=' flex justify-between min-w-[200px] max-w-[554px] w-[10vw] md:w-[25vw] lg:w-[28.85vw] min-h-[200px] max-h-[345px] h-[15vh] md:h-[22vh] lg:h-[31.9vh] relative'>

                            <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                                <div className={` uppercase font-inter absolute left-[-63px] md:left-[-63px] lg:left-[-107px] bottom-[61px] md:bottom-[60px] lg:bottom-[104px] -rotate-90 ${isDarkmode ? "text-white" : "text-black"}`}>

                                    <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap leading-[20px] md:leading-[24px] lg:leading-[40px]'>
                                        Headphone
                                    </h3>

                                    <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700] leading-[12px] md:leading-[12px] lg:leading-[20px]'>
                                        Headphone
                                    </h3>
                                </div>
                            </div>

                            <div className=' w-[83%] h-[100%] relative shadow-lg'>
                                <Image src="/gamingH1.png" alt='' fill />
                            </div>
                        </div>
                    </Link>

                    {/* 4th - horizontal*/}
                    <Link href="/blog/2">
                        <div className={blogContainerH}>

                            <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                                <div className={`uppercase font-inter absolute left-[-63px] md:left-[-63px] lg:left-[-107px] bottom-[61px] md:bottom-[60px] lg:bottom-[104px] -rotate-90 ${isDarkmode ? "text-white " : "text-black"}`}>

                                    <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap leading-[20px] md:leading-[24px] lg:leading-[40px]'>
                                        Headphone
                                    </h3>

                                    <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700] leading-[12px] md:leading-[12px] lg:leading-[20px]'>
                                        Headphone
                                    </h3>
                                </div>
                            </div>

                            <div className=' w-[84%] h-[100%] relative shadow-lg'>
                                <Image src="/gamingH1.png" alt='' fill />
                            </div>
                        </div>
                    </Link>


                    {/* 5th */}
                    <Link href="/blog/3">
                        <div className=' flex justify-between min-w-[200px] max-w-[554px] w-[10vw] md:w-[25vw] lg:w-[28.85vw] min-h-[200px] max-h-[345px] h-[15vh] md:h-[22vh] lg:h-[31.9vh] relative'>

                            <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                                <div className={` uppercase font-inter absolute left-[-63px] md:left-[-63px] lg:left-[-107px] bottom-[61px] md:bottom-[60px] lg:bottom-[104px] -rotate-90 ${isDarkmode ? "text-white" : "text-black"}`}>

                                    <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap leading-[20px] md:leading-[24px] lg:leading-[40px]'>
                                        Headphone
                                    </h3>

                                    <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700] leading-[12px] md:leading-[12px] lg:leading-[20px]'>
                                        Headphone
                                    </h3>
                                </div>
                            </div>

                            <div className=' w-[83%] h-[100%] relative shadow-lg'>
                                <Image src="/gamingH1.png" alt='' fill />
                            </div>
                        </div>
                    </Link>


                    {/* 6th - horizontal*/}
                    <Link href="/blog/2">
                        <div className={blogContainerH}>

                            <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                                <div className={`uppercase font-inter absolute left-[-63px] md:left-[-63px] lg:left-[-107px] bottom-[61px] md:bottom-[60px] lg:bottom-[104px] -rotate-90 ${isDarkmode ? "text-white " : "text-black"}`}>

                                    <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap leading-[20px] md:leading-[24px] lg:leading-[40px]'>
                                        Headphone
                                    </h3>

                                    <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700] leading-[12px] md:leading-[12px] lg:leading-[20px]'>
                                        Headphone
                                    </h3>
                                </div>
                            </div>

                            <div className=' w-[84%] h-[100%] relative shadow-lg'>
                                <Image src="/gamingH1.png" alt='' fill />
                            </div>
                        </div>
                    </Link>


                    {/* 7th */}
                    <Link href="/blog/3">
                        <div className=' flex justify-between min-w-[200px] max-w-[554px] w-[10vw] md:w-[25vw] lg:w-[28.85vw] min-h-[200px] max-h-[345px] h-[15vh] md:h-[22vh] lg:h-[31.9vh] relative'>

                            <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                                <div className={` uppercase font-inter absolute left-[-63px] md:left-[-63px] lg:left-[-107px] bottom-[61px] md:bottom-[60px] lg:bottom-[104px] -rotate-90 ${isDarkmode ? "text-white" : "text-black"}`}>

                                    <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap leading-[20px] md:leading-[24px] lg:leading-[40px]'>
                                        Headphone
                                    </h3>

                                    <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700] leading-[12px] md:leading-[12px] lg:leading-[20px]'>
                                        Headphone
                                    </h3>
                                </div>
                            </div>

                            <div className=' w-[83%] h-[100%] relative shadow-lg'>
                                <Image src="/gamingH1.png" alt='' fill />
                            </div>
                        </div>
                    </Link>


                    {/* 8th - horizontal*/}
                    <Link href="/blog/2">
                        <div className={blogContainerH}>

                            <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                                <div className={`uppercase font-inter absolute left-[-63px] md:left-[-63px] lg:left-[-107px] bottom-[61px] md:bottom-[60px] lg:bottom-[104px] -rotate-90 ${isDarkmode ? "text-white " : "text-black"}`}>

                                    <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap leading-[20px] md:leading-[24px] lg:leading-[40px]'>
                                        Headphone
                                    </h3>

                                    <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700] leading-[12px] md:leading-[12px] lg:leading-[20px]'>
                                        Headphone
                                    </h3>
                                </div>
                            </div>

                            <div className=' w-[84%] h-[100%] relative shadow-lg'>
                                <Image src="/gamingH1.png" alt='' fill />
                            </div>
                        </div>
                    </Link>


                    {/* 9th */}
                    <Link href="/blog/3">
                        <div className=' flex justify-between min-w-[200px] max-w-[554px] w-[10vw] md:w-[25vw] lg:w-[28.85vw] min-h-[200px] max-h-[345px] h-[15vh] md:h-[22vh] lg:h-[31.9vh] relative'>

                            <div className='w-[40px] md:w-[50px] lg:w-[66px] h-full'>
                                <div className={` uppercase font-inter absolute left-[-63px] md:left-[-63px] lg:left-[-107px] bottom-[61px] md:bottom-[60px] lg:bottom-[104px] -rotate-90 ${isDarkmode ? "text-white" : "text-black"}`}>

                                    <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap leading-[20px] md:leading-[24px] lg:leading-[40px]'>
                                        Headphone
                                    </h3>

                                    <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700] leading-[12px] md:leading-[12px] lg:leading-[20px]'>
                                        Headphone
                                    </h3>
                                </div>
                            </div>

                            <div className=' w-[83%] h-[100%] relative shadow-lg'>
                                <Image src="/gamingH1.png" alt='' fill />
                            </div>
                        </div>
                    </Link>

                </div>
                
            </div>


            {/* navigation btn */}
            <div className={`flex justify-around items-center ${isDarkmode ? "bg-bgPrimary" : "bg-white"}`}>

                <div className='w-[51px] h-[41px] relative'>
                    <Image src="/leftIcon.png" alt="" fill />
                </div>

                <div className='w-[189.88px] h-[27.49px] relative'>
                    <Image src="/slideDots2.png" alt="" fill />
                </div>

                <div className='w-[51px] h-[41px] relative'>
                    <Image src="/rightIcon.png" alt="" fill />
                </div>

            </div>

        </div>
    )
}

export default Blog