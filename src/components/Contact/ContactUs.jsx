import React, { useState, useEffect } from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { api_url } from "../../utils/api";
import useFetch from "../../hooks/UseFetch";

const ContactUs = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("language") || "ar");

    const {
        data: settings,
        loading: settingsLoading,
        error: settingsError,
    } = useFetch("api/frontend/settings/list", {}, lang);

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

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        subject: "",
        phone: "",
        massage: "",
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch(`${api_url}/api/contactUs/sendMail`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.status === "success") {
                setResponseMessage(t("contact_us.success_message"));
                setFormData({
                    email: "",
                    name: "",
                    subject: "",
                    phone: "",
                    massage: "",
                });
            } else {
                setResponseMessage(result.message || t("contact_us.error_message"));
            }
        } catch (error) {
            setResponseMessage(t("contact_us.error_message"));
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col my-2xl px-4 md:px-8 lg:px-16">
            <h2 className="text-large text-text-primary text-center font-bold mb-5xl">
                {t("contact_us.title")}
            </h2>

            <div className="flex flex-col 2xl:flex-row-reverse xl:flex-row-reverse lg:flex-row-reverse">
                <div className="w-full 2xl:w-1/2 xl:w-1/2 p-6 2xl:p-8 flex flex-col">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 gap-6 mb-xl">
                            <div className="flex flex-col">
                                <label className="text-text-primary mb-l">{t("contact_us.full_name")}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="border border-text-primary p-2 rounded-md w-full bg-white text-black"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-text-primary mb-l">{t("contact_us.email")}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="border border-text-primary p-2 rounded-md w-full bg-white text-black"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 gap-6 mb-xl">
                            <div className="flex flex-col">
                                <label className="text-text-primary mb-l">{t("contact_us.subject")}</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="border border-text-primary p-2 rounded-md w-full bg-white text-black"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-text-primary mb-l">{t("contact_us.phone")}</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="border border-text-primary p-2 rounded-md w-full bg-white text-black"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col mb-xl">
                            <label className="text-text-primary mb-l">{t("contact_us.message")}</label>
                            <textarea
                                name="massage"
                                value={formData.massage}
                                onChange={handleInputChange}
                                className="border border-text-primary p-2 rounded-md w-full bg-white text-black"
                                rows="4"
                                required
                            />
                        </div>

                        <div className={`flex ${lang === "ar" ? "justify-end" : "justify-end"}`}>
                            <button
                                type="submit"
                                className="bg-text-primary text-white px-8 py-2 font-medium shadow-lg transition"
                                disabled={loading}
                            >
                                {loading ? t("contact_us.sending") : t("contact_us.submit_button")}
                            </button>
                        </div>
                    </form>

                    {loading && <p>{t("contact_us.loadingMessage")}</p>}
                    {responseMessage && (
                        <p className={responseMessage.includes("success") ? "text-green-500" : "text-red-500"}>
                            {responseMessage}
                        </p>
                    )}

                    <div className="mt-8 text-text-primary flex flex-wrap justify-between">
                        <div>
                            {settings?.address && (
                                <div className="flex items-center mb-4 gap-x-2">
                                    <CiLocationOn className="w-5 h-5" />
                                    <div>
                                        <p>
                                            {i18n.language === "ar"
                                                ? "المكتب الرئيسي – جدة، المملكة العربية السعودية"
                                                : "Head Office – Jeddah, Kingdom of Saudi Arabia"}
                                        </p>
                                        <span>{settings.address}</span>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center mb-4">
                                <span className={lang === "ar" ? "mx-2 ml-0" : "ms-2"}>
                                    <CiMail className="me-2" />
                                </span>
                                <a href="mailto:info@bru.com.sa" className="hover:underline">
                                    info@bru.com.sa
                                </a>
                            </div>

                            <div className="flex items-center mb-4">
                                <span className={lang === "ar" ? "mx-2 ml-0" : "ms-2"}>
                                    <IoCallOutline className="me-2" />
                                </span>
                                <a href="tel:+966552311322" className="hover:underline">
                                    <span dir="ltr">+966 552311322</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex">
                            <a
                                className="text-text-primary p-2 rounded-full"
                                rel="noopener noreferrer"
                                href="https://wa.me/966552311322"
                                target="_blank"
                            >
                                <FaWhatsapp size={20} />
                            </a>
                            {settings?.social_media?.instagram && (
                                <a href={settings.social_media.instagram} rel="noopener noreferrer" target="_blank" className="text-text-primary p-2 rounded-full">
                                    <FaInstagram size={20} />
                                </a>
                            )}
                            {settings?.social_media?.x && (
                                <a href={settings.social_media.x} rel="noopener noreferrer" target="_blank" className="text-text-primary p-2 rounded-full">
                                    <BsTwitterX size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full 2xl:w-1/2 me-5xl h-64 2xl:h-auto xl:h-auto lg:h-auto">
                    <iframe
                        src="https://maps.google.com/maps?q=%D8%AC%D8%AF%D8%A9%2C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%A8%D8%AA%D8%B1%D8%AC%D9%8A%2C%20%D8%AD%D9%8A%20%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A7&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ filter: "opacity(0.9)" }}
                        frameBorder="0"
                        allowFullScreen
                        className="rounded-md shadow-md"
                        title="Google Map"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;