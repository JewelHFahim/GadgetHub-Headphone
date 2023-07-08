import Image from 'next/image'
import React from 'react'
import LatestSlider from '@/components/HomePage/Latest/LatestSlider'
import Title from '@/utils/Subtitle'
import SubTitle from '@/utils/Subtitle'
import PrimaryTitle from '@/utils/PrimaryTitle'



const Latest = () => {

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

        <div className='ml-[315px] mt-[147px]'>

            <div className='flex justify-between items-center mr-[315px]'>
            <div>
                    <SubTitle>LATEST</SubTitle>
                    <PrimaryTitle className="text-[120px] font-poppins" >HEADSET</PrimaryTitle>
                </div>
                <button className='flex items-center gap-[10px]'>
                    <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#191919]' />
                    <p className='text-[15px] font-poppins text-white'>View All</p>
                </button>
            </div>

            <div className=''>
                <LatestSlider datas={datas} />
            </div>

        </div>
    )
}

export default Latest