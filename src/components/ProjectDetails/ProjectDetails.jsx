import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import ProjectDetail from '../../assets/ProjectDetails.jpg';

const ProjectDetails = () => {
    const { id } = useParams();
    const { data: project, loading, error } = useFetch(`api/frontend/projects/${id}`);
    const [currentIndex, setCurrentIndex] = useState(0);

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
                <img src={ProjectDetail} className="w-full" alt="ProjectDetail" />
                <div className="text-center py-6">
                    <h1 className="text-4xl font-bold text-gray-800">{project.title}</h1>
                    <p className="text-lg text-gray-600 mt-2">{project.type || "غير متوفر"}</p>
                </div>

                <div className="relative w-full md:w-[842px] mx-auto h-[500px] overflow-hidden rounded-2xl shadow-lg mb-10">
                    {project.images.length > 0 ? (
                        <img
                            src={project.images[currentIndex]?.image || ""}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center  text-gray-500">
                            لا توجد صور متوفرة
                        </div>
                    )}
                    {project.images.length > 1 && (
                        <>
                            {/* Left Arrow */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 text-3xl bg-white bg-opacity-70 px-4 py-2 rounded-full shadow-lg hover:bg-opacity-90 transition z-10"
                            >
                                ❮
                            </button>
                            {/* Right Arrow */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 text-3xl bg-white bg-opacity-70 px-4 py-2 rounded-full shadow-lg hover:bg-opacity-90 transition z-10"
                            >
                                ❯
                            </button>
                        </>
                    )}

                </div>

                {/* Project Details */}
                <div className="py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Description Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">وصف المشروع</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {/* مشروع إنشاء وتنفيذ فيلا خاصة بواجهة نيو كلاسيك. بالإضافة إلى عمارة سكنية 
                                تتكون من أربع شقق. تتألف الفيلا الخاصة من ثلاثة طوابق: طابق تحت الأرض، الطابق الأرضي، 
                                والطابق الأول. يحتوي الطابق الأول على المدخل الرئيسي للفيلا. */}
                                {project.text}
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">تفاصيل المشروع</h2>
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li>
                                    <strong className="font-bold text-gray-800">الموقع:</strong> {project.address || "غير متوفر"}
                                </li>
                                <li>
                                    <strong className="font-bold text-gray-800">نطاق العمل:</strong> {project.type || "غير متوفر"}
                                </li>
                                <li>
                                    <strong className="font-bold text-gray-800">الحالة:</strong>
                                    {project.deliveredStatus === 1
                                        ? "تم التسليم"
                                        : project.deliveredStatus === 0
                                            ? "لم يتم التسليم"
                                            : "غير معروف"}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default ProjectDetails;
