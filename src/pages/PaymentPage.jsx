import React, { useState } from "react";
import "../assets/css/common/global.css";

export default function PaymentPage() {
    const [formData, setFormData] = useState({
        name: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, cardNumber, expiry, cvc } = formData;

        const isValidCardNumber = /^\d{16}$/.test(cardNumber);
        const isValidExpiry = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
        const isValidCVC = /^\d{3}$/.test(cvc);

        if (!name || !isValidCardNumber || !isValidExpiry || !isValidCVC) {
            setError("Please enter valid payment information.");
            return;
        }

        // Simulate success (nothing is saved)
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="container">
                <h2>Payment Complete</h2>
                <p>Thank you for your booking!</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>Payment Information</h2>
            <form onSubmit={handleSubmit}>
                <label>Cardholder's Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name on Card"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>Card Number</label>
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                />

                <label>Expiration Date (MM/YY)</label>
                <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleChange}
                    required
                />

                <label>CVC</label>
                <input
                    type="text"
                    name="cvc"
                    placeholder="123"
                    value={formData.cvc}
                    onChange={handleChange}
                    required
                />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit">Simulate Payment</button>
            </form>
        </div>
    );
}
