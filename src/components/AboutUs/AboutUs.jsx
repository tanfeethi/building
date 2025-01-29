import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import rightAbout from '../../assets/rightAbout.png';
import leftAbout from '../../assets/leftAbout.png';
import Container from '../Container/Container';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <div className="px-4 py-8">
                <div className="flex flex-col 2xl:flex-row items-center justify-between gap-6">

                    {/* Image Section */}
                    <div className="flex gap-4">
                        <motion.img
                            src={leftAbout}
                            alt="Construction Site Left"
                            className="rounded-lg w-32 h-96 object-cover"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                        <motion.img
                            src={rightAbout}
                            alt="Construction Site Right"
                            className="rounded-lg w-80 h-96 object-cover"
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </div>

                    {/* Text Section */}
                    <div className="text-right md:w-2/3">
                        <h3 className="text-text-primary font-bold text-xl mb-4">
                            {t("aboutUs.title")}
                        </h3>
                        <p className="text-text-black text-base leading-7 mb-4 ms-xl">
                            {t("aboutUs.description1")}
                        </p>
                        <p className="text-text-black text-base leading-7">
                            {t("aboutUs.description2")}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;
