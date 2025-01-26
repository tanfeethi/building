import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoCallOutline, IoMenu, IoClose } from "react-icons/io5";
import logo from "../../assets/logo.png";
import Container from "../Container/Container";

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-text-white shadow-md w-full">
            <div>
                <Container>
                    <div className="flex items-center justify-between h-24">
                        <div className="lg:hidden flex items-center">
                            <button
                                className="text-text-primary text-2xl"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <IoClose /> : <IoMenu />}
                            </button>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <img src={logo} alt="Logo" className="h-10 lg:h-14 sm:h-14" />
                        </div>

                        <div className="hidden lg:flex space-x-8">
                            <a
                                href="/"
                                className={`${isActive("/") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                    } text-medium`}
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className={`${isActive("/about") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                    } text-medium hover:text-text-primary`}
                            >
                                About Us
                            </a>
                            <a
                                href="/services"
                                className={`${isActive("/services") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                    } text-medium hover:text-text-primary`}
                            >
                                Our Services
                            </a>
                            <a
                                href="/projects"
                                className={`${isActive("/projects") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                    } text-medium hover:text-text-primary`}
                            >
                                Our Projects
                            </a>
                            <a
                                href="/contact"
                                className={`${isActive("/contact") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                    } text-medium hover:text-text-primary`}
                            >
                                Contact Us
                            </a>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className="text-text-primary">
                                <IoCallOutline className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-text-grey text-small">Hotline</p>
                                <a
                                    href="tel:0552311322"
                                    className="text-text-black font-bold text-medium hover:underline"
                                >
                                    0552311322
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu (Dropdown) */}
                    {isMenuOpen && (
                        <div className="lg:hidden bg-text-white shadow-md">
                            <div className="flex flex-col items-start space-y-4 px-4 py-6">
                                <a
                                    href="/"
                                    className={`${isActive("/") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </a>
                                <a
                                    href="/about"
                                    className={`${isActive("/about") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Us
                                </a>
                                <a
                                    href="/services"
                                    className={`${isActive("/services") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Our Services
                                </a>
                                <a
                                    href="/projects"
                                    className={`${isActive("/projects") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Our Projects
                                </a>
                                <a
                                    href="/contact"
                                    className={`${isActive("/contact") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    )}
                </Container>
            </div>
        </nav>
    );
};

export default Navbar;
