import React, { useContext } from 'react'
import Image from 'next/image'
import SubTitle from '@/utils/Subtitle'
import PrimaryTitle from '@/utils/PrimaryTitle'
import "./Feature.css"
import FeatureSlider from './FeatureSlider'
import { ThemeContext } from '@/Context/AppContext'

const Feature = () => {

    const { isDarkmode } = useContext(ThemeContext)


    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt pellentesque. Fu fringilla,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt pellentesque. Fu fringilla,"

    const datas = [
        {
            title: ` GAMING HEADPHONE`,
            desc: description,
            icon: isDarkmode ? "/GHeadphone.svg" : "/GHeadphoneDark.png",
            position: 0
        },
        {
            title: " WARRANTY SERVICE",
            desc: description,
            icon: isDarkmode ? "/WService.svg" : "/WServiceDark.png",
            position: 50
        },
        {
            title: " 24HOUR SERVICE",
            desc: description,
            icon: isDarkmode ? "/SService.svg" : "/SServiceDark.png",
            position: 100
        },

    ]

    return (
        <div className='px-[20px] lg:px-[310px] pt-[30px] pb-[20px] lg:mt-[75px]'>

            <div className='flex justify-between items-start lg:items-center'>

                <div>

                    <SubTitle className={`text-[40px] lg:text-[60px] ${isDarkmode ? "text-white" : "text-[#000]"}`}>OUR</SubTitle>

                    <PrimaryTitle className="text-[50px] lg:text-[120px] font-poppins leading-[40px] lg:leading-[100px] ml-[-4px]" >Feature</PrimaryTitle>

                </div>

                <button className='flex items-center gap-[10px] mt-2 lg:mt-0'>
                    <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>

                        {isDarkmode ?
                            <Image src="/rightIcon.png" fill={true} alt='' className={`p-2 rounded-full bg-[#191919]`} />
                            :
                            <Image src="/rightIconDark.png" fill={true} alt='' className={`p-2 rounded-full bg-bgOffWhite`} />
                        }

                    </div>

                    <p className={`text-[10px]  lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>View All Feature</p>
                </button>
            </div>


            <div className='hidden mt-[12px] lg:grid grid-cols-1 lg:grid-cols-3'>

                {
                    datas.map((item, index) => (
                        <div key={index} className={`w-[409px] h-[458px] border  border-opacity-[60%] p-[35px] ${isDarkmode ? "border-white" : "border-black"} transform duration-300 hover:scale-[1.03]`}
                            style={{ marginTop: `${item.position}px` }}
                        >
                            <div className='flex items-center gap-[32px]'>
                                <Image src={item.icon} alt="" width={85} height={80} />
                                <h2 className={`text-[30px] font-[800] font-poppins ${isDarkmode ? "text-white" : "text-black"}`}>{item.title}</h2>
                            </div>
                            <p className={`mt-[58px] text-[12px] font-[300] ${isDarkmode ? "text-white text-opacity-[50%]" : "text-black"}`}>{item.desc}
                            </p>

                            <button className='flex items-center gap-[10px] mt-[53px]'>
                                <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>

                                    {
                                        isDarkmode ?
                                            <Image src="/rightIcon.png" fill={true} alt='' className={`p-2 rounded-full bg-[#191919]`} />
                                            :
                                            <Image src="/rightIconDark.png" fill={true} alt='' className={`p-2 rounded-full bg-bgOffWhite`} />
                                    }

                                </div>

                                <p className={`text-[10px]  lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>View All Feature</p>
                            </button>
                        </div>
                    ))
                }

            </div>

            <div className='lg:hidden'>
                <FeatureSlider datas={datas} />
            </div>

        </div>
    )
}

export default Feature