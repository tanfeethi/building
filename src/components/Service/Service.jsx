import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Container from "../Container/Container";
import useFetch from "../../hooks/UseFetch";

const Service = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("language") || "ar");

    const { data: services, loading, error } = useFetch("api/frontend/services", {}, lang);

    useEffect(() => {
        const storedLang = localStorage.getItem("language") || "ar";
        if (i18n.language !== storedLang) {
            i18n.changeLanguage(storedLang).then(() => setLang(storedLang));
        } else {
            setLang(storedLang);
        }
    }, [i18n.language]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    return (
        <Container>
            <h2 className="text-text-primary text-large font-bold mb-8">
                {t("services")}
            </h2>

            <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 gap-8">
                {services &&
                    services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative rounded-lg overflow-hidden shadow-lg group w-full h-96 cursor-pointer bg-white"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.img
                                src={service.image} // Using API image
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-0 scale-90 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 w-full h-full bg-text-dark opacity-0 group-hover:opacity-50 transition-all duration-500"></div>

                            <motion.div className="absolute bottom-4 right-4 left-4">
                                <h4 className="w-fit text-text-primary mb-xl text-xl font-bold border-b-4 border-text-primary transition-all duration-300 group-hover:text-text-white group-hover:border-text-white">
                                    {service.title}
                                </h4>
                            </motion.div>
                        </motion.div>
                    ))}
            </div>
        </Container>
    );
};

export default Service;
