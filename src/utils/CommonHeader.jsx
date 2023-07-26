"use client"

import "./CommonHeader.css"
import Image from 'next/image'
import { useContext } from "react"
import { ThemeContext } from "@/Context/AppContext"

const CommonHeader = () => {

    const { isDarkmode } = useContext(ThemeContext)

    return (
        <div className={`commonCont ${ isDarkmode ? "commonContDark" : "commonContLight"}`}>
            
            <div className='commonImgCont'>
                <Image src="/slideImg1.png" alt='' width={1715} height={700} className='commonImg' />
            </div>
        </div>
    )
}

export default CommonHeader