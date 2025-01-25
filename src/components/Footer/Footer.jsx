import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-text-white py-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center text-text-dark">
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <img src={logo} alt="BRU.co Logo" className="mb-4 h-10 lg:h-14 sm:h-14" />
                    <p className="text-small leading-6 mb-4">
                        Founded in 2000, Marj' Al-Banai United is a Saudi construction company offering civil, architectural, electromechanical services, and project management, committed to quality and the Saudi Building Code.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-text-primary hover:text-text-primary-dark text-xl">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-text-primary hover:text-text-primary-dark text-xl">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-text-primary hover:text-text-primary-dark text-xl">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <h3 className="font-medium text-medium mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-text-dark hover:text-text-primary">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-text-dark hover:text-text-primary">
                                Our Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-text-dark hover:text-text-primary">
                                Our Projects
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-text-dark hover:text-text-primary">
                                Our Team
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact and Location Info */}
                <div className="lg:w-1/3 flex flex-col lg:flex-row justify-between lg:items-start">
                    {/* Contact Us */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h3 className="font-medium text-medium mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="mailto:info@bru.com.sa" className="flex items-center text-text-dark hover:text-text-primary">
                                    <FiMail className="mr-2 text-lg" /> info@bru.com.sa
                                </a>
                            </li>
                            <li>
                                <a href="tel:0552311322" className="flex items-center text-text-dark hover:text-text-primary">
                                    <FiPhone className="mr-2 text-lg" /> 0552311322
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div className="lg:w-1/2">
                        <h3 className="font-medium text-medium mb-4">Location</h3>
                        <p className="text-small">Jeddah, Al-Batarji Street, Al-Zahra District</p>
                        <div className="mt-4">
                            <img src="/path-to-map.png" alt="Map" className="rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 text-text-grey text-small">
                &copy; 2025 Building Reference United Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
