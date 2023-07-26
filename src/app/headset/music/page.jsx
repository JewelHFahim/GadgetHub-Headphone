"use client"

import { ThemeContext } from '@/Context/AppContext'
import CommonHeader from '@/utils/CommonHeader'
import PrimaryTitle from '@/utils/PrimaryTitle'
import Image from 'next/image'
import React, { useContext } from 'react'


const Music = () => {

    const { isDarkmode } = useContext(ThemeContext)

    return (
        <div>
            <CommonHeader />

            <div className={`text-left lg:pt-2 lg:pl-[94px] pb-[5px] bg-[#191919] ${isDarkmode ? "bg-bgSecondary" : "bg-bgOffWhite"}`}>
                <p className={`ml-[10px] lg:ml-0 font-poppins text-[25px] lg:text-[60px] font-[800] uppercase leading-[40px] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>HEADSET</p>
                <div className="headsetPTitle" >
                    <PrimaryTitle>Music</PrimaryTitle>
                </div>
            </div>

            <div className={`relative flex items-center font-poppins pb-[40px] ${ isDarkmode ? "bg-bgPrimary" : "bg-white"}`}>

                <div className={`w-[239px] h-[239px] lg:w-[767px] lg:h-[767px] pl-[10px] absolute z-[1] lg:left-[150px] flex flex-col justify-center ${isDarkmode ? "bg-gradient-to-r from-bgSecondary from-30%" : "bg-gradient-to-r from-bgOffWhite from-30%"}`}>

                    <h3 className={`text-[30px] lg:text-[60px]  font-[800] uppercase leading-[20px] lg:leading-[60px] ${ isDarkmode ? "text-[#D9D9D9]" : "text-bgPrimary" }`}>Headset</h3>

                    <PrimaryTitle className="text-[60px] lg:text-[180px] leading-[50px] lg:leading-[130px] ml-[-2px] lg:ml-[-6px]">Noice</PrimaryTitle>

                    <p className={`text-[25px] lg:text-[89px] font-[800] uppercase leading-[20px] lg:leading-[80px] ${ isDarkmode ? "text-[#D9D9D9]" : "text-bgPrimary" }`}>Cancelling</p>

                    <p className={`text-[10px] lg:text-[15px] w-2/3 ${ isDarkmode ? "text-white text-opacity-[50%]" : "text-bgPrimary" }`}>Noise cancelling headphones are designed to prevent you from hearing ambient noise. <span className='hidden lg:block'>They use tiny microphones within the earpieces to sense</span> </p>

                </div>

                <div className='w-full h-[328px] lg:h-[1023px] relative lg:ml-[400px]'>
                    <Image src="/headsetMusicNoiseC.png" alt='' fill />
                </div>
            </div>

            <div className={`py-[40px] lg:py-[75px] px-[10px] ${ isDarkmode ? "bg-bgSecondary" : "bg-bgOffWhite"}`}>

                {/* 1st one */}
                <div className='flex justify-center'>
                    <div className='w-[243px] h-[301px] lg:w-[521px] lg:h-[647px] relative'>
                        <Image src="/headphoneInAir.png" alt='' fill />
                    </div>

                    <div className=' lg:pr-[40px] mt-[40px] lg:mt-[70px] h-1/2 ml-[-100px] lg:ml-[0px] z-[10] lg:z-[0]'>

                        <div className={`p-[1px] ${ isDarkmode ? "bg-gradient-to-l from-[#D9D9D9] from-10%" : "bg-gradient-to-l from-bgSecondary from-10%"}`}>

                            <h2 className={`text-[30px] lg:text-[89px] font-[800] font-poppins uppercase lg:leading-[90px]  pr-[10px]  lg:pr-[30px] ${ isDarkmode ? "text-[#D9D9D9] bg-gradient-to-l from-[#191919] from-90%" : "text-bgPrimary bg-gradient-to-l from-bgOffWhite from-90%"}`}>Headphone</h2>
                        </div>

                        <PrimaryTitle className={`text-[70px] lg:text-[180px] font-[900] leading-[80px] lg:leading-[150px] ml-[-40px] lg:ml-[-70px] absolute ${isDarkmode ? "text-white bg-bgPrimary" : "text-bgPrimary bg-bgOffWhite"}`}>In Air</PrimaryTitle>
                    </div>
                </div>

                {/* 2nd one */}
                <div className='flex justify-center lg:ml-[350px] mt-[40px] lg:mt-[-20px] '>

                    <div className=' mt-[20px] lg:mt-[100px] h-1/2 mr-[-25px] lg:mr-[0px] z-[10]'>
                        <div className={` from-10% p-[1px] ${isDarkmode ? "bg-gradient-to-r from-[#D9D9D9]" : "bg-gradient-to-r from-bgSecondary"}`}>

                            <h2 className={`text-[30px] lg:text-[89px]  font-[800] font-poppins uppercase lg:leading-[90px] pl-[10px] lg:pl-[30px] ${ isDarkmode ? "text-[#D9D9D9] bg-gradient-to-r from-[#191919] from-90%" : "text-bgPrimary bg-gradient-to-r from-bgOffWhite from-90%"}`}>In Build</h2>

                        </div>

                        <PrimaryTitle className={`text-[70px] lg:text-[180px] font-[900] leading-[80px] lg:leading-[150px] absolute z-[10] ml-[20px] lg:ml-[80px] ${ isDarkmode ? "text-white bg-bgPrimary" : "text-black bg-bgOffWhite "}`}>Apps</PrimaryTitle>
                    </div>

                    <div className='w-[238px] h-[168px] lg:w-[607px] lg:h-[428px] relative'>
                        <Image src="/headphoneInBuild.png" alt='' fill />
                    </div>
                </div>

            </div>

            <div>
                <div className='relative'>
                    <div className='w-full h-[130px] lg:h-[436px] relative'>
                        <Image src="/headsetMusicbg1.png" alt='' fill />
                    </div>
                    <p className='text-[30px] lg:text-[90px] font-[900] font-poppins text-white absolute bottom-[10%] left-[15%] uppercase' >7.1 Surrounded</p>
                </div>

                <div className='relative'>
                    <div className='w-full h-[130px] lg:h-[436px] relative'>
                        <Image src="/headsetMusicbg2.png" alt='' fill />
                    </div>
                    <p className='text-[30px] lg:text-[90px] font-[900] font-poppins text-white absolute bottom-[10%] left-[15%] lg:left-[45%] uppercase' >Music System</p>
                </div>
            </div>

        </div>
    )
}

export default Music

