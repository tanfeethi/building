import React, { useState } from "react";
import Container from "../Container/Container";
import useFetch from "../../hooks/UseFetch";

const Hero = () => {
    const { data: sliders, loading, error } = useFetch("api/frontend/sliders");
    const [currentIndex, setCurrentIndex] = useState(0);

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
                    <img
                        src={sliders[currentIndex]?.background}
                        alt={sliders[currentIndex]?.title}
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />

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
                    <div className="text-right">
                        <h1 className="text-3xl font-bold text-text-primary">
                            {sliders[currentIndex]?.title}
                        </h1>
                        <p className="text-small mt-4 text-gray-700">
                            {sliders[currentIndex]?.text}
                        </p>
                        <button className="mt-6 px-6 py-3 bg-text-primary text-white rounded-2xl hover:bg-opacity-80">
                            {sliders[currentIndex]?.btnTitle}
                        </button>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default Hero;
