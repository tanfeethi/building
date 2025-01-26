import React from "react";
import logo from "../../assets/logo.png";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Container from "../Container/Container";

const Footer = () => {
    return (
        <div className="bg-text-primary text-white py-8 px-4">
        <Container>
            <div className="flex flex-col md:flex-row justify-between items-start">

                <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-start">
                    <div className="flex items-center space-x-6">
                        <img src={logo} alt="Logo" className="w-24 h-auto mb-4" />
                    </div>
                    <div className="space-y-2 mb-4">
                        <ul className="space-y-2">
                            <li className="cursor-pointer hover:underline">من نحن</li>
                            <li className="cursor-pointer hover:underline">خدماتنا</li>
                            <li className="cursor-pointer hover:underline">أعمالنا</li>
                            <li className="cursor-pointer hover:underline">فريقنا</li>
                        </ul>
                    </div>
                    <div className="space-y-2 mb-4">
                        <p className="flex items-center">
                            <FaEnvelope className="mr-2" /> info@bru.com.sa
                        </p>
                        <p className="flex items-center">
                            <FaPhoneAlt className="mr-2" /> 0552311322
                        </p>
                        <p className="flex items-center">
                            <MdLocationOn className="mr-2" /> جدة شارع البترجي حي الزهراء
                        </p>
                    </div>
                    <div className="flex space-x-4 rtl:space-x-reverse">
                        <span className="bg-white text-text-primary px-2 py-1 rounded cursor-pointer">EN</span>
                        <FaWhatsapp className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                        <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                    </div>
                </div>

                <div className="w-full md:w-1/2 text-end flex flex-col space-y-6">
                    <h2 className="text-xlarge mb-4">كن على تواصل معنا</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1">الاسم كاملاً</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-transparent border border-text-white text-text-primary"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    className="w-full p-2 rounded bg-transparent border border-text-white text-text-primary"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1">رقم الهاتف</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-transparent border border-text-white text-text-primary"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">موضوع الرسالة</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-transparent border border-text-white text-text-primary"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block mb-1">تفاصيل الخدمة / الاستفسار</label>
                            <textarea
                                className="w-full p-2 rounded bg-transparent border border-text-white text-text-primary"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block mb-1">رقم التحقق</label>
                            <input
                                type="text"
                                className="w-full p-2 rounded text-text-primary bg-transparent border border-text-white"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-white text-text-primary px-4 py-2 rounded hover:bg-text-grey-hover"
                        >
                            إرسال
                        </button>
                    </form>
                </div>
            </div>
        </Container>

        </div>
    );
};

export default Footer;
