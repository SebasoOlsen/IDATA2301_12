import React, { useState } from "react";
import "../assets/css/common/global.css";
import "../assets/css/payment.css";

/**
 * PaymentPage simulates a credit card payment form.
 * Validates simple input formats for name, card number, expiry date, and CVC.
 * On succes, it shows a confirmation message.
 *
 * @component
 * @returns {JSX.Element} Payment form or success message.
 */
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

        // Simulate success
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <main className="container">
                <section aria-labelledby="payment-success-title">
                    <h2 id="payment-success-title">Payment Complete</h2>
                    <p>Thank you for your booking!</p>
                </section>
            </main>
        );
    }

    return (
        <main className="container">
            <section aria-labelledby="payment-form-title">
                <h2 id="payment-form-title">Payment Information</h2>
                <div className="payment-warning">
                    This is only meant as a simulated payment. <strong>DO NOT</strong> enter your real payment
                    information.
                </div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Card Details</legend>

                        <label htmlFor="name">Cardholder's Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name on Card"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                            id="cardNumber"
                            type="text"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="expiry">Expiration Date (MM/YY)</label>
                        <input
                            id="expiry"
                            type="text"
                            name="expiry"
                            placeholder="MM/YY"
                            value={formData.expiry}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="cvc">CVC</label>
                        <input
                            id="cvc"
                            type="text"
                            name="cvc"
                            placeholder="123"
                            value={formData.cvc}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>

                    {error && <p role="alert" style={{color: "red"}}>{error}</p>}

                    <button type="submit">Simulate Payment</button>
                </form>
            </section>
        </main>
    );
}
