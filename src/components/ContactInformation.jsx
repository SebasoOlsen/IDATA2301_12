// File: IDATA2301_12/src/components/ContactInformationForm.jsx
import React, { useState } from "react";
import "../assets/css/contact-information.css";
/**
 * ContactInformationForm component for editing user contact information.
 *
 * Displays a form for updating first name, last name, email, phone number, and area code.
 * Submits the updated information to the server and shows a success or error message.
 *
 * State:
 * - form: Object containing user input fields (`firstName`, `lastName`, `email`, `phone`, `areaCode`).
 * - message: Status message after form submission.
 *
 * @component
 * @returns {JSX.Element} The UI for editing and submitting contact information.
 */
export default function ContactInformationForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        areaCode: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/users/account/edit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            if (response.ok) {
                setMessage("User updated successfully.");
            } else {
                setMessage("Error updating user.");
            }
        } catch (error) {
            setMessage("Error updating user.");
        }
    };

    return (
        <main className="main">
            <h1>Edit Contact Information</h1>
            <form className="user-info-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="areaCode"
                    placeholder="Area Code"
                    value={form.areaCode}
                    onChange={handleChange}
                />
                <button type="submit">Save Changes</button>
            </form>
            {message && <p>{message}</p>}
        </main>
    );
}
