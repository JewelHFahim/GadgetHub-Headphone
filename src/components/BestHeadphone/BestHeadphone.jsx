import React from 'react'
import styles from './BestHeadphone.module.css'
import Image from 'next/image'

const BestHeadphone = () => {
    return (
        <div className='h-[1090px] bg-[#191919] mt-[75px] '>

            <div className='flex justify-center pt-[77px] relative'>
                <div className='text-right relative mt-[45px] z-10 w-1/3'>
                    <p className={`${styles.textStrock} font-poppins leading-[95px]`}>BEST</p>
                    <p className='text-[101px] font-poppins font-[900] text-white leading-[90px]'>HEADPHONE</p>
                    <div className='flex justify-end '>
                        <span className='text-[35px] font-inter font-[900] text-white leading-[15px]'>FOR</span>
                        <p className={`${styles.textStrock} font-poppins leading-[100px] mr-[-165px]`}>MUSIC</p>
                    </div>
                    <p className='mt-5 text-[12px] font-poppins text-white text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem <br /> ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt <br /> pellentesque.  Fu fringilla,</p>
                </div>

                <div className={`${styles.bestOneImgContainer} z-[5]`}>
                    <Image src="/Best1.png" alt="" fill={true} className={styles.bestOneImg} />
                </div>

                <div className='w-[800px] h-[280px] bg-[#131313] absolute bottom-0 z-[1]'></div>
            </div>

            <div className='flex justify-center  mt-[-40px] '>
                <div className='absolute z-[7]'>
                    <Image src="/Best2.png" width={1087} height={463} alt='' className='' />
                </div>
            </div>

        </div>
    )
}

export default BestHeadphone