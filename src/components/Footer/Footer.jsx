import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import logo2 from "../../assets/logo2.png";
import { CiMail } from "react-icons/ci";
import useFetch from "../../hooks/UseFetch"
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("language") || "en");

    const { data: settings, loading, error } = useFetch("api/frontend/settings/list", {}, lang);

    useEffect(() => {
        const storedLang = localStorage.getItem("language") || "ar";
        if (i18n.language !== storedLang) {
            i18n.changeLanguage(storedLang).then(() => {
                setLang(storedLang);
            });
        } else {
            setLang(storedLang);
        }
    }, [i18n.language]);

    // Define the changeLanguage function
    const changeLanguage = () => {
        const newLang = lang === "en" ? "ar" : "en"; // Toggle language
        setLang(newLang); // Update the state
        i18n.changeLanguage(newLang); // Change the language in i18n
        localStorage.setItem("language", newLang); // Save the language choice in localStorage
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-text-primary text-white py-5xl px-4 font-bold">
            <Container>
                <div className="flex flex-row gap-20 2xl:gap-32 md:flex-col sm:flex-col">

                    {/* Left Section - Contact Form */}
                    <div className="w-2/3 md:w-full sm:w-full flex flex-col space-y-6 mb-10">
                        <h2 className="text-xlarge mb-4">{t("footer.contact_us")}</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6 mb-xl">
                                <div>
                                    <label className="block mb-l">{t("footer.name")}</label>
                                    <input type="text" className="w-full p-3 rounded bg-transparent border border-text-white text-text-white" />
                                </div>
                                <div>
                                    <label className="block mb-l">{t("footer.email")}</label>
                                    <input type="email" className="w-full p-3 rounded bg-transparent border border-text-white text-text-white" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6 mb-xl">
                                <div>
                                    <label className="block mb-l">{t("footer.phone")}</label>
                                    <input type="text" className="w-full p-3 rounded bg-transparent border border-text-white text-text-white" />
                                </div>
                                <div>
                                    <label className="block mb-l">{t("footer.message_subject")}</label>
                                    <input type="text" className="w-full p-3 rounded bg-transparent border border-text-white text-text-white" />
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

                        <div className="mb-4 text-justify">
                            <p>{i18n.language === "ar" ? "اتصل بنا الآن لتحصل على أفضل عرض سعر لمشروعك"
                                :
                                "Call Us Now to take the best price offer for your project"
                            }</p>
                        </div>

                        {/* Conditional rendering of settings data */}
                        {settings && (
                            <div className="space-y-4 mb-4">
                                {/* {settings.email && (
                                    <div className={`flex items-center gap-x-2`}>
                                        <CiMail className="w-5 h-5" />
                                        <a href={`mailto:${settings.email}`} className="hover:underline">{settings.email}</a>
                                    </div>
                                )} */}
                                <div className="flex items-center gap-x-2">
                                    <CiMail className="w-5 h-5" />
                                    <a href="mailto:info@bru.com.sa" className="hover:underline">info@bru.com.sa</a>
                                </div>

                                <div className="flex items-center gap-x-2">
                                    <TbWorld className="w-5 h-5" />
                                    <a href="https://www.bru.com.sa/" className="hover:underline">bru.com.sa</a>
                                </div>

                                {settings.address && (
                                    <div className={`flex items-center gap-x-2`}>
                                        <MdLocationOn className="w-5 h-5" />
                                        <span>{settings.address}</span>
                                    </div>
                                )}

                                {/* {settings.phones?.phones?.map((phone, index) => (
                                    <div key={index} className={`flex items-center gap-x-2`}>
                                        <FaPhoneAlt className="w-5 h-5" />
                                        <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
                                    </div>
                                ))} */}

                                <div className="flex items-center gap-x-2">
                                    <FaPhoneAlt className="w-5 h-5" />
                                    <a href="tel:+966552311322" className="hover:underline">
                                        <span dir="ltr">+966 552311322</span>
                                    </a>
                                </div>

                                {/* Social Media Links */}
                                <div className="flex space-x-4 rtl:space-x-reverse mt-4">
                                    {/* {settings?.phones?.phones?.length > 0 && (
                                        <a
                                            href={`https://wa.me/${settings.phones.phones[0]}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaWhatsapp className="w-6 h-6 cursor-pointer" />
                                        </a>
                                    )} */}

                                    <a
                                        href="https://wa.me/966552311322"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaWhatsapp className="w-6 h-6 cursor-pointer" />
                                    </a>

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