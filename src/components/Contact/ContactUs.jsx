import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { api_url } from "../../utils/api";  // تأكد من تعريف الـ api_url

const ContactUs = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        subject: "",
        phone: "",
        massage: "",
    });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [settings, setSettings] = useState(null); // حفظ بيانات الإعدادات من الـ API

    useEffect(() => {
        // جلب بيانات الإعدادات من الـ API
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
            const response = await axios.post(`${api_url}/api/contactUs/sendMail`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.data?.status === "success") {
                setResponseMessage("Message sent successfully");
                setFormData({
                    email: "",
                    name: "",
                    subject: "",
                    phone: "",
                    massage: "",
                });
            } else {
                setResponseMessage(response.data?.message || "Failed to send message.");
            }
        } catch (error) {
            setResponseMessage("Error sending message.");
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
                                <label className="text-right text-text-primary mb-l">
                                    {t("contact_us.email")}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary mb-l">
                                    {t("contact_us.full_name")}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 gap-6 mb-xl">
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary mb-l">
                                    {t("contact_us.subject")}
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary mb-l">
                                    {t("contact_us.phone")}
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col mb-xl">
                            <label className="text-right text-text-primary mb-l">
                                {t("contact_us.message")}
                            </label>
                            <textarea
                                name="massage"
                                value={formData.massage}
                                onChange={handleInputChange}
                                className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                rows="4"
                                required
                            />
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" className="bg-text-primary text-white px-8 py-2 font-medium shadow-lg transition" disabled={loading}>
                                {loading ? t("contact_us.sending") : t("contact_us.submit_button")}
                            </button>
                        </div>
                    </form>

                    {loading && <p>{t("contact_us.loadingMessage")}</p>}
                    {responseMessage && <p className="text-green-500">{responseMessage}</p>}

                    <div className="mt-8 text-text-primary flex flex-wrap flex-row-reverse justify-between">
                        <div>
                            {settings && settings.address && (
                                <div className="flex flex-row-reverse items-center mb-4">
                                    <span className={lang === "ar" ? "mx-2 ml-0" : "ms-2"}>
                                        <CiLocationOn />
                                    </span>
                                    <p>{settings.address}</p>
                                </div>
                            )}
                            {settings && settings.email && (
                                <div className="flex items-center flex-row-reverse mb-4">
                                    <span className={lang === "ar" ? "mx-2 ml-0" : "ms-2"}>
                                        <CiMail />
                                    </span>
                                    <a href={`mailto:${settings.email}`} className="hover:underline">
                                        {settings.email}
                                    </a>
                                </div>
                            )}
                            {settings && settings.phones && settings.phones.phones.map((phone, index) => (
                                <div key={index} className="flex items-center flex-row-reverse mb-4">
                                    <span className={lang === "ar" ? "mx-2 ml-0" : "ms-2"}>
                                        <IoCallOutline />
                                    </span>
                                    <a href={`tel:${phone}`} className="hover:underline">
                                        {phone}
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="flex">
                            {settings?.phones?.phones?.length > 0 && (
                                <a
                                    className="text-text-primary p-2 rounded-full"
                                    rel="noopener noreferrer"
                                    href={`https://wa.me/${settings.phones.phones[0]}`} // Using the first phone number for WhatsApp
                                    target="_blank"
                                >
                                    <FaWhatsapp size={20} />
                                </a>
                            )}
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
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
