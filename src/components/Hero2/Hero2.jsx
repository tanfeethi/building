import React from 'react';
import { useLocation } from 'react-router-dom';
import heroSection2 from '../../assets/heroSection2.png';

const Hero2 = () => {
    const location = useLocation();
    let pageTitle = "";
    let pagePath = "";

    if (location.pathname === "/about") {
        pageTitle = "About Us";
        pagePath = "Home / About Us";
    } else if (location.pathname === "/services") {
        pageTitle = "Services";
        pagePath = "Home / Services";
    } else if (location.pathname === "/our-projects") {
        pageTitle = "Our Projects";
        pagePath = "Home / Our Projects";
    } else if (location.pathname === "/all-projects") {
        pageTitle = "All Projects";
        pagePath = "Home / All Projects";
    } else if (location.pathname === "/residential-project") {
        pageTitle = "Residential Project";
        pagePath = "Home / Residential Project";
    } else if (location.pathname === "/team") {
        pageTitle = "Team";
        pagePath = "Home / Team";
    } else if (location.pathname === "/contact") {
        pageTitle = "Contact Us";
        pagePath = "Home / Contact Us";
    }

    if (location.pathname === "/") {
        return null;
    }

    return (
        <div
            className="relative h-80 px-8xl bg-cover bg-center flex items-center justify-start text-left"
            style={{ backgroundImage: `url(${heroSection2})` }}
        >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-white">
                    <h1 className="text-xlarge font-bold mb-l">{pageTitle}</h1>
                    <p className="text-medium mb-2xl">{pagePath}</p>
                </div>
        </div>
    );
};

export default Hero2;
