import React from "react";
import Container from "../Container/Container";
import useFetch from "../../hooks/UseFetch";
import Aboutlogo from '../../assets/Aboutlogo.png';

const AboutUs2 = () => {
    const { data, loading, error } = useFetch("api/frontend/staticPages", {}, "ar");

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    // Render dynamically based on fetched data
    return (
        <Container className="p-8 bg-white">
            <div className="flex flex-col 2xl:flex-row justify-center items-center mb-8xl">
                <div className="2xl:w-1/2">
                    <h2 className="text-text-primary text-3xl me-8 font-bold mb-4 text-center">من نحــــــن</h2>
                    <p className='mt-xl flex justify-center text-medium items-center '>في عالم البناء  <span className='mx-4'><img src={Aboutlogo} alt="Aboutlogo" /></span> شركة مرجع المباني المتحدة </p>
                </div>
            </div>
            {data &&
                data.map((section, index) => (
                    <div
                        key={section.name}
                        className={`flex flex-col 2xl:flex-row items-center justify-between mb-8xl ${index % 2 === 0 ? "" : "2xl:flex-row-reverse"
                            }`}
                    >
                        <div className="2xl:w-1/2">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="2xl:w-1/2 text-right">
                            <h2 className="text-text-primary text-3xl me-8 font-bold mb-4">
                                {section.title}
                            </h2>
                            <p className="text-text-primary-dark me-8">{section.text}</p>
                        </div>
                    </div>
                ))}
        </Container>
    );
};

export default AboutUs2;
