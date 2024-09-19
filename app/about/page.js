import Conatiner from '@/components/Container'
import React from 'react'
import AboutHero from '@/components/AboutHero'
import Testimonials from '@/components/Testimonials'

const AboutPage = () => {
    return (
        <Conatiner>
            <div className='bg-[#0f0f0f] w-[100vw] xl:w-[83vw]'>
               <AboutHero />
            </div>
            <Testimonials />
        </Conatiner>

    )
}

export default AboutPage