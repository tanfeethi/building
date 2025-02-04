import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import logo2 from "../../assets/logo2.png";
import { api_url } from "../../utils/api";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const [settings, setSettings] = useState(null);
    const [lang, setLang] = useState(localStorage.getItem("language") || "en");

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await axios.get(`${api_url}/api/frontend/settings/list`);
                if (response.data.status === "success") {
                    setSettings(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching settings:", error);
            }
        };

        fetchSettings();
    }, []);

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
        <div className="bg-text-primary text-white py-5xl px-4">
            <Container>
                <div className="flex flex-row gap-20 2xl:gap-32 md:flex-col sm:flex-col">

                    {/* Left Section - Contact Form */}
                    <div className="w-2/3 md:w-full sm:w-full flex flex-col space-y-6 mb-10">
                        <h2 className="text-xlarge mb-4">{t("footer.contact_us")}</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6 mb-xl">
                                <div>
                                    <label className="block mb-l">{t("footer.name")}</label>
                                    <input type="text" className="w-full p-3 rounded bg-transparent border border-text-white text-text-primary" />
                                </div>
                                <div>
                                    <label className="block mb-l">{t("footer.email")}</label>
                                    <input type="email" className="w-full p-3 rounded bg-transparent border border-text-white text-text-primary" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6 mb-xl">
                                <div>
                                    <label className="block mb-l">{t("footer.phone")}</label>
                                    <input type="text" className="w-full p-3 rounded bg-transparent border border-text-white text-text-primary" />
                                </div>
                                <div>
                                    <label className="block mb-l">{t("footer.message_subject")}</label>
                                    <input type="text" className="w-full p-3 rounded bg-transparent border border-text-white text-text-primary" />
                                </div>
                            </div>
                            <div className="mb-xl">
                                <label className="block mb-l">{t("footer.service_details")}</label>
                                <textarea className="w-full p-3 rounded bg-transparent border border-text-white text-text-primary" rows="4"></textarea>
                            </div>
                            <div className="flex">
                                <button type="submit" className="bg-white text-text-primary px-8 py-2 rounded hover:bg-text-grey-hover">
                                    {t("footer.send")}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Section - Info & Social Links */}
                    <div className="mx-2xl sm:mx-0 md:mx-0 md:w-full sm:w-full flex flex-col justify-evenly items-start">
                        <div className="flex flex-row items-center space-x-6 -mx-2">
                            <img src={logo2} alt="Logo" className="w-48 h-auto mb-4" />
                        </div>
                        <div className="mb-4">
                            <ul className="space-y-2">
                                <li className="cursor-pointer hover:underline">
                                    <Link to="/about">{t("footer.about_us")}</Link>
                                </li>
                                <li className="cursor-pointer hover:underline">
                                    <Link to="/services">{t("footer.services")}</Link>
                                </li>
                                <li className="cursor-pointer hover:underline">
                                    <Link to="/projects">{t("footer.our_work")}</Link>
                                </li>
                                <li className="cursor-pointer hover:underline">
                                    <Link to="/team">{t("footer.our_team")}</Link>
                                </li>
                            </ul>
                        </div>

                        {settings && (
                            <div className="space-y-4 mb-4">
                                {settings.email && (
                                    <div className={`flex items-center gap-x-2 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                                        <CiMail className="w-5 h-5" />
                                        <a href={`mailto:${settings.email}`} className="hover:underline">{settings.email}</a>
                                    </div>
                                )}

                                {settings.address && (
                                    <div className={`flex items-center gap-x-2 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                                        <MdLocationOn className="w-5 h-5" />
                                        <span>{settings.address}</span>
                                    </div>
                                )}

                                {settings.phones?.phones?.map((phone, index) => (
                                    <div key={index} className={`flex items-center gap-x-2 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                                        <FaPhoneAlt className="w-5 h-5" />
                                        <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
                                    </div>
                                ))}

                                {/* Social Media Links */}
                                <div className="flex space-x-4 rtl:space-x-reverse mt-4">
                                    {settings?.phones?.phones?.length > 0 && (
                                        <a
                                            href={`https://wa.me/${settings.phones.phones[0]}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaWhatsapp className="w-6 h-6 cursor-pointer" />
                                        </a>
                                    )}

                                    {settings.social_media?.facebook && (
                                        <a href={settings.social_media.facebook} target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className="w-6 h-6 cursor-pointer" />
                                        </a>
                                    )}
                                    {settings.social_media?.x && (
                                        <a href={settings.social_media.x} target="_blank" rel="noopener noreferrer">
                                            <BsTwitterX className="w-6 h-6 cursor-pointer" />
                                        </a>
                                    )}
                                    <button
                                        onClick={changeLanguage}
                                        className="text-text-white px-7 py-1 rounded cursor-pointer"
                                    >
                                        {t("footer.language")}
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;