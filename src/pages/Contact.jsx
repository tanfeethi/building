import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ContactUs from '../components/Contact/ContactUs';
import Container from '../components/Container/Container';
import ContactSection from '../assets/ContactSection.png';

const Contact = () => {
    const [isZoomedIn, setIsZoomedIn] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsZoomedIn(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Container>
            <motion.img
                src={ContactSection}
                alt="Contact Us"
                    className="w-max-[1264px] w-full 2xl:w-max-[1264px] xl:w-max-[1264px] lg:w-max-[664px] lg:h-[457px] md:w-max-[444px] md:h-[457px] sm:max-w-full sm:h-[357px] h-[557px] my-2xl mb-5xl"
                initial={{ scale: 1.1 }}
                animate={{
                    scale: isZoomedIn ? 1.1 : 1,
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                }}
            />
            <ContactUs />
        </Container>
    );
};

export default Contact;
