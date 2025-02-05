import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import ProjectDetail from '../../assets/ProjectDetails.jpg';
import { useTranslation } from "react-i18next";

const ProjectDetails = () => {
    const { id } = useParams();
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("language") || "ar");
    const { data: project, loading, error } = useFetch(`api/frontend/projects/${id}`, {}, lang);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentLang = i18n.language;

    useEffect(() => {
        const storedLang = localStorage.getItem("language") || "ar";
        if (i18n.language !== storedLang) {
            i18n.changeLanguage(storedLang).then(() => {
                setLang(storedLang);
            });
        } else {
            setLang(storedLang);
        }
    }, [i18n.language]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;
    if (!project) return <div className="text-center">Project not found</div>;

    return (
        <div>
            <Container>
                {/* صورة الخلفية */}
                <img src={ProjectDetail} className="w-full" alt="ProjectDetail" />

                {/* 🔥 Breadcrumb المضاف 🔥 */}
                <div className="py-4 text-lg text-gray-700">
                    <Link to="/" className="text-text-primary hover:underline">{currentLang === "ar" ? "الرئيسية" : "Home"}</Link>
                    <span className="mx-2">{'>'}</span>
                    <Link to="/projects" className="text-text-primary hover:underline">{currentLang === "ar" ? "أعمالنا" : "Our Projects"}</Link>
                    <span className="mx-2">{'>'}</span>
                    <span className="font-semibold">{project.title}</span>
                </div>

                {/* عنوان المشروع */}
                <div className="py-6">
                    <h1 className="text-4xl font-bold text-text-primary">{project.title}</h1>
                    <p className="text-lg text-text-primary-dark-600 mt-2">{project.type || "غير متوفر"}</p>
                </div>

                {/* سلايدر الصور */}
                <div className="relative w-full md:w-[842px] mx-auto h-[500px] overflow-hidden rounded-2xl shadow-lg mb-10">
                    {project.images.length > 0 ? (
                        <img
                            src={project.images[currentIndex]?.image || ""}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            لا توجد صور متوفرة
                        </div>
                    )}
                    {project.images.length > 1 && (
                        <>
                            {currentLang === "ar" ? (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-primary text-3xl bg-white bg-opacity-70 px-4 py-2 rounded-full shadow-lg hover:bg-opacity-90 transition z-20"
                                    >
                                        ❮
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-primary text-3xl bg-white bg-opacity-70 px-4 py-2 rounded-full shadow-lg hover:bg-opacity-90 transition z-20"
                                    >
                                        ❯
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-primary text-3xl bg-white bg-opacity-70 px-4 py-2 rounded-full shadow-lg hover:bg-opacity-90 transition z-20"
                                    >
                                        ❮
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-primary text-3xl bg-white bg-opacity-70 px-4 py-2 rounded-full shadow-lg hover:bg-opacity-90 transition z-20"
                                    >
                                        ❯
                                    </button>
                                </>
                            )}
                        </>
                    )}
                </div>

                {/* تفاصيل المشروع */}
                <div className="py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                {currentLang === "ar" ? "وصف المشروع" : "Project Description"}
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {project.text}
                            </p>
                        </div>
                        <div className="rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                {currentLang === "ar" ? "تفاصيل المشروع" : "Project Details"}
                            </h2>
                            <ul className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 space-x-6 text-lg">
                                <li className="flex flex-col mb-4">
                                    <span className="font-bold text-text-primary">
                                        {currentLang === "ar" ? "الموقع" : "Location"}
                                    </span>
                                    {project.address || (currentLang === "ar" ? "غير متوفر" : "Not Available")}
                                </li>
                                <li className="flex flex-col mb-4">
                                    <span className="font-bold text-text-primary">
                                        {currentLang === "ar" ? "نطاق العمل" : "Scope of Work"}
                                    </span>
                                    {project.type || (currentLang === "ar" ? "غير متوفر" : "Not Available")}
                                </li>
                                <li className="flex flex-col mb-4">
                                    <span className="font-bold text-text-primary">
                                        {currentLang === "ar" ? "الحالة" : "Status"}
                                    </span>
                                    {project.deliveredStatus === 1
                                        ? (currentLang === "ar" ? "تم التسليم" : "Delivered")
                                        : project.deliveredStatus === 0
                                            ? (currentLang === "ar" ? "لم يتم التسليم" : "Not Delivered")
                                            : (currentLang === "ar" ? "غير معروف" : "Unknown")}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>

            <Footer />
        </div>
    );
};

export default ProjectDetails;
