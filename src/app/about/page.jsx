import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css"

const About = () => {



    return (
        <div>

            {/* Header */}
            <div className={styles.commonCont}>
                <div className={styles.commonImgCont}>
                    <Image src="/blogPost.png" alt='' width={1715} height={700} className={styles.commonImg} />
                </div>
                <div className=' mx-[10px] lg:mx-[100px] '>
                    <h1 className='text-[25px] lg:text-[80px] font-[600] lg:leading-[120px] uppercase text-white'>About Us</h1>
                </div>
            </div>

            <div className='border'>
                <div>
                    <h2 className='text-[80px] font-[700] font-inter text-white uppercase leading-[90px] border'>Headphone</h2>
                    <p className='text-[]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit doloribus adipisci pariatur deleniti, optio eum, sint eos temporibus ratione dolorem perferendis ipsam blanditiis? Harum.</p>

                    <div className='w-[592px] h-[666px] relative'>
                        <Image src="/aboutH1.png" alt="" fill />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About