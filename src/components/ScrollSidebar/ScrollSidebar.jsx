import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { api_url } from "../../utils/api";

const ScrollSidebar = () => {
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        // جلب البيانات من الـ API
        const fetchSettings = async () => {
            try {
                const response = await axios.get(`${api_url}/api/frontend/settings/list`);
                setSettings(response.data.data); // تخزين البيانات القادمة في الـ state
            } catch (error) {
                console.error("Error fetching settings:", error);
            }
        };

        fetchSettings();
    }, []);

    return (
        <div
            className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4 bg-white shadow-lg rounded-2xl p-3"
            style={{ zIndex: 1000 }}
        >
            {/* WhatsApp Icon */}
            {settings?.phones?.phones?.length > 0 && (
                <a
                    href={`https://wa.me/${settings.phones.phones[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary text-2xl hover:text-text-primary-dark transition"
                >
                    <FaWhatsapp />
                </a>
            )}

            {/* Instagram Icon */}
            {settings?.social_media?.instagram && (
                <a
                    href={settings.social_media.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary text-2xl hover:text-text-primary-dark transition"
                >
                    <FaInstagram />
                </a>
            )}

            {/* Email Icon */}
            {settings?.phones?.phones?.length > 0 && (
                <a
                    href={`mailto:${settings.phones.phones[0]}`} // استخدام أول رقم في phones كـ بريد إلكتروني
                    className="text-text-primary text-2xl hover:text-text-primary-dark transition"
                >
                    <FaEnvelope />
                </a>
            )}

            {/* Twitter Icon */}
            {settings?.social_media?.x && (
                <a
                    href={settings.social_media.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary text-2xl hover:text-text-primary-dark transition"
                >
                    <FaXTwitter />
                </a>
            )}
        </div>
    );
};

export default ScrollSidebar;
