import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useFetch from "../../hooks/UseFetch";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
    const { i18n, t } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("language") || "ar");
    const [isLangLoaded, setIsLangLoaded] = useState(false);

    const { data: testimonials, loading, error } = useFetch("api/frontend/reviews", {}, lang);

    // Ensure language from localStorage is applied
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

    if (!isLangLoaded) {
        return <div className="text-center">{t("loading")}...</div>;
    }

    if (loading) {
        return <div className="text-center">{t("loading")}...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{t("error")}: {error}</div>;
    }

    if (!testimonials || testimonials.length === 0) {
        return <div className="text-center text-red-500">{t("no_testimonials_found")}</div>;
    }

    return (
        <div className="bg-gray-900 py-16">
            <h2 className="text-center text-white text-3xl font-bold mb-12">
                {t("testimonials")}
            </h2>
            <div className="container mx-auto">
                <Swiper spaceBetween={30} slidesPerView={3} loop={true}>
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="flex flex-col items-center">
                                <div className="bg-white rounded-lg shadow-lg p-8 relative text-center">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                        <span className="text-6xl text-gray-300 font-bold">“</span>
                                    </div>
                                    <p className="text-gray-600 text-lg mb-8">{testimonial.text}</p>

                                    <div
                                        className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0"
                                        style={{
                                            borderLeft: "10px solid transparent",
                                            borderRight: "10px solid transparent",
                                            borderTop: "10px solid white",
                                        }}
                                    ></div>
                                </div>
                                <div className="mt-6">
                                    <img
                                        src={testimonial.image}
                                        alt={`Testimonial ${testimonial.id}`}
                                        className="w-16 h-16 rounded-full border-2 border-gray-800"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
