import React from 'react'
import Image from 'next/image'
import Title from '@/utils/Subtitle'
import SubTitle from '@/utils/Subtitle'
import PrimaryTitle from '@/utils/PrimaryTitle'

const Feature = () => {

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt pellentesque. Fu fringilla,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt pellentesque. Fu fringilla,"

    const datas = [
        {
            title: ` GAMING HEADPHONE`,
            desc: description,
            icon: "/GHeadphone.svg",
            position: 0
        },
        {
            title: " WARRANTY SERVICE",
            desc: description,
            icon: "/WService.svg",
            position: 50
        },
        {
            title: " 24HOUR SERVICE",
            desc: description,
            icon: "/SService.svg",
            position: 100
        },

    ]

    return (
        <div className='px-[20px] lg:px-[310px] pt-[30px] lg:mt-[75px]'>

            <div className='flex justify-between items-start lg:items-center'>

                <div>
                    <SubTitle className=" text-[40px] lg:text-[60px] ">OUR</SubTitle>
                    <PrimaryTitle className="text-[50px] lg:text-[120px] font-poppins leading-[40px] lg:leading-[100px]" >Feature</PrimaryTitle>
                </div>

                <button className='flex items-center gap-[10px] mt-2 lg:mt-0'>
                    <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>
                        <Image src="/rightIcon.png" fill={true} alt='' className='p-2 rounded-full bg-[#191919]' />
                    </div>

                    <p className='text-[10px]  lg:text-[15px] font-poppins text-white'>View All Feature</p>
                </button>
            </div>

            {/* 
            <div className='mt-[12px] grid grid-cols-1 lg:grid-cols-3'>


                {
                    datas.map((item, index) => (
                        <div key={index} className={`w-[409px] h-[458px] border border-white border-opacity-[60%] p-[35px] `}
                            style={{ marginTop: `${item.position}px` }}
                        >
                            <div className='flex items-center gap-[32px]'>
                                <Image src={item.icon} alt="" width={85} height={80} />
                                <h2 className='text-[30px] font-[800] font-poppins text-white'>{item.title}</h2>
                            </div>
                            <p className='mt-[58px] text-[12px] font-[300] text-white text-opacity-[50%]'>{item.desc}
                            </p>

                            <button className='flex items-center gap-[10px] mt-[53px]'>
                                <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#191919]' />
                                <p className='text-[15px] font-poppins text-white'>View All Feature</p>
                            </button>
                        </div>
                    ))
                }


            </div> */}

        </div>
    )
}

export default Feature