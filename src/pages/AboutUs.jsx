import React from 'react'
import ContactSection from '../assets/ContactSection.png'
import Container from '../components/Container/Container'
import AboutUs2 from '../components/AboutUs/AboutUs2'

const AboutUs = () => {
    return (
        <Container>
            <img src={ContactSection} className='w-full' alt="Contact Us" />
            <AboutUs2 />
        </Container>
    )
}

export default AboutUs