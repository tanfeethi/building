import React from 'react'
import Footer from '../components/Footer/Footer'
import Expertise from '../components/Expertise/Expertise'
import Sponsors from '../components/Sponsors/Sponsors'
import Hero from '../components/Hero/Hero'
import AboutUs from '../components/AboutUs/AboutUs'

const Home = () => {
    return (
        <div 
        // className='mx-auto max-w-7xl'
        >
            {/* <Footer /> */}
            <Hero />
            <AboutUs />
            <Sponsors />
            <Expertise />
            {/* Home */}
        </div>
    )
}

export default Home