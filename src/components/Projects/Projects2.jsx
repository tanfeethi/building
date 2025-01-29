import React from "react";
import Container from "../Container/Container";
import useFetch from "../../hooks/UseFetch";
import { Link } from "react-router-dom";

const Projects = () => {
    const lang = "ar";
    const { data: projects, loading, error } = useFetch("api/frontend/projects", {}, lang);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    if (!Array.isArray(projects)) {
        return <div className="text-center text-red-500">No projects available.</div>;
    }

    return (
        <Container>
            <div className="my-5xl">
                <h2 className="text-text-primary text-large font-bold mb-8 text-end">
                    مشاريعنا
                </h2>
                <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Link to={`/projects/${project.id}`} key={project.id}>
                            <div
                                key={project.id}
                                className="relative rounded-lg overflow-hidden shadow-lg group"
                            >
                                <img
                                    src={project.images[0]?.image || ""}
                                    alt={project.title}
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-end items-end bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="absolute right-0 bottom-0 w-full p-8 space-y-8 flex flex-col justify-end items-end bg-opacity-0 group-hover:bg-text-primary transition-all duration-300">
                                        <h4 className="text-xl font-bold border-b-4 border-text-primary text-text-primary group-hover:text-text-white group-hover:border-text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {project.title}
                                        </h4>
                                        <div className="flex justify-between w-full text-text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                                            <p>{project.type}</p>
                                            <p><p>{project.deliveredStatus === 1 ? "تم التسليم" : "لم يتم التسليم"}</p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Projects;
