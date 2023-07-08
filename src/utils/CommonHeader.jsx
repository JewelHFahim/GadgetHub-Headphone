import React from 'react'
import "./CommonHeader.css"
import Image from 'next/image'
import Title from './Subtitle'
import Test from './PrimaryTitle'

const CommonHeader = () => {

    const head = "HEADSET"

    return (
        <div className='commonCont'>

            <div className='commonImgCont'>
                <Image src="/slideImg1.png" alt='' width={1715} height={700} className='commonImg' />
            </div>

            <div className='text-left mt-2'>
                <Title primaryText={head} className="text-2xl" />
                <Title titleStyle="text-[120px]" secondaryText="HEADSET" />
            </div>
        </div>
    )
}

export default CommonHeader