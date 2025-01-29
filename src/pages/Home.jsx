import React from 'react'
import Footer from '../components/Footer/Footer'
import Expertise from '../components/Expertise/Expertise'
import AboutUs from '../components/AboutUs/AboutUs'
import Testimonials from '../components/Testimoinals/Testimonials'
import Timeline from '../components/Timeline/Timeline'
import Experience from '../components/Experience/Experience'
import PriceSection from '../components/Price/Price'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Service from '../components/Service/Service'

const Home = () => {
    return (
        <div 
        >
            <Hero />
            <AboutUs />
            <Service />
            <Experience />
            <Projects />
            <PriceSection />
            <Expertise />
            <Timeline />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Home