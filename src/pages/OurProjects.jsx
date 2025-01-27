import React from 'react'
import ContactSection from '../assets/ContactSection.png'
import Container from '../components/Container/Container'
import Projects2 from '../components/Projects/Projects2'


const OurProjects = () => {
    return (
        <Container>
            <img src={ContactSection} className='w-full my-2xl mb-5xl' alt="Contact Us" />
            <Projects2 />
        </Container>
    )
}

export default OurProjects