import React, { useState } from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import Button from "../Buttons/Button";
import { BsTwitterX } from "react-icons/bs";
import useFetch from "../../hooks/UseFetch";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        subject: "",
        phone: "",
        message: "",
        // verificationCode: "",
    });

    const { data, loading, error } = useFetch("api/contactUs/sendMail", {
        method: "POST",
        body: JSON.stringify(formData),
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await sendRequest();
        if (response?.status === "success") {
            console.log("Message sent successfully");
            setFormData({
                email: "",
                fullName: "",
                subject: "",
                phone: "",
                message: "",
            });
        } else {
            console.error("Error sending message:", response?.message || error);
        }
    };

    return (
        <div className="flex flex-col my-2xl px-4 md:px-8 lg:px-16">
            <h2 className="text-large text-text-primary text-center font-bold mb-5xl">
                اتصل بنا
            </h2>

            <div className="flex flex-col 2xl:flex-row-reverse xl:flex-row-reverse lg:flex-row-reverse">
                <div className="w-full 2xl:w-1/2 xl:w-1/2 p-6 2xl:p-8 flex flex-col">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 gap-6 mb-xl">
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary mb-l">
                                    عنوان البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary mb-l">
                                    الاسم الكامل
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
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
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-right text-text-primary mb-l">رقم الهاتف</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col mb-xl">
                            <label className="text-right text-text-primary mb-l">تفاصيل الخدمة / الاستفسار</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                                rows="4"
                            />
                        </div>

                        {/* <div className="flex flex-col mb-xl">
                            <label className="text-right text-text-primary mb-l">رقم التحقق</label>
                            <input
                                type="text"
                                name="verificationCode"
                                value={formData.verificationCode}
                                onChange={handleInputChange}
                                className="border border-text-primary p-2 rounded-md w-full text-right bg-white text-black"
                            />
                        </div> */}

                        <div className="flex justify-end">
                            <button type="submit"
                                onclick={handleSubmit}
                                className="bg-text-primary text-white px-8 py-2 font-medium shadow-lg transition">
                                إرسال
                            </button>
                        </div>
                    </form>

                    {loading && <p>Loading...</p>}
                    {/* {error && <p>{error}</p>} */}
                    {data && <p>{data.message}</p>}

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
