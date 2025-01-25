import React from 'react';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { FaWhatsapp, FaInstagram, FaTimes, FaMailBulk } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { IoCallOutline } from 'react-icons/io5';

const ContactUs = () => {
    return (
        <div className="relative flex min-h-screen">

            <div className="w-full md:w-1/2 p-8">
                <h3 className="text-blue-400 text-lg font-bold mb-4">Contact Us</h3>
                <p className="text-gray-300 mb-6">
                    We are here to answer all your inquiries and meet your project needs with efficiency and speed.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <span className="mr-4"><CiLocationOn /></span>
                        <p>Jeddah, Al-Batarji Street, Al-Zahra District</p>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-4"><CiMail /></span>
                        <p>info@bru.com.sa</p>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-4"><IoCallOutline /></span>
                        <p>0552311322</p>
                    </div>
                </div>
                {/* Social Icons */}
                <div className="flex space-x-4 mt-6">
                    <a href="#" className="bg-blue-500 text-white p-2 rounded-full">
                        <FaWhatsapp size={20} />
                    </a>
                    <a href="#" className="bg-blue-500 text-white p-2 rounded-full">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="bg-blue-500 text-white p-2 rounded-full">
                        <FaTimes size={20} />
                    </a>
                </div>
            </div>

            <div className="absolute right-0 top-0 w-full md:w-1/2 p-8 bg-white">
                <h3 className="text-black text-lg font-bold mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-6">
                    We are ready to answer your questions and assist you in executing your project with full professionalism.
                </p>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border p-2 rounded-md w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border p-2 rounded-md w-full"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="border p-2 rounded-md w-full"
                        />
                        <input
                            type="text"
                            placeholder="Subject of the Message"
                            className="border p-2 rounded-md w-full"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Verification Number"
                        className="border p-2 rounded-md w-full"
                    />
                    <textarea
                        placeholder="Message"
                        className="border p-2 rounded-md w-full"
                        rows="4"
                    />
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
