import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { api_url } from "../../utils/api";
import { MdLocationOn } from "react-icons/md";

const ScrollSidebar = () => {
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await axios.get(`${api_url}/api/frontend/settings/list`);
                setSettings(response.data.data);
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

            <a
                href="https://wa.me/966552311322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary text-2xl hover:text-text-primary-dark transition"
            >
                <FaWhatsapp />
            </a>

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

            <a
                href="mailto:info@bru.com.sa"
                className="text-text-primary text-2xl hover:text-text-primary-dark transition"
            >
                <FaEnvelope />
            </a>

            <a
                href="https://maps.app.goo.gl/t21Ei34fmVAQgWLm7?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary text-2xl hover:text-text-primary-dark transition"
            >
                <MdLocationOn />
            </a>

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