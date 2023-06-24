import React from 'react'
import styles from './Review.module.css'
import Image from 'next/image'
import { GrStar } from 'react-icons/gr';
import { IoStarOutline } from 'react-icons/io5';


const Review = () => {

    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem dunt pellentesque. Fu fringilla,"
    const datas = [
        {
            img: "/rev1.png",
            desc: desc
        },
        {
            img: "/rev2.png",
            desc: desc
        },
        {
            img: "/rev3.png",
            desc: desc
        },
    ]


    return (
        <div className='pt-[120px] pb-[80px] bg-[#191919]'>


            <div className='text-center'>
                <p className='text-[60px] font-[800] font-poppins text-white leading-[70px]'>PUBLIC</p>
                <h1 className={`${styles.textStrock} font-poppins leading-[70px]`}>REVIEW</h1>
            </div>

            <div className='mt-[100px] flex justify-center gap-[40px]'>

                {datas.map((item, i) => (
                    <div key={i} className='w-[480px] h-[200px] border relative'>
                        <Image src={item.img} width={107} height={107} alt="" className='absolute top-[-60px] left-[185px]' />

                        <div className='flex gap-1 text-[23px] justify-center mt-[60px] text-white'>
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <IoStarOutline />
                        </div>

                        <p className='px-[89px] pb-[29px] pt-[10px] text-center text-[12px] font-poppins text-white text-opacity-[50%]'>
                            {item.desc}
                        </p>
                    </div>
                ))
                }

            </div>

            <div className='mt-[86px] flex justify-between items-center mx-[315px]'>
                <button><Image src="/leftBtn.png" alt="" width={120} height={44} className='' /></button>
                <Image src="/slideLines.png" alt="" width={190} height={28} className='' />
                <button><Image src="/rightBtn.png" alt="" width={120} height={44} className='' /></button>
            </div>

        </div>
    )
}

export default Review