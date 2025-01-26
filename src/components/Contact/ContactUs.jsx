import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaWhatsapp, FaInstagram, FaTimes } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import Button from "../Buttons/Button";

const ContactUs = () => {
    return (
        <div className="flex flex-col my-2xl px-4 md:px-8 lg:px-16">
            <h2 className="text-large text-text-primary text-center font-bold mb-4">
                اتصل بنا
            </h2>

            <div className="flex flex-col lg:flex-row-reverse">
                {/* Form Section */}
                <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary">
                                    الاسم الكامل
                                </label>
                                <input
                                    type="text"
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary">
                                    عنوان البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary">رقم الهاتف</label>
                                <input
                                    type="text"
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary">
                                    موضوع الرسالة
                                </label>
                                <input
                                    type="text"
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-right text-text-primary">الرسالة</label>
                            <textarea
                                className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                rows="4"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-right text-text-primary">رقم التحقق</label>
                            <input
                                type="text"
                                className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button
                                name={"إرسال"}
                                className="bg-text-primary text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition"
                            />
                        </div>
                    </form>

                    <div className="mt-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="mr-4">
                                    <CiLocationOn />
                                </span>
                                <p>جدة، شارع البترجي، حي الزهراء</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <span className="mr-4">
                                    <CiMail />
                                </span>
                                <p>info@bru.com.sa</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <span className="mr-4">
                                    <IoCallOutline />
                                </span>
                                <p>0552311322</p>
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-6 justify-center">
                            <a href="#" className="bg-text-primary text-white p-2 rounded-full">
                                <FaWhatsapp size={20} />
                            </a>
                            <a href="#" className="bg-text-primary text-white p-2 rounded-full">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="bg-text-primary text-white p-2 rounded-full">
                                <FaTimes size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full lg:w-1/2 h-64 lg:h-auto">
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
