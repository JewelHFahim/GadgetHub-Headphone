import Image from 'next/image'
import React from 'react'
import styles from './Latest.module.css'



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
            img: "/LatestHP3.png"
        },
    ]

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

            <div className='mt-[21px] flex gap-[23px]'>
                {
                    datas.map((data, i) => (
                        <div key={i}>
                            <div className={styles.imgContainer}>
                                <Image src={data.img} alt='' fill className={styles.img} />
                            </div>
                            <p className='text-[20px] font-[500] font-poppins text-white mt-2'>{data.title}</p>
                            <h1 className='text-[40px] font-[800] font-poppins text-white '>{data.model}</h1>
                            <button className='flex items-center gap-[10px]'>
                                <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#191919]' />
                                <p className='text-[15px] font-poppins text-white'>View All</p>
                            </button>
                        </div>
                    ))
                }
            </div>

            <div className='mt-[63px] flex justify-between items-center ml-[130px] mr-[388px]'>
                <button><Image src="/leftBtn.png" alt="" width={120} height={44} className='' /></button>
                <Image src="/slideDots2.png" alt="" width={190} height={28} className='' />
                <button><Image src="/rightBtn.png" alt="" width={120} height={44} className='' /></button>
            </div>

        </div>
    )
}

export default Latest