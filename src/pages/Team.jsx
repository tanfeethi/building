import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroSection2 from '../assets/heroSection2.png';
import OurTeam from '../components/OurTeam/OurTeam';
import TeamDetails from '../components/TeamDetails/TeamDetails';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';

const Team = () => {
    const [isZoomedIn, setIsZoomedIn] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsZoomedIn(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Container>
                <motion.img
                    src={heroSection2}
                    className="w-full my-2xl"
                    alt="Our Team"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: isZoomedIn ? 1.1 : 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                />
            </Container>
            <OurTeam />
            <TeamDetails />
            <Footer />
        </div>
    );
};

export default Team;
