import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Timeline.css"; // Import the custom CSS file

const Timeline = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    return (
        <div className="timeline-container">
            {/* Calendar Section */}
            <div className="calendar-section">
                <h2 className="section-title">Select a Date</h2>
                <div className="calendar-container">
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        tileClassName={({ date, view }) =>
                            view === "month" &&
                                date.getDate() === selectedDate.getDate() &&
                                date.getMonth() === selectedDate.getMonth() &&
                                date.getFullYear() === selectedDate.getFullYear()
                                ? "selected-date"
                                : "calendar-tile"
                        }
                        nextLabel="›"
                        prevLabel="‹"
                    />
                </div>
                <div className="time-slots">
                    {["05:00 PM", "06:00 PM", "07:00 AM", "08:00 PM", "09:00 PM"].map(
                        (time) => (
                            <button
                                key={time}
                                onClick={() => handleTimeClick(time)}
                                className={`time-slot ${selectedTime === time ? "active-time" : ""
                                    }`}
                            >
                                {time}
                            </button>
                        )
                    )}
                </div>
            </div>

            {/* Booking Form Section */}
            <div className="form-section">
                <h2 className="form-title">حجز المواعيد</h2>
                <form className="booking-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            الاسم
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                            رقم الهاتف
                        </label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="05xxxxxxxx"
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            الإيميل
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="ex@example.com"
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        احجز موعد
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Timeline;
