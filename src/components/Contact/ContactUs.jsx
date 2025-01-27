import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import Button from "../Buttons/Button";
import { BsTwitterX } from "react-icons/bs";

const ContactUs = () => {
    return (
        <div className="flex flex-col my-2xl px-4 md:px-8 lg:px-16">
            <h2 className="text-large text-text-primary text-center font-bold mb-5xl">
                اتصل بنا
            </h2>

            <div className="flex flex-col 2xl:flex-row-reverse xl:flex-row-reverse lg:flex-row-reverse">

                <div className="w-full 2xl:w-1/2 xl:w-1/2 p-6 2xl:p-8 flex flex-col">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 gap-6 mb-xl">
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary mb-l">
                                    عنوان البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary mb-l">
                                    الاسم الكامل
                                </label>
                                <input
                                    type="text"
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 gap-6 mb-xl">
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary mb-l">
                                    موضوع الرسالة
                                </label>
                                <input
                                    type="text"
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary mb-l">رقم الهاتف</label>
                                <input
                                    type="text"
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col mb-xl">
                            <label className="text-right text-text-primary mb-l">تفاصيل الخدمة / الاستفسار</label>
                            <textarea
                                className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                rows="4"
                            />
                        </div>

                        <div className="flex flex-col mb-xl">
                            <label className="text-right text-text-primary mb-l">رقم التحقق</label>
                            <input
                                type="text"
                                className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button
                                name={"إرسال"}
                                className="bg-text-primary text-white px-8 py-2 font-medium shadow-lg hover:bg-blue-700 transition"
                            />
                        </div>
                    </form>

                    <div className="mt-8 text-text-primary flex flex-wrap flex-row-reverse justify-between">
                        <div>
                            <div className="flex flex-row-reverse items-center mb-4">
                                <span className="ml-4">
                                    <CiLocationOn />
                                </span>
                                <p>جدة، شارع البترجي، حي الزهراء</p>
                            </div>
                            <div className="flex items-center flex-row-reverse mb-4">
                                <span className="ml-4">
                                    <CiMail />
                                </span>
                                <p>info@bru.com.sa</p>
                            </div>
                            <div className="flex items-center flex-row-reverse mb-4">
                                <span className="ml-4">
                                    <IoCallOutline />
                                </span>
                                <p>0552311322</p>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <a href="#" className="text-text-primary p-2 rounded-full">
                                <FaWhatsapp size={20} />
                            </a>
                            <a href="#" className="text-text-primary p-2 rounded-full">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-text-primary p-2 rounded-full">
                                <BsTwitterX size={20} />
                            </a>
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
