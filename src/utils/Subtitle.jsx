import React from 'react'
import "./SubTitle.css"


const SubTitle = ({ children, className }) => {
    return (
        <div className={`font-poppins subTitle ${className}`}>{children}</div>
    )
}

export default SubTitle