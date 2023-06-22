import Image from 'next/image'
import React from 'react'
import styles from './Latest.module.css'

const Latest = () => {
    return (
        <div className='ml-[315px] mt-[147px]'>

            <div className='flex justify-between items-center mr-[315px]'>
                <div>
                    <h2 className='text-[60px] font-[800] font-poppins text-white leading-[50px]'>LATEST</h2>
                    <h1 className={`${styles.textStrock} font-poppins leading-[100px]`}>HEADSET</h1>
                </div>
                <button className='flex items-center gap-[10px]'>
                    <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#191919]' />
                    <p className='text-[15px] font-poppins text-white'>View All</p>
                </button>
            </div>

            <div>
                <div className={styles.imgContainer}>
                    <Image src="/LatestHP1.png" alt='' fill className={styles.img}/>
                </div>
            </div>
        </div>
    )
}

export default Latest