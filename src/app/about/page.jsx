"use client"

import Image from 'next/image'
import React, { useContext } from 'react'
import styles from "./about.module.css"
import FeatureSlider from '@/components/HomePage/Feature/FeatureSlider'
import SubTitle from '@/utils/Subtitle'
import PrimaryTitle from '@/utils/PrimaryTitle'
import LatestSlider from '@/components/HomePage/Latest/LatestSlider'
import Gallery from './Gallery'
import { ThemeContext } from '@/Context/AppContext'
import FollowUs from '@/utils/FollowUs/FollowUs'

const About = () => {



    const { isDarkmode } = useContext(ThemeContext)

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt pellentesque. Fu fringilla,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt pellentesque. Fu fringilla,"



    const services = [
        {
            title: ` GAMING HEADPHONE`,
            desc: description,
            icon: isDarkmode ? "/GHeadphone.svg" : "/GHeadphoneDark.png"
        },
        {
            title: " WARRANTY SERVICE",
            desc: description,
            icon: isDarkmode ? "/WService.svg" : "/WServiceDark.png"
        },
        {
            title: " 24HOUR SERVICE",
            desc: description,
            icon: isDarkmode ? "/SService.svg" : "/SServiceDark.png"

        },
        {
            title: ` GAMING HEADPHONE`,
            desc: description,
            icon: isDarkmode ? "/GHeadphone.svg" : "/GHeadphoneDark.png"
        },
        {
            title: " WARRANTY SERVICE",
            desc: description,
            icon: isDarkmode ? "/WService.svg" : "/WServiceDark.png",
        },
        {
            title: " 24HOUR SERVICE",
            desc: description,
            icon: isDarkmode ? "/SService.svg" : "/SServiceDark.png"

        },

    ]

    const datas = [
        {
            title: 'Gaming',
            model: 'HEADSET HG250',
            img: "/LatestHP1.png"
        },
        {
            title: 'Music',
            model: 'HEADPHONE  H60 ',
            img: "/LatestHP2.png"
        },
        {
            title: 'Gaming',
            model: 'HEADSET Hk250',
            img: "/LatestHP1.png"
        },
        {
            title: 'Gaming',
            model: 'HEADSET HG250',
            img: "/LatestHP1.png"
        },
        {
            title: 'Music',
            model: 'HEADPHONE  H60 ',
            img: "/LatestHP2.png"
        },
        {
            title: 'Gaming',
            model: 'HEADSET Hk250',
            img: "/LatestHP1.png"
        },
    ]


    return (
        <div className={`relative ${isDarkmode ? "bg-bgPrimary" : "bg-white"} `}>



            <div className='hidden lg:block absolute right-[-150px] top-[485px]'>
                <FollowUs />
            </div>



            {/* Header */}
            <div className={` ${styles.commonCont} ${isDarkmode ? styles.forDarkMode : styles.forLightMode} `}>
                <div className={styles.commonImgCont}>
                    <Image src="/blogPost.png" alt='' width={1715} height={700} className={styles.commonImg} />
                </div>
                <div className=' mx-[10px] lg:mx-[100px] '>
                    <h1 className={`text-[25px] lg:text-[80px] font-[600] lg:leading-[120px] uppercase ${isDarkmode ? "text-white" : "text-black"}`}>About Us</h1>
                </div>
            </div>

            {/* two display image */}
            <div className={`flex justify-center gap-[20px] md:gap-[50px] lg:gap-[100px] pt-[25px] md:pt-[45px] lg:pt-[70px] mx-[10pz] ${isDarkmode ? "bg-bgPrimary" : ""}`}>

                <div className='md:w-[296px] lg:w-[592px] mt-[80px] md:mt-[120px] lg:mt-[157px]'>
                    <h2 className={`text-[15px] md:text-[25px] lg:text-[80px] font-[700] font-inter  uppercase lg:leading-[90px] ${isDarkmode ? "text-white" : "text-black"}`}>Headphone</h2>
                    <p className={` ${isDarkmode ? "text-white text-opacity-[50%]" : "text-black"}`}>Headphone</p>
                    <p className={`hidden md:hidden lg:block text-[15px] pb-[10px] ${isDarkmode ? "text-white text-opacity-[50%]" : "text-black"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit doloribus adipisci pariatur deleniti, optio eum, sint eos temporibus ratione dolorem perferendis ipsam blanditiis? Harum.</p>
                    <div className='w-[172px] h-[218px] md:w-[296px] md:h-[333px] lg:w-[592px] lg:h-[666px] relative'>
                        <Image src="/aboutH1.png" alt="" fill />
                    </div>
                </div>

                <div className='md:w-[296px] lg:w-[592px]'>
                    <div className='w-[172px] h-[218px] md:w-[296px] md:h-[333px] lg:w-[592px] lg:h-[666px] relative'>
                        <Image src="/aboutH2.png" alt="" fill />
                    </div>

                    <h2 className={`text-[15px] md:text-[25px] lg:text-[80px] font-[700] font-inter  uppercase lg:leading-[90px] ${isDarkmode ? "text-white" : "text-black"}`}>Headphone</h2>
                    <p className={`text-opacity-[50%] lg:hidden ${isDarkmode ? "text-white" : "text-black"}`}>Headphone</p>
                    <p className={`hidden md:hidden lg:block text-[15px] ${isDarkmode ? "text-white text-opacity-[50%]" : "text-black"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit doloribus adipisci pariatur deleniti, optio eum, sint eos temporibus ratione dolorem perferendis ipsam blanditiis? Harum.</p>
                </div>

            </div>

            {/* Desktop Service Section */}
            <div className={`hidden mt-[10px] lg:grid lg:grid-cols-3 justify-center md:gap-[20px] lg:gap-[37px] md:px-[150px] lg:px-[15vw] py-[85px]  ${isDarkmode ? "bg-bgSecondary" : "bg-bgOffWhite"}`}>
                {
                    services.map((item, i) => (
                        <div key={i} className={`w-[100%] h-[100%] border p-[8%] ${isDarkmode ? "border-white border-opacity-[50%]" : "border-black"}`}>
                            <div className='flex items-center gap-[32px]'>
                                <Image src={item.icon} alt="" width={85} height={80} />

                                <h2 className={`text-[30px] font-[800] font-poppins ${isDarkmode ? "text-white" : "text-black"}`}>{item.title}</h2>
                            </div>
                            <p className={`mt-[58px] text-[12px] font-[300]  ${isDarkmode ? "text-white text-opacity-[50%]" : "text-black"}`}>
                                {item.desc}
                            </p>

                            <button className='flex items-center gap-[10px] mt-[53px]'>
                                <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>

                                    {
                                        isDarkmode ?
                                            <Image src="/rightIcon.png" fill={true} alt='' className={`p-2 rounded-full bg-bgPrimary`} />
                                            :
                                            <Image src="/rightIconDark.png" fill={true} alt='' className={`p-2 rounded-full bg-white`} />
                                    }

                                </div>

                                <p className={`text-[10px]  lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>View All Feature</p>
                            </button>
                        </div>
                    ))
                }

            </div>

            {/* Mobile Service Section */}
            <div className={`lg:hidden px-[10px] my-[40px] pt-[30px] ${isDarkmode ? "bg-bgPrimary" : "bg-bgOffWhite"}`}>
                <FeatureSlider services={services} />
            </div>

            {/* WE BUILD YOUR DEMAND */}
            <div className='relative font-poppins flex flex-col items-center mb-[150px]'>

                <div className={`w-[250px] h-[239px] md:w-[500px] md:h-[200px] lg:w-[1285px] lg:h-[393px]  absolute z-[1] bottom-[-100px] flex flex-col items-center justify-center px-[20px] ${isDarkmode ? "bg-gradient-to-t from-bgSecondary from-30%" : "bg-gradient-to-t from-bgOffWhite from-30%"}`}>

                    <h3 className={`text-[25px] md:text-[40px] lg:text-[90px]  font-[800] uppercase leading-[50px] lg:leading-[100px] ${isDarkmode ? "text-[#D9D9D9]" : "text-black"}`}>WE BUILD YOUR DEMAND</h3>

                    <p className={`text-[15px]  text-opacity-[50%] text-center ${isDarkmode ? "text-white" : "text-black"}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        <span className='hidden md:hidden lg:block'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
                            dummy text ever since the 1500s,
                        </span>
                    </p>

                </div>

                <div className='w-[100%] h-[250px] md:h-[424px] lg:h-[848px] relative'>
                    <Image src="/aboutBg1.png" alt="" fill />
                </div>

            </div>

            {/* Best Headphone */}
            <div className=' lg:ml-[16vw] mt-[26px] lg:mt-[180px]'>
                <div className='flex justify-between items-center lg:mr-[315px]'>

                    <div className=''>
                        <SubTitle className={`text-[30px] lg:text-[60px] leading-[70px] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>OUR BEST</SubTitle>
                        <PrimaryTitle className="text-[60px] mt-[-30px] lg:mt-[0px] lg:text-[120px] font-poppins leading-[100px]" >HEADSET</PrimaryTitle>
                    </div>

                    <button className='hidden lg:flex items-center gap-[10px]'>
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

                <div className='mt-[20px]'>
                    <LatestSlider datas={datas} />
                </div>

            </div>

            {/* Headphone Daily Use */}
            <div className={` pl-[50px] px-[20px] md:px-[60px] lg:px-[18vw] pb-[40px] pt-[100px] mt-[20px] ${isDarkmode ? "bg-bgSecondary" : "bg-bgOffWhite"}`}>

                <div className='flex items-center gap-[20px] md:gap-[50px] lg:gap-[150px]'>

                    <div className={`w-[151px] h-[225px] md:w-[151px] md:h-[225px] lg:w-[375px] lg:h-[560px] border-2  relative ${isDarkmode ? "border-white border-opacity-[50%]" : "border-bgSecondary"}`}>

                        <div className='absolute left-[-30px] top-[-30px] md:left-[-20px] md:top-[-30px] lg:left-[-50px] lg:top-[-60px]'>
                            <div className='w-[151px] h-[225px] md:w-[151px] md:h-[225px] lg:w-[375px] lg:h-[560px] relative'>
                                <Image src="/HD1.png" alt="" fill />
                            </div>
                        </div>

                        <div className='absolute right-[-105px] top-[-5px] md:right-[-103px] md:top-[30px] lg:right-[-93px] lg:top-[100px] flex gap-[8px] lg:gap-[12px] items-center rotate-[-90deg] w-[220px]'>
                            <p className={`text-[8px] md:text-[10px] lg:text-[14px] font-[600] font-poppins  text-opacity-[50%] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>30 AUGUST 2023</p>
                            <div className={`w-[30px] md:w-[50px]  lg:w-[78px] h-[2px] ${isDarkmode ? "bg-white bg-opacity-[50%] " : "bg-bgPrimary"}`}></div>
                        </div>

                        <button className='flex items-center gap-[10px] absolute bottom-0 left-0 md:bottom-[0px] md-left-[0px] lg:bottom-[10px] lg:left-[10px]'>
                            <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>

                                {isDarkmode ?
                                    <Image src="/rightIcon.png" fill={true} alt='' className={`p-2 rounded-full bg-[#191919]`} />
                                    :
                                    <Image src="/rightIconDark.png" fill={true} alt='' className={`p-2 rounded-full bg-white`} />
                                }

                            </div>

                            <p className={`text-[10px]  lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>View All</p>
                        </button>

                    </div>

                    <div className='w-[200px] md:w-[350px] lg:w-1/2'>
                        <h2 className={`text-[20px] md:text-[25px] lg:text-[60px] font-[700] font-poppins ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Headphone Daily Use As ...</h2>
                        <p className={`text-[10px] ${isDarkmode ? "text-white text-opacity-[50%]" : "text-bgPrimary"}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,Lorem Ipsum </p>
                    </div>

                </div>

                <div className='flex items-center gap-[40px] md:gap-[50px] lg:gap-[150px]'>

                    <div className='w-[200px] md:w-[350px] lg:w-1/2'>
                        <h2 className={`text-[20px] md:text-[25px] lg:text-[60px] font-[700] font-poppins ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Headphone Daily Use As ...</h2>
                        <p className={`text-[10px] ${isDarkmode ? "text-white text-opacity-[50%]" : "text-bgPrimary"}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,Lorem Ipsum </p>
                    </div>

                    <div className={`w-[151px] h-[225px] md:w-[151px] md:h-[225px] lg:w-[375px] lg:h-[560px] border-2  relative ${isDarkmode ? "border-white border-opacity-[50%]" : "border-bgPrimary"}`}>

                        <div className='absolute left-[-30px] top-[-30px] md:left-[-20px] md:top-[-30px] lg:left-[-50px] lg:top-[-60px]'>
                            <div className='w-[151px] h-[225px] md:w-[151px] md:h-[225px] lg:w-[375px] lg:h-[560px] relative'>
                                <Image src="/HD2.png" alt="" fill />
                            </div>
                        </div>

                        <div className='absolute right-[-105px] top-[-5px] md:right-[-103px] md:top-[30px] lg:right-[-93px] lg:top-[100px] flex gap-[8px] lg:gap-[12px] items-center rotate-[-90deg] w-[220px]'>
                            <p className={`text-[8px] md:text-[10px] lg:text-[14px] font-[600] font-poppins  ${isDarkmode ? "text-white text-opacity-[50%]" : "text-bgPrimary"}`}>30 AUGUST 2023</p>
                            <div className={` w-[30px] md:w-[50px]  lg:w-[78px] h-[2px]  ${isDarkmode ? "bg-white bg-opacity-[50%]" : "bg-bgPrimary"}`}></div>
                        </div>

                        <button className='flex items-center gap-[10px] absolute bottom-0 left-0 md:bottom-[0px] md-left-[0px] lg:bottom-[10px] lg:left-[10px]'>
                            <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>

                                {isDarkmode ?
                                    <Image src="/rightIcon.png" fill={true} alt='' className={`p-2 rounded-full bg-[#191919]`} />
                                    :
                                    <Image src="/rightIconDark.png" fill={true} alt='' className={`p-2 rounded-full bg-white`} />
                                }

                            </div>

                            <p className={`text-[10px]  lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>View All</p>
                        </button>

                    </div>

                </div>

            </div>

            {/* Gallery */}
            <div className={` ${isDarkmode ? "bg-bgPrimary" : "bg-white"}`}>
                <PrimaryTitle className="text-[80px] text-center mb-[40px]">Gallelry</PrimaryTitle>
                <Gallery />
            </div>

        </div>
    )
}

export default About