import Image from 'next/image'
import React, { useContext } from 'react'
import LatestSlider from '@/components/HomePage/Latest/LatestSlider'
import SubTitle from '@/utils/Subtitle'
import PrimaryTitle from '@/utils/PrimaryTitle'
import { ThemeContext } from '@/Context/AppContext'


const Latest = () => {

    const { isDarkmode } = useContext(ThemeContext)


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

        <div className={`lg:pl-[315px] pt-[26px] lg:py-[100px] lg:mt-[100px] ${isDarkmode ? "" : " bg-bgOffWhite"}`}>

            <div className='flex justify-between items-center lg:mr-[315px]'>
                <div>
                    <SubTitle className={`text-[30px] lg:text-[60px] ${ isDarkmode ? "text-white" : "text-black" }`}> LATEST </SubTitle>

                    <PrimaryTitle className="text-[60px] mt-[-30px] lg:mt-[0px] lg:text-[120px] font-poppins lg:leading-[100px] ml-[-4px]"> HEADSET </PrimaryTitle>
                </div>

                <button className='hidden lg:flex items-center gap-[10px]'>
                    <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>
                        {
                            isDarkmode ?
                                <Image src="/rightIcon.png" fill={true} alt='' className={`p-2 rounded-full bg-[#191919]`} />
                                :
                                <Image src="/rightIconDark.png" fill={true} alt='' className={`p-2 rounded-full bg-white`} />
                        }
                    </div>
                    <p className={`text-[10px]  lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>View All</p>
                </button>
            </div>

            <div className='lg:mt-[10px]'>
                <LatestSlider datas={datas} />
            </div>

        </div>
    )
}

export default Latest