import React from 'react'
import Projects from '../components/Projects/Projects'
import ContactSection from '../assets/ContactSection.png'
import Container from '../components/Container/Container'


const Services = () => {
    return (
        <Container>
            <img src={ContactSection} className='w-full' alt="Contact Us" />
            <Projects />
        </Container>
    )
}

export default Services