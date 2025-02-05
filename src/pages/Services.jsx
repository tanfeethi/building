import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import serviceHero from '../assets/serviceHero.jpg';
import Container from '../components/Container/Container';
import Timeline from '../components/Timeline/Timeline';
import Testimonials from '../components/Testimoinals/Testimonials';
import Expertise from '../components/Expertise/Expertise';
import Service from '../components/Service/Service';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';

const Services = () => {
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
                    src={serviceHero}
                    className="w-max-[1264px] w-full 2xl:w-max-[1264px] xl:w-max-[1264px] lg:w-max-[664px] lg:h-[457px] md:w-max-[444px] md:h-[457px] sm:max-w-full sm:h-[357px] h-[557px] my-2xl mb-5xl"
                    alt="Services"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: isZoomedIn ? 1.1 : 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                />
            </Container>

            <Service />
            <Projects />
            <Expertise />
            <Testimonials />
            <Timeline />
            <Footer />
        </>
    );
};

export default Services;
