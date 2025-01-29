import React from 'react'
import Projects from '../components/Projects/Projects'
import serviceHero from '../assets/serviceHero.jpg'
import Container from '../components/Container/Container'
import Timeline from '../components/Timeline/Timeline'
import Testimonials from '../components/Testimoinals/Testimonials'
import Expertise from '../components/Expertise/Expertise'
import Service from '../components/Service/Service'
import Footer from '../components/Footer/Footer'


const Services = () => {
    return (
        <Container>
            <img src={serviceHero} className='w-full' alt="Contact Us" />
            <Service />
            <Projects />
            <Expertise />
            <Testimonials />
            <Timeline />
            <Footer />
        </Container>
    )
}

export default Services