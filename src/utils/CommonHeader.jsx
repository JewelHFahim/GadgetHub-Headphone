"use client"

import "./CommonHeader.css"
import Image from 'next/image'
import { useContext } from "react"
import { ThemeContext } from "@/Context/AppContext"
import { usePathname } from 'next/navigation'


const CommonHeader = () => {

    const { isDarkmode } = useContext(ThemeContext);

    const pathname = usePathname()

    return (
        <div className={`commonCont ${isDarkmode ? "commonContDark" : "commonContLight"}`}>

            <div className='commonImgCont'>

                {
                    pathname === "/headset" ? (
                        <Image src="/bgi.png" alt='' width={1715} height={700} className='commonImg' />
                    ) :

                        pathname === "/headset/gaming" ? (
                            <Image src="/blog3.png" alt='' width={1715} height={700} className='commonImg' />
                        ) :

                            pathname === "/headset/music" ? (
                                <Image src="/blog5.png" alt='' width={1715} height={700} className='commonImg' />
                            ) :

                                pathname === "/blog" ?
                                    (
                                        <Image src="/LatestHP2.png" alt='' width={1715} height={700} className='commonImg' />
                                    )

                                    :

                                    (
                                        <Image src="/defaultImage.jpg" alt='' width={1715} height={700} className='commonImg' />
                                    )
                }



            </div>
        </div>
    )
}

export default CommonHeader


