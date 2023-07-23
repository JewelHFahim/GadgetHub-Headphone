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

        <div className={`lg:pl-[315px] pt-[26px] lg:py-[100px] lg:mt-[100px] ${ isDarkmode ? "" : " bg-bgOffWhite" }`}>

            <div className='flex justify-between items-center lg:mr-[315px]'>
                <div>
                    <SubTitle className="text-[30px] lg:text-[60px]"> LATEST </SubTitle>
                    <PrimaryTitle className="text-[60px] mt-[-30px] lg:mt-[0px] lg:text-[120px] font-poppins lg:leading-[100px]"> HEADSET </PrimaryTitle>
                </div>

                <button className='hidden lg:flex items-center gap-[10px]'>
                    <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#191919]' />
                    <p className={`text-[15px] font-poppins ${ isDarkmode ? "text-white" : "text-black" }`}> View All </p>
                </button>
            </div>

            <div className='lg:mt-[10px]'>
                <LatestSlider datas={datas} />
            </div>

        </div>
    )
}

export default Latest