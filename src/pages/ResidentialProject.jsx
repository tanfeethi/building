import React from 'react'
import Container from '../components/Container/Container'
import ProjectDetail from '../assets/ProjectDetails.jpg'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import Footer from '../components/Footer/Footer'

const ResidentialProject = () => {
    return (
        <div>
            <Container>
                <img src={ProjectDetail} alt="ProjectDetail" />
            </Container>
            <ProjectDetails />
            <Footer />
        </div>
    )
}

export default ResidentialProject