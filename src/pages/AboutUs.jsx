import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import aboutusSection2 from '../assets/aboutusSection2.png';
import Container from '../components/Container/Container';
import AboutUs2 from '../components/AboutUs/AboutUs2';
import Footer from '../components/Footer/Footer';

const AboutUs = () => {
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
                    src={aboutusSection2}
                    className="w-max-[1264px] w-full 2xl:w-max-[1264px] xl:w-max-[1264px] lg:w-max-[664px] lg:h-[457px] md:w-max-[444px] md:h-[457px] sm:max-w-full sm:h-[357px] h-[557px] my-2xl mb-5xl"
                    alt="About Us"
                    initial={{ scale: 1.1 }}
                    animate={{
                        scale: isZoomedIn ? 1.1 : 1,
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                    }}
                />
            </Container>
            <AboutUs2 />
            <Footer />
        </div>
    );
};

export default AboutUs;
