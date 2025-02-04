import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ContainerPhoto from "../../assets/container.jpg";
import Container from "../Container/Container";
import { motion } from "framer-motion";

const Expertise = () => {
    const { t , i18n } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const currentLang = i18n.language;

    const services = [
        {
            title: t("expertise.service1"),
            description: t("expertise.service1Description"),
            image: ContainerPhoto,
        },
        {
            title: t("expertise.service2"),
            description: t("expertise.service2Description"),
            image: ContainerPhoto,
        },
        {
            title: t("expertise.service3"),
            description: t("expertise.service3Description"),
            image: ContainerPhoto,
        }
    ];

    const handleClick = (index) => {
        if (activeIndex !== index) {
            setActiveIndex(index);
        }
    };

    return (
        <Container>
            <div className="py-12">
                <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row items-center justify-between mb-16 px-6 lg:px-0">


                    <div className="lg:w-1/2 w-full">
                        <p className="text-large font-bold text-primary mb-4 text-text-primary">
                            {t("expertise.title")}
                            <p className="text-text-black">{t("expertise.subtitle")}</p>
                        </p>
                    </div>

                    <div className="relative lg:w-1/2 w-full mb-8 lg:mb-0">
                    {currentLang === "ar" ? 
                        <div
                            className="relative w-full h-[265px] overflow-hidden rounded-lg transition-all duration-300 transform group"
                        >
                            <img
                                src={ContainerPhoto}
                                style={{
                                    clipPath: "polygon(0 0, 60% 0%, 100% 100%, 0 100%)",
                                }}
                                alt="Expertise"
                                className="absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-all duration-300 group-hover:scale-110"
                            />
                            <div
                                className="absolute bottom-0 left-0 right-32 p-8 text-white bg-text-primary"
                                style={{
                                    clipPath: "polygon(0 0, 90% 0%, 100% 100%, 0 100%)",
                                }}
                            >
                                {/* <p className="text-sm px-2xl sm:px-l">{t("expertise.description")}</p> */}
                            </div>
                        </div> 
                        : 
                        <div
                            className="relative w-full h-[265px] overflow-hidden rounded-lg transition-all duration-300 transform group"
                        >
                            <img
                                src={ContainerPhoto}
                                style={{
                                    clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0 100%)",
                                }}
                                alt="Expertise"
                                className="absolute top-0 right-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-all duration-300 group-hover:scale-110"
                            />
                            <div
                                className="absolute bottom-0 right-0 left-32 p-8 text-white bg-text-primary"
                                style={{
                                    clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)",
                                }}
                            >
                                {/* <p className="text-sm px-2xl">{t("expertise.description")}</p> */}
                            </div>
                        </div> }

                    </div>
                </div>

                <div className="container mx-auto grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-12 px-6 lg:px-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`text-center group cursor-pointer`}
                            initial={{ scale: 1 }}
                            animate={{
                                scale: activeIndex === index ? 1.05 : 1,
                                transition: { duration: 0.3 },
                            }}
                            onClick={() => handleClick(index)}
                        >
                            <h3 className="text-2xl text-nowrap sm:text-wrap md:text-wrap lg:text-wrap font-bold text-misty mb-4 border-b-2 border-transparent inline-block text-text-primary group-hover:text-text-black group-hover:border-text-black transition-all duration-300">
                                {service.title}
                            </h3>
                            <p className="text-medium text-text-black">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Expertise;
