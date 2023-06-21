import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div>
            About <br /> <br />
            <Link href='/contact'>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default About