import "./CommonHeader.css"
import Image from 'next/image'
import PrimaryTitle from './PrimaryTitle'

const CommonHeader = () => {

    return (
        <div className='commonCont'>

            <div className='commonImgCont'>
                <Image src="/slideImg1.png" alt='' width={1715} height={700} className='commonImg' />
            </div>

            {/* <div className='text-left lg:mt-2'>
                <p className="font-poppins HeadsetSTitle" >HEADSET</p>

                <div className="headsetPTitle" >
                    <PrimaryTitle>Headset</PrimaryTitle>
                </div>
            </div> */}

        </div>
    )
}

export default CommonHeader