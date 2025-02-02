import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";
import "./timeline.css";
import { api_url } from "../../utils/api";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";

const Timeline = () => {
    const { t } = useTranslation();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        if (!selectedTime) {
            alert(t("select_time"));
            return;
        }

        // Combine selected date and selected time, and format it to 'Y-m-d H:i:s'
        const datetime = moment(`${moment(selectedDate).format("YYYY-MM-DD")} ${selectedTime}`, "YYYY-MM-DD hh:mm A")
            .format("YYYY-MM-DD HH:mm:ss");

        const payload = {
            ...formData,
            datetime,
        };

        setLoading(true);
        setError(null);
        setSuccessMessage("");

        try {
            const response = await axios.post(`${api_url}/api/appointment/takeAppointment`, payload, {
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true",
                },
            });

            if (response.data.success) {
                setSuccessMessage(t("appointment_success"));
            } else {
                throw new Error(response.data.message || t("error_occurred"));
            }
        } catch (err) {
            setError(err.response?.data?.message || err.message || t("error_occurred"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-text-primary-dark text-white">
            <Container>
                <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row p-8">

                    {/* Form Section */}
                    <div className="lg:w-1/2 w-full flex flex-col gap-4 p-4">
                        <h2 className="text-large text-white">{t("appointment_title")}</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder={t("name_placeholder")}
                            value={formData.name}
                            onChange={handleChange}
                            className="p-3 rounded-1xl border border-gray-300 text-black"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder={t("phone_placeholder")}
                            value={formData.phone}
                            onChange={handleChange}
                            className="p-3 rounded-1xl border border-gray-300 text-black"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t("email_placeholder")}
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 rounded-1xl border border-gray-300 text-black"
                        />
                        <button
                            onClick={handleSubmit}
                            className="bg-text-primary text-white py-3 rounded-1xl"
                            disabled={loading}
                        >
                            {loading ? t("booking_in_progress") : t("book_appointment")}
                        </button>
                        {error && <p className="text-red-500">{error}</p>}
                        {successMessage && <p className="text-green-500">{successMessage}</p>}
                    </div>
                    <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
                        <h2 className="text-medium text-white mb-4">{t("appointment_title")}</h2>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            inline
                            calendarClassName="custom-calendar"
                        />
                        <div className="flex gap-2 mt-4 mb-4 flex-wrap mx-xl">
                            {["05:00 PM", "06:00 PM", "07:00 AM", "08:00 PM", "09:00 PM"].map((time) => (
                                <button
                                    key={time}
                                    onClick={() => handleTimeClick(time)}
                                    className={`px-4 py-2 rounded-1xl ${
                                        selectedTime === time ? "bg-text-dark text-white" : "bg-text-grey text-black"
                                    }`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                
            </Container>
        </div>
    );
};

export default Timeline;
