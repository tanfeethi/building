import React from 'react'
import ContactUs from '../components/Contact/ContactUs'
import Container from '../components/Container/Container'
import ContactSection from '../assets/ContactSection.png'

const Contact = () => {
    return (
        <Container>
            <img src={ContactSection} className='w-full' alt="Contact Us" />
            <ContactUs />
        </Container>
    )
}

export default Contact