import React from "react";
import Container from "../Container/Container";
import Button from "../Buttons/Button";
import useFetch from "../../hooks/UseFetch";

const Projects = () => {
    const { data: projects, loading, error } = useFetch("api/frontend/projects");

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    return (
        <Container>
            <div className="my-5xl">
                <h2 className="text-text-primary text-large font-bold mb-8 text-end">
                    مشاريعنا
                </h2>
                <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {projects.slice(0, 4).map((project) => (
                        <div
                            key={project.id}
                            className="relative rounded-lg overflow-hidden shadow-lg group"
                        >
                            <img
                                src={project.images[0]?.image || ""}
                                alt={project.title}
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-end items-end bg-text-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h4 className="text-text-primary group-hover:text-text-white mb-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white">
                                    {project.title}
                                </h4>
                                <p className="text-text-primary group-hover:text-text-white text-sm mb-5">
                                    {project.deliveredStatus ? "تم التسليم" : "قيد التنفيذ"}
                                </p>
                                <Button
                                    name={project.address || "معرفة المزيد"}
                                    className="bg-transparent border-2 border-text-white text-white px-4 py-2 transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Projects;
