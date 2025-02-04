import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container/Container";
import useFetch from "../../hooks/UseFetch";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("language") || "ar");
    const [isLangLoaded, setIsLangLoaded] = useState(false);
    const { data: sliders, loading, error } = useFetch("api/frontend/sliders", {}, lang);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentLang = i18n.language;

    useEffect(() => {
        const storedLang = localStorage.getItem("language") || "ar";
        if (i18n.language !== storedLang) {
            i18n.changeLanguage(storedLang).then(() => {
                setLang(storedLang);
                setIsLangLoaded(true);
            });
        } else {
            setIsLangLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (isLangLoaded) {
            setLang(i18n.language);
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

    if (!isLangLoaded || loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="w-full my-5 flex flex-col 2xl:flex-row xl:flex-row items-center lg:items-start justify-center">
            <div className="relative w-full sm:w-[80%] md:w-[70%] xl:w-[50%] h-[50vh] sm:h-[40vh] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="absolute top-0 left-0 w-full h-full"
                        initial={{ y: 300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <img
                            src={sliders[currentIndex]?.background}
                            alt={sliders[currentIndex]?.title}
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className={`absolute ${currentLang === "ar" ? "bottom-0 right-0" : "bottom-0 left-0"} flex flex-col`}>
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

            {/* Text Content */}
            <Container>
                <motion.div
                    className="m-xl"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <h1 className="text-large font-bold text-text-primary">
                        {sliders[currentIndex]?.title}
                    </h1>
                    <p className="text-medium mt-4 text-text-black">
                        {sliders[currentIndex]?.text}
                    </p>
                    <a href="#projects">
                        <button className="mt-6 px-6 py-3 bg-text-primary text-white hover:bg-opacity-80">
                            {sliders[currentIndex]?.btnTitle}
                        </button>
                    </a>
                </motion.div>
            </Container>
        </div>
    );
};

export default Hero;
