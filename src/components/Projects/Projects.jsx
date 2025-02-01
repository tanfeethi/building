import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import Button from "../Buttons/Button";
import { motion } from "framer-motion";
import useFetch from "../../hooks/UseFetch";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("language") || "ar");
    const { data: projects, loading, error } = useFetch("api/frontend/projects", {}, lang);

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

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    return (
        <Container>
            <div className="my-5xl">
                <h2 className="text-text-primary text-large font-bold mb-8">
                    {i18n.language === "ar" ? "مشاريعنا" : "Our Projects"}
                </h2>
                <div id="projects" className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {projects.slice(0, 4).map((project) => (
                        <motion.div
                            key={project.id}
                            className="relative rounded-lg overflow-hidden shadow-lg group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img
                                src={project.images[0]?.image || ""}
                                alt={project.title}
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-end items-end bg-text-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <motion.div
                                    className="flex flex-col items-end"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h4 className="text-text-primary group-hover:text-text-white mb-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white">
                                        {project.title}
                                    </h4>
                                    <p className="text-text-primary group-hover:text-text-white text-sm mb-5">
                                        {project.deliveredStatus ?
                                            (i18n.language === "ar" ? "تم التسليم" : "Delivered") :
                                            (i18n.language === "ar" ? "قيد التنفيذ" : "In Progress")} {/* ترجمة الحالة */}
                                    </p>
                                    <a href="/projects">
                                        <Button
                                            name={project.address || (i18n.language === "ar" ? "معرفة المزيد" : "Learn More")}
                                            className="bg-transparent border-2 md:px-2 border-text-white text-white px-4 py-2 transition-all duration-300"
                                        />
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Projects;
