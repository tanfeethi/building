import React from "react";
import logo2 from "../../assets/logo2.png";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Container from "../Container/Container";
import { BsTwitterX } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
    const { t } = useTranslation();

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
                                    <input
                                        type="text"
                                        className="w-full p-3 rounded bg-transparent border border-text-white text-text-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-l">{t("footer.email")}</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 rounded bg-transparent border border-text-white text-text-primary"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6 mb-xl">
                                <div>
                                    <label className="block mb-l">{t("footer.phone")}</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 rounded bg-transparent border border-text-white text-text-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-l">{t("footer.message_subject")}</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 rounded bg-transparent border border-text-white text-text-primary"
                                    />
                                </div>
                            </div>
                            <div className="mb-xl">
                                <label className="block mb-l">{t("footer.service_details")}</label>
                                <textarea
                                    className="w-full p-3 rounded bg-transparent border border-text-white text-text-primary"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-white text-text-primary px-8 py-2 rounded hover:bg-text-grey-hover"
                                >
                                    {t("footer.send")}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Section - Info & Social Links */}
                    <div className="mx-2xl sm:mx-0 md:mx-0 md:w-full sm:w-full flex flex-col justify-evenly items-start">
                        <div className="flex flex-row items-center space-x-6">
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
                        <div className="space-y-2 mb-4">
                            <p className="flex items-center">
                                <FaEnvelope className="mx-2" />
                                <a href="mailto:info@bru.com.sa" className="hover:underline">
                                    {t("footer.email_address")}
                                </a>
                            </p>
                            <p className="flex items-center">
                                <FaPhoneAlt className="mx-2" />
                                <a href="tel:0552311322" className="hover:underline">
                                    {t("footer.phone_number")}
                                </a>
                            </p>
                            <p className="flex items-center">
                                <MdLocationOn className="mx-2" /> {t("footer.location")}
                            </p>
                        </div>

                        <div className="flex flex-row space-x-4 rtl:space-x-reverse">
                            <span className="text-text-white px-7 py-1 rounded cursor-pointer">
                                {t("footer.language")}
                            </span>
                            <FaWhatsapp className="w-6 h-6 cursor-pointer" />
                            <FaInstagram className="w-6 h-6 cursor-pointer" />
                            <BsTwitterX className="w-6 h-6 cursor-pointer" />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Footer;
