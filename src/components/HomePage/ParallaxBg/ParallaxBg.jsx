import React from 'react'
import styles from "./ParallaxBg.module.css"

const ParallaxBg = () => {
    return (
        <div className={styles.parallaxWorld}>



            <section>
                <div className={`${styles.parallaxOne} relative`}>
                    <div className={`${styles.bgGradient1} w-[400px] h-[100%] top-0 left-0 absolute`}></div>
                    <div className={`${styles.bgGradient1} w-[400px] h-[100%] top-0 right-0 absolute`}></div>
                </div>
            </section>
        </div>
    )
}

export default ParallaxBg