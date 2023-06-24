import React from 'react'
import styles from "./PublicSec.module.css"
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa';


const PublicSec = () => {

    const datas = [
        {
            img: "/RS1.png",
            view: '400K'
        },
        {
            img: "/RS2.png",
            view: '400K'
        },
        {
            img: "/RS3.png",
            view: '400K'
        },
        {
            img: "/RS4.png",
            view: '400K'
        },
        {
            img: "/RS5.png",
            view: '400K'
        },
        {
            img: "/RS2.png",
            view: '400K'
        },
    ]

    return (
        <div className='mt-[120px] mr-[315px]'>

            <div className='text-right'>
                <p className='text-[60px] font-[800] font-poppins text-white leading-[80px]'>PUBLIC</p>
                <h1 className={`${styles.textStrock} font-poppins leading-[70px]`}>REALS & SHORTS</h1>
            </div>

            <div className='mt-[30px] flex items-center gap-[6px]'>
                {
                    datas.map((item, i) => (
                        <div key={i} className='relative'>
                            <Image src={item.img} alt='' width={262} height={466} />

                            {/* 
                            <p className='flex items-center gap-1 text-white text-[15px] font-[600] font-poppins absolute left-4 bottom-4'>
                                <FaPlay /> 400k
                            </p> */}


                        </div>
                    ))
                }
            </div>

            <div className='mt-[86px] flex justify-between items-center ml-[390px] mr-[130px]'>
                <button><Image src="/leftBtn.png" alt="" width={120} height={44} className='' /></button>
                <Image src="/slideDOts2.png" alt="" width={190} height={28} className='' />
                <button><Image src="/rightBtn.png" alt="" width={120} height={44} className='' /></button>
            </div>

        </div>
    )
}

export default PublicSec