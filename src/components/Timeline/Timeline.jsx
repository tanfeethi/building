import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Timeline.css";
import { api_url } from "../../utils/api";

const Timeline = () => {
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
            alert("Please select a time");
            return;
        }

        const datetime = `${selectedDate.toISOString().split("T")[0]} ${selectedTime}`;

        const payload = {
            ...formData,
            datetime,
        };

        setLoading(true);
        setError(null);
        setSuccessMessage("");

        try {
            const response = await fetch(`${api_url}/api/appointment/takeAppointment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            if (result.success) {
                setSuccessMessage("Appointment booked successfully!");
            } else {
                throw new Error(result.message || "Failed to book appointment.");
            }
        } catch (err) {
            setError(err.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row bg-text-primary-dark p-8 text-white">
            {/* Calendar Section */}
            <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
                <h2 className="text-medium text-white mb-4">Feb 2025</h2>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    inline
                    calendarClassName="custom-calendar"
                />
                <div className="flex gap-2 mt-4">
                    {["05:00 PM", "06:00 PM", "07:00 AM", "08:00 PM", "09:00 PM"].map(
                        (time) => (
                            <button
                                key={time}
                                onClick={() => handleTimeClick(time)}
                                className={`px-4 py-2 rounded-1xl ${
                                    selectedTime === time
                                        ? "bg-text-dark text-white"
                                        : "bg-text-grey text-black"
                                }`}
                            >
                                {time}
                            </button>
                        )
                    )}
                </div>
            </div>

            {/* Form Section */}
            <div className="lg:w-1/2 w-full flex flex-col gap-4 p-4">
                <h2 className="text-large text-white text-right">حجز المواعيد</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="الاسم"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 rounded-1xl border border-gray-300 text-black"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="05xxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    className="p-3 rounded-1xl border border-gray-300 text-black"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="ex@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-1xl border border-gray-300 text-black"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-text-primary text-white py-3 rounded-1xl"
                    disabled={loading}
                >
                    {loading ? "جاري الحجز..." : "احجز موعد"}
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}
            </div>
        </div>
    );
};

export default Timeline;
