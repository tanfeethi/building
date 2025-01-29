import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container/Container";
import useFetch from "../../hooks/UseFetch";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("language") || "ar"); // Ensure correct language on load
    const [isLangLoaded, setIsLangLoaded] = useState(false); // To track language loading
    const { data: sliders, loading, error } = useFetch("api/frontend/sliders", {}, lang);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const storedLang = localStorage.getItem("language") || "ar";
        if (i18n.language !== storedLang) {
            i18n.changeLanguage(storedLang).then(() => {
                setLang(storedLang);
                setIsLangLoaded(true); // Set after ensuring language is applied
            });
        } else {
            setIsLangLoaded(true); // Language was already correct
        }
    }, []);

    useEffect(() => {
        if (isLangLoaded) {
            setLang(i18n.language); // Update lang after i18n updates
        }
    }, [i18n.language, isLangLoaded]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? sliders.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (!isLangLoaded) {
        return <div className="text-center">Loading...</div>;
    }

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="w-full my-5xl flex justify-between">
            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 gap-8 w-full">
                <div className="relative w-[842px] h-[500px] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={sliders[currentIndex]?.background}
                            alt={sliders[currentIndex]?.title}
                            className="w-full h-full object-cover rounded-2xl shadow-lg"
                            initial={{ y: -500 }}
                            animate={{ y: 0 }}
                            exit={{ y: -500 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                    </AnimatePresence>

                    <div className="absolute bottom-4 left-4 flex space-x-4">
                        <button
                            onClick={prevSlide}
                            className="text-text-primary text-3xl bg-text-white bg-opacity-50 px-4 py-2 hover:bg-opacity-80 transition"
                        >
                            ❮
                        </button>
                        <button
                            onClick={nextSlide}
                            className="text-text-primary text-3xl bg-text-white bg-opacity-50 px-4 py-2 hover:bg-opacity-80 transition"
                        >
                            ❯
                        </button>
                    </div>
                </div>

                <Container>
                    <motion.div
                        className="text-right"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <h1 className="text-3xl font-bold text-text-primary">
                            {sliders[currentIndex]?.title}
                        </h1>
                        <p className="text-small mt-4 text-gray-700">
                            {sliders[currentIndex]?.text}
                        </p>
                        <button className="mt-6 px-6 py-3 bg-text-primary text-white rounded-2xl hover:bg-opacity-80">
                            {sliders[currentIndex]?.btnTitle}
                        </button>
                    </motion.div>
                </Container>
            </div>
        </div>
    );
};

export default Hero;
