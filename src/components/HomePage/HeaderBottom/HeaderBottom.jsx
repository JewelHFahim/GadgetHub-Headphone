import Image from 'next/image'
import React, { useContext } from 'react'
import Styles from './HeaderBottom.module.css'
import { ThemeContext } from '@/Context/AppContext'

const HeaderBottom = () => {

    const { isDarkmode } = useContext(ThemeContext)

    return (
        <div className={`mt-[25px] flex justify-around lg:justify-center lg:gap-[150px]`}>

            <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-[20px]'>
                <div className={`${Styles.imgCont}`}>
                    {isDarkmode ?
                        <Image src="/Equalizer.svg" alt='' fill={true} className={Styles.img} />
                        :
                        <Image src="/EqualizerDark.png" alt='' fill={true} className={Styles.img} />
                    }
                </div>

                <div className='text-center lg:text-left flex flex-col'>
                    <h3 className={`${Styles.equalizer} font-poppins ${ isDarkmode ? "text-white" : "text-black" } `}>Equalizer</h3>
                    <p className={`hidden lg:block text-[12px] font-[500] font-poppins ${ isDarkmode ? "text-white  text-opacity-[50%]" : "text-black" } leading-[14px] w-[147px] `}>Customize Headphone Equalizer</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-[20px]'>
                <div className={`${Styles.imgCont}`}>
                    {
                        isDarkmode ?
                            < Image src="/Sound.svg" alt='' fill={true} className={Styles.img} />
                            :
                            <Image src="/SoundDark.png" alt='' fill={true} className={Styles.img} />}
                </div>

                <div className='text-center lg:text-left flex flex-col'>
                    <h3 className={`${Styles.equalizer} font-poppins ${ isDarkmode ? "text-white" : "text-black" }`}>7.1 Surround</h3>
                    <p className={`hidden lg:block text-[12px] font-[500] font-poppins ${ isDarkmode ? "text-white  text-opacity-[50%]" : "text-black" } leading-[14px] w-[147px] `}>Customize Headphone Equalizer</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-[20px]'>
                <div className={`${Styles.imgCont}`}>
                    {isDarkmode ?
                        <Image src="/Range.svg" alt='' fill={true} className={Styles.img} />
                        :
                        <Image src="/RangeDark.png" alt='' fill={true} className={Styles.img} />
                    }
                </div>

                <div className='text-center lg:text-left flex flex-col'>
                    <h3 className={`${Styles.equalizer} font-poppins ${ isDarkmode ? "text-white" : "text-black" }`}>Range</h3>
                    <p className={`hidden lg:block text-[12px] font-[500] font-poppins ${ isDarkmode ? "text-white  text-opacity-[50%]" : "text-black" } leading-[14px] w-[147px] `}>Customize Headphone Equalizer</p>
                </div>
            </div>

        </div>
    )
}

export default HeaderBottom