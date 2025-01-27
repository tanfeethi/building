import React from 'react'
import ContactSection from '../assets/ContactSection.png'
import OurTeam from '../components/OurTeam/OurTeam'
import TeamDetails from '../components/TeamDetails/TeamDetails'

const Team = () => {
    return (
        <div>
            <img src={ContactSection} className='w-full' alt="Contact Us" />
            <OurTeam />
            <TeamDetails />
        </div>
    )
}

export default Team