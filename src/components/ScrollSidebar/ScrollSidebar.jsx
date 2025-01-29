import React from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ScrollSidebar = () => {
    return (
        <div
            className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4 bg-white shadow-lg rounded-2xl p-3"
            style={{ zIndex: 1000 }}
        >
            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary text-2xl hover:text-text-primary-dark transition"
            >
                <FaWhatsapp />
            </a>

            {/* Instagram Icon */}
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary text-2xl hover:text-text-primary-dark transition"
            >
                <FaInstagram />
            </a>

            {/* Email Icon */}
            <a
                href="mailto:example@mail.com"
                className="text-text-primary text-2xl hover:text-text-primary-dark transition"
            >
                <FaEnvelope />
            </a>

            {/* Twitter Icon */}
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary text-2xl hover:text-text-primary-dark transition"
            >
                <FaXTwitter />
            </a>
        </div>
    );
};

export default ScrollSidebar;
