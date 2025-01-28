import React from "react";
import servicesPhoto1 from '../../assets/servicesPhoto1.png';
import Container from "../Container/Container";

const ExperienceSection = () => {
    const experiences = [
        { image: servicesPhoto1, text: "239+", description: null },
        { image: servicesPhoto1, text: "49+", description: null },
        { image: servicesPhoto1, text: "21+", description: null },
        { image: servicesPhoto1, text: "3+", description: "أنشطة ومجالات" },
    ];

    return (
        <Container >
            <div className=" py-10 text-end">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">الخبرة تجعلنا واثقين</h2>
                <p className="text-gray-600 mb-10">
                    أكثر من 20 عامًا من الخبرة في تقديم خدمات المقاولات بجودة وإتقان.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    {experiences.map((item, index) => (
                        <div
                            key={index}
                            className={`relative ${item.text === "3+" ? "w-64 h-[596px]" : "w-52 h-[296px]"
                                } bg-blue-900 text-white flex flex-col justify-end items-center`}
                            style={{
                                clipPath:
                                    item.text === "3+"
                                        ? "polygon(0 0, 100% 60%, 100% 100%, 0 100%)"
                                        : "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
                            }}
                        >
                            <div className="absolute inset-0 w-full h-full z-0">
                                <img
                                    src={item.image}
                                    alt={item.description || "Experience Image"}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10 p-4 bg-blue-900 opacity-80 w-full h-full flex items-center justify-center flex-col">
                                <p className="text-4xl font-bold">{item.text}</p>
                                {item.description && (
                                    <p className="text-lg mt-2">{item.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ExperienceSection;
