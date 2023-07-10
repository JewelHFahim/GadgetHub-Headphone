import Image from 'next/image'
import React from 'react'
import styles from './BestService.module.css';

const BestService = () => {
    return (
        <div className={`mt-[10px] lg:mt-[190px] flex justify-center ${styles.bestServiceBg}`}>

            <div className='flex justify-center items-center relative'>

                <div className={`${styles.bestOneImgContainer} z-[5]`}>
                    <Image src="/webestjbl.png" alt="" fill={true} className={styles.bestOneImg} />
                </div>

                <div className='lg:mt-[76px] pt-[85px] pb-[260px] lg:pb-[20px]  z-10 w-1/2 bg-[#191919] lg:pr-[20px]  relative'>

                    <div className='text-left lg:text-right relative font-poppins'>

                        <span className=' text-[30px] lg:text-[60px] font-[800] text-[#D9D9D9] leading-[0px] lg:leading-[20px]'>WHY</span>

                        <p className={`${styles.textStrock} leading-[40px] lg:leading-[110px] ml-[-150px] lg:ml-[-165px]`}>WE ARE</p>

                        <p className='text-[70px] lg:text-[130px] font-[900] text-[#D9D9D9] ml-[-100px] lg:ml-[0px] leading-[65px] lg:leading-[105px]'>BEST</p>

                        <p className='hidden lg:block mt-5 text-[12px] text-white text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem <br /> ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt <br /> pellentesque.  Fu fringilla,</p>


                        <div className='absolute bottom-[-250px] lg:static'>
                            <div className='lg:flex justify-end  ml-[-50px] lg:mt-[119px] '>
                                <button className='flex items-center gap-[10px] '>
                                    <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#131313]' />
                                    <p className='text-[15px] font-poppins text-white'>LEARN MORE</p>
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