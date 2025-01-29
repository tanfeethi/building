import React from 'react'
import projectHero from '../assets/projectHero.jpg'
import Container from '../components/Container/Container'
import Projects2 from '../components/Projects/Projects2'
import Footer from '../components/Footer/Footer'


const OurProjects = () => {
    return (
        <Container>
            <img src={projectHero} className='w-full my-2xl mb-5xl' alt="Contact Us" />
            <Projects2 />
            <Footer />
        </Container>
    )
}

export default OurProjects