import React, { useState, useEffect } from "react";
import numberOne from "../../assets/numberOne.png";
import numberTwo from "../../assets/numberTwo.png";
import numberThree from "../../assets/numberThree.png";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";

const PriceSection = () => {
    const { t, i18n } = useTranslation();
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        setActiveCard(0);
    }, []);

    const handleCardClick = (cardIndex) => {
        setActiveCard(cardIndex);  
    };

    const isRtl = i18n.language === "ar";

    return (
        <Container>
            <div className="py-10">
                <h2 className="text-large font-bold text-text-primary mb-6">
                    {t("priceSection.title")}
                </h2>
                <p className="text-medium text-text-grey mb-10">
                    {t("priceSection.description")}
                </p>
                <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row justify-center items-center gap-6">
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className={`group relative transition-all duration-300 overflow-hidden cursor-pointer rounded-2xl ${
                                activeCard === index
                                    ? "w-[588px] sm:w-full 2xl:h-60 xl:h-60 h-72 sm:h-full md:h-full bg-text-primary-dark"
                                    : "w-72 h-52 bg-text-primary"
                            }`}
                            onClick={() => handleCardClick(index)}
                        >
                            {/* Conditional placement of the image based on language */}
                            <div className={`absolute ${isRtl ? 'right-8' : 'left-8'} top-16`}>
                                <img
                                    src={index === 0 ? numberOne : index === 1 ? numberTwo : numberThree}
                                    alt={t(`priceSection.stage${index + 1}`)}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>

                            <div
                                className={`transition-opacity mx-6xl duration-300 my-xl ${
                                    activeCard === index ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                <h3 className="text-large font-bold mb-4 text-text-white">
                                    {t(`priceSection.stage${index + 1}`)}
                                </h3>
                                <p className="text-medium text-text-white">
                                    {t(`priceSection.stage${index + 1}DescriptionShort`)}
                                </p>
                                <p className="text-small mt-4 text-text-grey">
                                    {t(`priceSection.stage${index + 1}DescriptionLong`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-medium text-text-black mt-10">
                    {t("priceSection.contact")}
                </p>
            </div>
        </Container>
    );
};

export default PriceSection;
