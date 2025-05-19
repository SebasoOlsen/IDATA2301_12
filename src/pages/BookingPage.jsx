import React, { useState } from "react";
import "../assets/css/common/global.css";
import "../assets/css/booking.css"; // Adjust path if necessary

/**
 * BookingPage allows users to input their booking details.
 *
 * On submission it will confirm the reservation.
 *
 * @component
 * @returns {JSX.Element}
 */

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkin: "",
        checkout: "",
        guests: 1,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <main className="container">
                <section className="confirmation-section" aria-labelledby="confirmation-heading">
                    <h2 id="confirmation-heading">Booking Confirmed</h2>
                    <p>Thank you for your reservation, {formData.name}!</p>
                    <p>
                        <strong>Check-in:</strong> {formData.checkin}<br />
                        <strong>Check-out:</strong> {formData.checkout}<br />
                        <strong>Guests:</strong> {formData.guests}
                    </p>
                </section>
            </main>
        );
    }

    return (
        <main className="container">
            <section className="booking-section" aria-labelledby="booking-heading">
                <h1 id="booking-heading">Book Your Stay</h1>
                <form onSubmit={handleSubmit} className="booking-form">
                    <fieldset>
                        <legend>Booking Details</legend>

                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name Surname"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="checkin">Check-In Date</label>
                        <input
                            id="checkin"
                            name="checkin"
                            type="date"
                            value={formData.checkin}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="checkout">Check-Out Date</label>
                        <input
                            id="checkout"
                            name="checkout"
                            type="date"
                            value={formData.checkout}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="guests">Number of Guests</label>
                        <input
                            id="guests"
                            name="guests"
                            type="number"
                            min="1"
                            value={formData.guests}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>
                    <button type="submit" className="submit-button">Confirm Booking</button>
                </form>
            </section>
        </main>
    );
}
