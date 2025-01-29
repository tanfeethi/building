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
                        <div className="2xl:hidden xl:hidden lg:hidden flex items-center">
                            <button
                                className="text-text-primary text-2xl"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <IoClose /> : <IoMenu />}
                            </button>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <img src={logo} alt="Logo" className="h-32" />
                        </div>

                        <div className="hidden 2xl:flex xl:flex lg:flex space-x-8">
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
                                    href="/team"
                                    className={`${isActive("/team") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Our Teams
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

                            <div>
                                <p className="bg-text-primary px-4 py-4 rounded-md text-text-white cursor-pointer text-small">En</p>
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
                                    href="/team"
                                    className={`${isActive("/team") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Our Teams
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
