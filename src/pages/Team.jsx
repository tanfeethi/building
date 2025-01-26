import React from 'react'
import ContactSection from '../assets/ContactSection.png'
import Container from '../components/Container/Container'

const Team = () => {
    return (
        <Container>
            <img src={ContactSection} className='w-full' alt="Contact Us" />
        </Container>
    )
}

export default Team