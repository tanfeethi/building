import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import Container from "../Container/Container";

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lang, setLang] = useState(localStorage.getItem("language") || "en");

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    const changeLanguage = () => {
        const newLang = lang === "en" ? "ar" : "en";
        setLang(newLang);
        i18n.changeLanguage(newLang);
        localStorage.setItem("language", newLang);
    };


    return (
        <nav className="bg-text-white shadow-md w-full">
            <div>
                <Container>
                    <div className="flex items-center justify-between h-24">
                        {/* Mobile Menu Button */}
                        <div className="2xl:hidden xl:hidden lg:hidden flex items-center">
                            <button
                                className="text-text-primary text-2xl"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <IoClose /> : <IoMenu />}
                            </button>
                        </div>

                        {/* Logo */}
                        <div className="flex justify-center lg:justify-start">
                            <img src={logo} alt="Logo" className="h-32" />
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden 2xl:flex xl:flex lg:flex space-x-8">
                            <a
                                href="/"
                                className={`${lang === "ar" ? "me-8" : ""} ${isActive("/") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                    } text-medium`}
                            >
                                {t("home")}
                            </a>
                            <a
                                href="/about"
                                className={`${isActive("/about") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                    } text-medium hover:text-text-primary`}
                            >
                                {t("about")}
                            </a>
                            <a
                                href="/services"
                                className={`${isActive("/services") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                    } text-medium hover:text-text-primary`}
                            >
                                {t("services")}
                            </a>
                            <a
                                href="/projects"
                                className={`${isActive("/projects") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                    } text-medium hover:text-text-primary`}
                            >
                                {t("projects")}
                            </a>
                            <a
                                href="/team"
                                className={`${isActive("/team") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                    } text-medium`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t("team")}
                            </a>
                            <a
                                href="/contact"
                                className={`${isActive("/contact") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                    } text-medium hover:text-text-primary`}
                            >
                                {t("contact")}
                            </a>
                        </div>

                        {/* Language Switch Button */}
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={changeLanguage}
                                className="bg-text-primary px-4 py-2 rounded-md text-text-white cursor-pointer text-small"
                            >
                                {i18n.language === "en" ? "عربي" : "English"}
                            </button>
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
                                    {t("home")}
                                </a>
                                <a
                                    href="/about"
                                    className={`${isActive("/about") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("about")}
                                </a>
                                <a
                                    href="/services"
                                    className={`${isActive("/services") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("services")}
                                </a>
                                <a
                                    href="/projects"
                                    className={`${isActive("/projects") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("projects")}
                                </a>
                                <a
                                    href="/team"
                                    className={`${isActive("/team") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("team")}
                                </a>
                                <a
                                    href="/contact"
                                    className={`${isActive("/contact") ? "text-text-primary font-bold" : "text-text-grey font-medium"
                                        } text-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("contact")}
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
