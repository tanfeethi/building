import React from "react";
import logo2 from "../../assets/logo2.png";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Container from "../Container/Container";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-text-primary text-white py-5xl px-4">
            <Container>
                <div className="flex flex-col-reverse 2xl:flex-row xl:flex-row lg:flex-row md:flex-row justify-between items-start">

                    <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 mt-8 md:mt-0 flex flex-col items-start">
                        <div className="flex flex-row items-center space-x-6">
                            <img src={logo2} alt="Logo" className="w-48 h-auto mb-4" />
                        </div>
                        <div className="space-y-2 mb-4">
                            <ul className="space-y-2 flex flex-col items-start">
                                <li className="cursor-pointer hover:underline">من نحن</li>
                                <li className="cursor-pointer hover:underline">خدماتنا</li>
                                <li className="cursor-pointer hover:underline">أعمالنا</li>
                                <li className="cursor-pointer hover:underline">فريقنا</li>
                            </ul>
                        </div>
                        <div className="space-y-2 mb-4">
                            <p className="flex flex-row items-center">
                                <FaEnvelope className="mr-2" /> info@bru.com.sa
                            </p>
                            <p className="flex flex-row items-center">
                                <FaPhoneAlt className="mr-2" /> 0552311322
                            </p>
                            <p className="flex flex-row items-center">
                                <MdLocationOn className="mr-2" /> جدة شارع البترجي حي الزهراء
                            </p>
                        </div>
                        <div className="flex flex-row-reverse space-x-4 space-y-2 rtl:space-x-reverse">
                            <span className="text-text-white px-7 py-1 rounded cursor-pointer">EN</span>
                            <FaWhatsapp className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                            <BsTwitterX className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 text-end flex flex-col space-y-6">
                        <h2 className="text-xlarge mb-4">كن على تواصل معنا</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6 mb-xl">
                                <div>
                                    <label className="block mb-l">الاسم كاملاً</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 rounded bg-transparent border border-text-white text-text-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-l">البريد الإلكتروني</label>
                                    <input
                                        type="email"
                                        className="w-full p-2 rounded bg-transparent border border-text-white text-text-primary"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6 mb-xl">
                                <div>
                                    <label className="block mb-l">رقم الهاتف</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 rounded bg-transparent border border-text-white text-text-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-l">موضوع الرسالة</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 rounded bg-transparent border border-text-white text-text-primary"
                                    />
                                </div>
                            </div>
                            <div className="mb-xl">
                                <label className="block mb-l">تفاصيل الخدمة / الاستفسار</label>
                                <textarea
                                    className="w-full p-2 rounded bg-transparent border border-text-white text-text-primary"
                                ></textarea>
                            </div>
                            <div className="mb-xl">
                                <label className="block mb-1">رقم التحقق</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded text-text-primary bg-transparent border border-text-white"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-white text-text-primary px-8 py-2 hover:bg-text-grey-hover"
                                >
                                    إرسال
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Footer;
