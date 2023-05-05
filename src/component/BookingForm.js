import React, { useState } from "react";

const occasions = [
    {
        id: 1,
        title: "Birthday",
    },
    {
        id: 2,
        title: "Anniversary",
    },
];

const BookingForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="grid-container ">
            <form className="form-booking" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" />
                </div>
                <div className="form-item">
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time ">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </div>

                <div className="form-item">
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                    />
                </div>

                <div className="form-item">
                    <label for="occasions">Occasion</label>
                    <select
                        name="occasions"
                        id="occasions"
                        className="occassions"
                    >
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>

                <div className="form-item">
                    <input type="submit" value="Make Your reservation" />
                </div>
            </form>
        </div>
    );
};

export default BookingForm;

// style="display: grid; max-width: 200px; gap: 20px"
