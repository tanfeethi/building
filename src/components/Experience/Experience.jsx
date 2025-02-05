import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import servicesPhoto1 from "../../assets/servicesPhoto1.png";
import Container from "../Container/Container";
import { motion } from "framer-motion";

const ExperienceSection = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const [experiences, setExperiences] = useState(
        t("experience.stats", { returnObjects: true }).map((exp) => ({
            ...exp,
            image: servicesPhoto1,
        }))
    );

    const handleClick = (index) => {
        if (index === 0) return;

        const newExperiences = [
            experiences[index],
            ...experiences.slice(0, index),
            ...experiences.slice(index + 1),
        ];
        setExperiences(newExperiences);
    };

    return (
        <Container>
            <div className="py-10">
                <h2 className="text-large font-bold text-text-primary mb-4">{t("experience.title")}</h2>
                <p className="text-text-grey text-medium mb-10">{t("experience.description")}</p>

                <div
                    className={`flex flex-wrap items-end justify-center gap-6 ${currentLang === "en" ? "flex-row-reverse" : ""}`}
                    style={{ minHeight: "600px" }}
                >
                    {experiences.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative ${index === 0 ? "w-64 h-[596px]" : "w-52 h-[296px]"} 
                                bg-text-dark text-white flex my-xl flex-col justify-end items-center cursor-pointer`}
                            style={{
                                clipPath: (() => {
                                    if (item.text === "450+") {
                                        return currentLang === "en"
                                            ? "polygon(0 0, 100% 60%, 100% 100%, 0 100%)"
                                            : "polygon(0 60%, 100% 0%, 100% 100%, 0 100%)";
                                    }
                                    return currentLang === "en"
                                        ? "polygon(0 0, 100% 40%, 100% 100%, 0 100%)"
                                        : "polygon(0 60%, 100% 0%, 100% 100%, 0 100%)";
                                })(),
                            }}

                            initial={{ scale: 1 }}
                            onClick={() => handleClick(index)}
                        >
                            <div className="absolute inset-0 w-full h-full z-0">
                                <img
                                    src={item.image}
                                    alt={item.description || "Experience Image"}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10 bg-text-dark opacity-80 w-full h-full flex items-center justify-center flex-col">
                                <p className="text-4xl font-bold mx-5xl">{item.text}</p>
                                {item.description && (
                                    <p className="text-lg mt-2 mx-10">{currentLang === "ar" ? "أنشطة ومجالات" : "Activities & Fields"}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ExperienceSection;
