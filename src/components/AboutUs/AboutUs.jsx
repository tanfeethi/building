import React from 'react';
import { FaStar } from 'react-icons/fa';
import aboutusSection from '../../assets/aboutusSection.jpg';
import Button from '../Buttons/Button';

const AboutUs = () => {
    return (
        <div className="flex flex-wrap items-center p-8">

            <div className="relative w-full md:w-1/2">
                <img
                    src={aboutusSection}
                    alt="Construction Site"
                    className="rounded-lg w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gray-200 p-4 rounded-lg flex items-center shadow-lg">
                    <FaStar className="text-text-primary w-6 h-6 mr-2" />
                    <p className="text-gray-700 font-medium">+20 years of experience</p>
                </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-8">
                <h3 className="text-text-primary font-bold text-lg mb-4">About Us</h3>
                <p className="text-gray-700 text-base leading-6 mb-6">
                    Founded in 2000, Building Reference United Company is a Saudi company specializing in construction. 
                    We undertake all types of civil, architectural, and electromechanical works, offering comprehensive 
                    services in project management and execution.
                </p>
                <p className="text-gray-700 text-base leading-6 mb-6">
                    Our company strives to adopt innovative ideas and bring them to life with the highest quality standards, 
                    in compliance with international specifications and the Saudi Building Code.
                </p>
                <Button className="text-text-white bg-text-primary px-l py-m rounded-2xl font-medium transition" name={"Learn More"} />
            
            </div>
        </div>
    );
};

export default AboutUs;
