import Image from 'next/image'
import React from 'react';
import styels from "./HeaderSlider.module.css";

const HeaderSlider = () => {
    return (
        <div className={styels.container}>
            <div className={styels.imgConatainer}>
                <Image src="/slideImgOne.png" alt='' fill={true} className={styels.img} />
            </div>

        </div>
    )
}

export default HeaderSlider