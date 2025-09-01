import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import person from "../../assets/person.png";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";

const OurTeam = () => {
    const [isZoomedIn, setIsZoomedIn] = useState(true);
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsZoomedIn(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative bg-text-primary flex items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24 py-20 sm:py-16 overflow-hidden ">
            {/* Background columns - hidden on mobile and tablet */}
            <div className={`absolute hidden xl:flex ${currentLang === "ar" ? "right-12 xl:right-24" : "left-12 xl:left-24"} bottom-0 w-full h-64 lg:h-80 xl:h-96 gap-2 lg:gap-3 opacity-40`}>
                <div className="w-8 lg:w-10 xl:w-12 h-full bg-text-primary-dark" style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}></div>
                <div className="w-8 lg:w-10 xl:w-12 h-full bg-text-primary-dark" style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}></div>
                <div className="w-8 lg:w-10 xl:w-12 h-full bg-text-primary-dark" style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}></div>
            </div>

            <Container>
                <div className={`flex flex-col xl:flex-row lg:flex-row items-center justify-center lg:items-start my-8 sm:my-12 lg:my-16 xl:my-20 w-full gap-8 sm:gap-10 lg:gap-12 xl:gap-16 ${currentLang === "ar" ? "xl:mr-32 2xl:mr-48" : "xl:ml-32 2xl:ml-48"}`}>
                    
                    {/* Image and title section */}
                    <div className="relative flex flex-col items-center lg:items-start w-full lg:w-auto lg:flex-shrink-0">
                        {/* Title - shown above image on mobile */}
                        <div className="text-center lg:text-left mb-6 lg:mb-4 lg:order-1">
                            <h2 className="text-white text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-semibold mb-2">
                                {t("engineer")}
                            </h2>
                            <h3 className="text-white text-xl sm:text-2xl lg:text-large xl:text-2xl font-bold">
                                {t("name")}
                            </h3>
                        </div>

                        {/* Image container */}
                        <div className="bg-text-white w-64 sm:w-72 md:w-80 lg:w-80 xl:w-96 rounded-3xl overflow-hidden lg:order-2">
                            <motion.img
                                src={person}
                                alt="Engineer"
                                className="w-full h-auto"
                                initial={{ scale: 1.2 }}
                                animate={{ scale: isZoomedIn ? 1.2 : 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </div>
                    </div>

                    {/* Text content section */}
                    <div className="relative w-full lg:w-auto lg:flex-1 lg:max-w-2xl px-4 sm:px-6 lg:px-8 xl:px-16 text-white text-center lg:text-left">
                        <div className="text-5xl sm:text-6xl lg:text-7xl w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-blue-300 mb-4 lg:mb-6 mx-auto lg:mx-0">
                            "
                        </div>
                        
                        <p className="text-base sm:text-lg lg:text-xl xl:text-xl leading-relaxed lg:leading-loose font-semibold text-text-dark mb-4 lg:mb-6">
                            {t("quote")}
                        </p>
                        
                        <p className="text-base sm:text-lg lg:text-xl xl:text-xl leading-relaxed lg:leading-loose font-semibold">
                            {t("description")}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurTeam;