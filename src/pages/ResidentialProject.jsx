import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectDetail from '../assets/ProjectDetails.jpg';
import Container from '../components/Container/Container';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Footer from '../components/Footer/Footer';

const ResidentialProject = () => {
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
                    src={ProjectDetail}
                    alt="Project Details"
                    className="w-full"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: isZoomedIn ? 1.1 : 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                />
            </Container>
            <ProjectDetails />
            <Footer />
        </div>
    );
};

export default ResidentialProject;
