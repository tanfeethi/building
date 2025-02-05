import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import rightAbout from '../../assets/rightAbout.png';
import leftAbout from '../../assets/leftAbout.png';
import Container from '../Container/Container';

const AboutUs = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <Container>
            <div className="px-4 py-8">
                <div className="flex flex-col 2xl:flex-row items-center justify-between gap-6">

                    {/* Text Section */}
                    <div className="md:w-full sm:w-full 2xl:w-2/3 xl:w-2/3">
                        <h3 className="text-text-primary font-bold text-large mb-4">
                            {t("aboutUs.title")}
                        </h3>
                        <p className="text-text-black text-medium leading-7">
                            {t("aboutUs.description1")}
                        </p>
                        <p className="text-text-black text-medium leading-7">
                            {t("aboutUs.description2")}
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className={`flex ${currentLang === "ar" ? "flex-row-reverse" : "flex-row"} 2xl:w-1/3 xl:w-1/3 md:w-full gap-4`}>
                        <motion.img
                            src={leftAbout}
                            alt="Construction Site Left"
                            className="rounded-lg w-full sm:w-48 h-96 object-cover"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                        <motion.img
                            src={rightAbout}
                            alt="Construction Site Right"
                            className="rounded-lg w-full sm:w-48 h-96 object-cover"
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </div>


                </div>
            </div>
        </Container>
    );
};

export default AboutUs;
