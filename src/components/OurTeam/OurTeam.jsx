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
        <div className="relative bg-text-primary min-h-screen flex items-center justify-center px-6 lg:px-20 py-20 overflow-hidden">
            {/* الأعمدة الخلفية */}
            <div className={`absolute hidden 2xl:flex xl:flex ${currentLang === "ar" ? "right-24" : "left-24"} bottom-0 w-full h-96 gap-3 opacity-40`}>
                <div className="w-12 h-full bg-text-primary-dark" style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}></div>
                <div className="w-12 h-full bg-text-primary-dark" style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}></div>
                <div className="w-12 h-full bg-text-primary-dark" style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}></div>
            </div>

            <Container>
    <div
        className={`flex flex-col 2xl:flex-row xl:flex-row lg:flex-row items-center w-full gap-12 ${
            currentLang === "ar" ? "mr-48 md:mr-0 sm:mr-0" : "ml-48 md:ml-0 sm:ml-0"
        }`}
    >
        {/* صورة واسم المهندس */}
        <div className="relative flex flex-col items-center xl:w-1/3 text-center">
            <h2 className="text-white text-xl sm:text-lg font-semibold mt-4 lg:mt-8">
                {t("engineer")}
            </h2>
            <h3 className="text-white text-3xl sm:text-2xl font-bold mb-4">{t("name")}</h3>

            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: isZoomedIn ? 1.1 : 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="bg-text-white w-60 sm:w-52 md:w-64 lg:w-80 rounded-3xl overflow-hidden"
            >
                <img src={person} alt="Engineer" className="w-full" />
            </motion.div>
        </div>

        {/* النصوص */}
        <div className="relative 2xl:w-2/3 xl:w-2/3 px-4 lg:px-16 text-white text-center lg:text-left">
            <div className="text-5xl sm:text-4xl text-blue-300 mb-4">“</div>
            <p className="text-base sm:text-sm leading-loose mb-6">{t("quote")}</p>
            <p className="text-base sm:text-sm leading-loose">{t("description")}</p>
        </div>
    </div>
</Container>

        </div>
    );
};

export default OurTeam;
