import React from 'react'
import Footer from '../components/Footer/Footer'
import Expertise from '../components/Expertise/Expertise'
import AboutUs from '../components/AboutUs/AboutUs'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimoinals/Testimonials'
import Timeline from '../components/Timeline/Timeline'
import Experience from '../components/Experience/Experience'
import PriceSection from '../components/Price/Price'
import Hero from '../components/Hero/Hero'

const Home = () => {
    return (
        <div 
        // className='mx-auto max-w-7xl'
        >
            <Hero />
            <AboutUs />
            <Experience />
            <Services />
            <PriceSection />
            <Expertise />
            <Timeline />
            <Testimonials />
            {/* Home */}
        </div>
    )
}

export default Home