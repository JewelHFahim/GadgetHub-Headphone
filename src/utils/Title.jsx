import React from 'react'
import "./Title.css"


const Title = ({primaryText, secondaryText}) => {
    return (

        <div className='font-poppins'>

            <h2 className='subTitle'>{primaryText}</h2>

            <p className='mainTitle'>{secondaryText}</p>
        </div>


    )
}

export default Title