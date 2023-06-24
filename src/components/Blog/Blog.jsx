import React from 'react'
import styles from "./Blog.module.css"
import Image from 'next/image'

const Blog = () => {

    const datas = [
        {
            title: "Headphone Daily Use Blog...",
            img: "/blog1.png"
        },
        {
            title: "Headphone Daily Use Blog...",
            img: "/blog2.png"
        },
        {
            title: "Headphone Daily Use Blog...",
            img: "/blog3.png"
        }
    ]

    return (
        <div className='mt-[135px] bg-[#191919] h-[777px] px-[315px]'>

            <div className='pt-[66px] flex justify-between items-center '>
                <div>
                    <h2 className='text-[60px] font-[800] font-poppins text-white leading-[50px]'>OUR</h2>
                    <h1 className={`${styles.textStrock} font-poppins leading-[100px]`}>BLOG</h1>
                </div>
                <button className='flex items-center gap-[10px]'>
                    <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#191919]' />
                    <p className='text-[15px] font-poppins text-white'>View All</p>
                </button>
            </div>

            <div className='mt-[50px]  flex gap-[100px]'>
                {
                    datas.map((item, i) => (
                        <div key={i} className='w-[344px] h-[325px] border p-[17px] relative '>

                            <Image src={item.img} alt="" width={375} height={211} className='absolute ' />

                            <div className='rotate-[-90deg] flex items-center gap-[10px] absolute right-[-120px] top-[100px]'>
                                <p className='rotate-[-360deg] text-[14px] font-poppins font-[600] text-white text-opacity-[50%]'>30 AUGUST 2023</p>
                                <span className='w-[60px] h-[2px] bg-white bg-opacity-[50%]'></span>
                            </div>


                            <p className='text-[20px] font-[600] font-poppins text-white mt-[210px]'>{item.title}</p>

                            <button className='flex items-center gap-[10px] mt-[10px]'>
                                <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#131313]' />
                                <p className='text-[15px] font-poppins text-white'>View All Feature</p>
                            </button>
                        </div>
                    ))
                }
            </div>

            <div className='mt-[76px] flex justify-between items-center mx-[90px]'>
                <button><Image src="/leftBtn.png" alt="" width={120} height={44} className='' /></button>
                <Image src="/slideLines.png" alt="" width={190} height={28} className='' />
                <button><Image src="/rightBtn.png" alt="" width={120} height={44} className='' /></button>
            </div>

        </div>
    )
}

export default Blog