import React from 'react'
import aboutusSection2 from '../assets/aboutusSection2.png'
import Container from '../components/Container/Container'
import AboutUs2 from '../components/AboutUs/AboutUs2'
import Footer from '../components/Footer/Footer'

const AboutUs = () => {
    return (
        <div>
            <Container>
                <img src={aboutusSection2} className='w-full my-2xl mb-5xl' alt="Contact Us" />
            </Container>
            <AboutUs2 />
            <Footer />
        </div>
    )
}

export default AboutUs