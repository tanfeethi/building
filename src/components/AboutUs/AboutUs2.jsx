import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../Container/Container";
import useFetch from "../../hooks/UseFetch";
import Aboutlogo from '../../assets/Aboutlogo.png';
import { useTranslation } from "react-i18next";

const AboutUs2 = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("language") || "ar");
    const { data, loading, error } = useFetch("api/frontend/staticPages", {}, lang);

    useEffect(() => {
        const storedLang = localStorage.getItem("language") || "ar";
        if (i18n.language !== storedLang) {
            i18n.changeLanguage(storedLang).then(() => {
                setLang(storedLang);
            });
        } else {
            setLang(storedLang);
        }
    }, [i18n.language]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    return (
        <Container className="p-8 bg-white">
            <motion.div
                className="flex flex-col 2xl:flex-row justify-center items-center mb-8xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="2xl:w-1/2">
                    <h2 className="text-text-primary text-4xl me-8 font-bold mb-4 text-center">
                        {i18n.language === "ar" ? "من نحــــــن" : "About Us"}
                    </h2>
                    <p className='mt-xl flex flex-wrap justify-center text-xl md:text-3xl items-center'>
                        {i18n.language === "ar" ? "في عالم البناء" : "In world construction"}
                        <span className='mx-4'>
                            <img src={Aboutlogo} alt="Aboutlogo" />
                        </span>
                        {i18n.language === "ar" ? "شركة مرجع المباني المتحدة" : "United Buildings Company"}
                    </p>
                </div>
            </motion.div>

            {data &&
                data.map((section, index) => (
                    <motion.div
                        key={section.name}
                        className={`flex flex-col 2xl:flex-row justify-between items-center sm:items-start md:items-start mb-7xl ${index % 2 === 0 ? "" : "2xl:flex-row-reverse"}`}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="2xl:w-1/2 md:w-full sm:w-full">
                            <motion.img
                                src={section.image}
                                alt={section.title}
                                className="contain w-max-[1264px] w-full 2xl:w-max-[1264px] xl:w-max-[1264px] lg:w-max-[664px] lg:h-[457px] md:w-max-[444px] md:h-[457px] sm:max-w-full sm:h-[357px] h-[557px] my-2xl mb-5xl"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                        </div>
                        <div className="2xl:w-1/2 my-xl md:w-full sm:w-full">
                            <h2 className="text-text-primary text-4xl mx-8 font-bold mb-4">
                                {section.title}
                            </h2>
                            <motion.p
                                className="text-text-primary-dark mx-8 text-medium"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {section.text}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
        </Container>
    );
};

export default AboutUs2;
