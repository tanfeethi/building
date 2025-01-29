import React, { useState, useEffect } from "react";
import numberOne from "../../assets/numberOne.png";
import numberTwo from "../../assets/numberTwo.png";
import numberThree from "../../assets/numberThree.png";
import Container from "../Container/Container";

const PriceSection = () => {
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        setActiveCard(0);
    }, []);

    const handleCardClick = (cardIndex) => {
        setActiveCard(cardIndex);  
    };

    return (
        <Container>
            <div className="py-10 text-end">
                <h2 className="text-large font-bold text-text-primary mb-6">أسعارنا</h2>
                <p className="text-medium text-text-grey mb-10">
                    لتقديم عرض سعر احترافي، تقوم شركة مرجع المباني بدراسة شاملة تمر بثلاث مراحل أساسية.
                </p>
                <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row justify-center items-center gap-6">
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className={`group relative transition-all duration-300 overflow-hidden cursor-pointer rounded-2xl ${
                                activeCard === index
                                    ? "w-96 h-60 bg-text-primary-dark"
                                    : "w-80 h-52 bg-text-primary"
                            }`}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="absolute top-8 right-8">
                                <img
                                    src={index === 0 ? numberOne : index === 1 ? numberTwo : numberThree}
                                    alt={`المرحلة ${index + 1}`}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>

                            <div
                                className={`transition-opacity duration-300 p-6 me-4xl text-right ${
                                    activeCard === index ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                <h3 className="text-large font-bold mb-4 text-text-white">
                                    {`المرحلة ${index + 1}`}
                                </h3>
                                <p className="text-medium text-text-white">
                                    {index === 0
                                        ? "دراسة المخططات والمواصفات"
                                        : index === 1
                                        ? "دراسة المخططات والتكاليف"
                                        : "تنفيذ المشروع والتسليم"}
                                </p>
                                <p className="text-small mt-4 text-text-grey">
                                    {index === 0
                                        ? "في هذه المرحلة، نقوم بدراسة التفاصيل الفنية للمشروع من مخططات ومواصفات."
                                        : index === 1
                                        ? "في هذه المرحلة، يتم تحديد ميزانية المشروع بناءً على تفاصيل المواد والمواصفات."
                                        : "في هذه المرحلة، يتم البدء في التنفيذ وفقًا للخطط المحددة وتسليم المشروع النهائي."}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-medium text-text-black mt-10">
                    اتصل بنا الآن لتعرف أفضل عرض سعر لمشروعك!
                </p>
            </div>
        </Container>
    );
};

export default PriceSection;
