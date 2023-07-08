import React from 'react'
import "./PrimaryTitle.css"

const PrimaryTitle = ({ children, className }) => {

    return (
        <div className={`primaryTitle ${className} font-poppins`} >{children}</div>
    )
}

export default PrimaryTitle