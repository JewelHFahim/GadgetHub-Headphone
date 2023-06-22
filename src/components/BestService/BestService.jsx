import Image from 'next/image'
import React from 'react'
import styles from './BestService.module.css';

const BestService = () => {
    return (
        <div className='mt-[190px] flex justify-center'>

            <div className='flex justify-center relative'>

                <div className={`${styles.bestOneImgContainer} z-[5]`}>
                    <Image src="/webestjbl.png" alt="" fill={true} className={styles.bestOneImg} />
                </div>

                <div className='text-right relative mt-[76px] pt-[85px] font-poppins z-10 w-1/2 bg-[#191919] pr-[20px]'>

                    <span className='text-[60px] font-[800] text-[#D9D9D9] leading-[20px]'>WHY</span>

                    <p className={`${styles.textStrock} leading-[110px] ml-[-165px]`}>WE ARE</p>

                    <p className='text-[130px] font-[900] text-[#D9D9D9] leading-[105px]'>BEST</p>

                    <p className='mt-5 text-[12px] text-white text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem <br /> ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt <br /> pellentesque.  Fu fringilla,</p>


                    <div className='flex justify-end'>
                        <button className='flex items-center gap-[10px] mt-[119px]'>
                            <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#131313]' />
                            <p className='text-[15px] font-poppins text-white'>LEARN MORE</p>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BestService