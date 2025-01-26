import React from 'react'
import Footer from '../components/Footer/Footer'
import Expertise from '../components/Expertise/Expertise'
import AboutUs from '../components/AboutUs/AboutUs'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimoinals/Testimonials'

const Home = () => {
    return (
        <div 
        // className='mx-auto max-w-7xl'
        >
            {/* <Footer /> */}
            <AboutUs />
            <Services />
            <Expertise />
            <Testimonials />
            {/* Home */}
        </div>
    )
}

export default Home