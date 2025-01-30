import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import projectHero from '../assets/projectHero.jpg';
import Container from '../components/Container/Container';
import Projects2 from '../components/Projects/Projects2';
import Footer from '../components/Footer/Footer';

const OurProjects = () => {
    const [isZoomedIn, setIsZoomedIn] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsZoomedIn(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Container>
                <motion.img
                    src={projectHero}
                    className="w-full my-2xl mb-5xl"
                    alt="Our Projects"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: isZoomedIn ? 1.1 : 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                />
                <Projects2 />
            </Container>
            <Footer />
        </>
    );
};

export default OurProjects;
