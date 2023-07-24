import Image from 'next/image'
import React, { useContext } from 'react'
import styles from './BestService.module.css';
import { ThemeContext } from '@/Context/AppContext';

const BestService = () => {

    const { isDarkmode } = useContext(ThemeContext)

    return (
        <div className={`mt-[10px] lg:mt-[190px] flex justify-center ${styles.bestServiceBg}`}>

            <div className='flex justify-center items-center relative'>

                <div className={`${styles.bestOneImgContainer} z-[5]`}>
                    <Image src="/webestjbl.png" alt="" fill={true} className={styles.bestOneImg} />
                </div>

                <div className={`lg:mt-[76px] pt-[85px] pb-[260px] lg:pb-[20px]  z-10 w-1/2  lg:pr-[20px]  relative ${isDarkmode ? "bg-[#191919]" : "bg-bgOffWhite"} `}>

                    <div className='text-left lg:text-right relative font-poppins'>

                        <span className={`text-[30px] lg:text-[60px] font-[800]  leading-[0px] lg:leading-[20px] ${isDarkmode ? "text-[#D9D9D9]" : "text-[#000]"}`}>WHY</span>

                        <p className={`${styles.textStrock} leading-[40px] lg:leading-[110px] ml-[-150px] lg:ml-[-165px]`}>WE ARE</p>

                        <p className={`text-[70px] lg:text-[130px] font-[900]  ml-[-100px] lg:ml-[0px] leading-[65px] lg:leading-[105px] ${isDarkmode ? "text-[#D9D9D9]" : "text-[#000]"}`}>BEST</p>

                        <p className={`hidden lg:block mt-5 text-[12px]  ${isDarkmode ? "text-white text-opacity-[50%]" : "text-[#000]"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem <br /> ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt <br /> pellentesque.  Fu fringilla,</p>


                        <div className='absolute bottom-[-250px] lg:static'>
                            <div className='lg:flex justify-end  ml-[-50px] lg:mt-[119px] '>

                                <button className='flex items-center gap-[10px] '>

                                    <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>

                                        {
                                            isDarkmode ?
                                                <Image src="/rightIcon.png" fill={true} alt='' className={`p-2 rounded-full bg-[#191919]`} />
                                                :
                                                <Image src="/rightIconDark.png" fill={true} alt='' className={`p-2 rounded-full bg-white`} />
                                        }

                                    </div>

                                    <p className={`text-[10px] uppercase lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>Learn More</p>

                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default BestService