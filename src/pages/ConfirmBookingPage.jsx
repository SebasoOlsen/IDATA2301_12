
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { checkLoginStatus } from "../service/api/loginAPI.js";
import { createBooking } from "../service/api/bookingAPI.js";
import "../assets/css/confirm-booking.css";

const ConfirmBookingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { listing, startDate, endDate } = location.state || {};
    const [isLoading, setIsLoading] = useState(true);
    const [loginStatus, setLoginStatus] = useState({
        loggedIn: false,
        email: null,
        role: null
    });

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const status = await checkLoginStatus();
                setLoginStatus(status);
            } catch (error) {
                console.error("Error checking login status:", error);
            } finally {
                setIsLoading(false);
            }
        };
        checkLogin();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!loginStatus.loggedIn) {
        return (
            <div className="login-required-container">
                <div>Please login to continue</div>
                <button className="login-button" onClick={() => navigate("/login")}>
                    Go to login
                </button>
            </div>
        );
    }

    if (!listing || !startDate || !endDate) {
        console.log("Invalid booking information:", listing, startDate, endDate);
        return <div>Invalid booking information</div>;
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    };

    const handleConfirm = async () => {
        const listingId = listing.id;
        const formattedStartDate = startDate.toISOString().split("T")[0];
        const formattedEndDate = endDate.toISOString().split("T")[0];

        const result = await createBooking(listingId, formattedStartDate, formattedEndDate);
        console.log("Booking result:", result);
        navigate("/PaymentPage");
    };

    return (
        <div className="confirm-booking-container">
            <h1>Booking Confirmation</h1>
            <section className="booking-details">
                <h2>{listing.title}</h2>
                <section className="dates">
                    <p>Check-in: {formatDate(startDate)}</p>
                    <p>Check-out: {formatDate(endDate)}</p>
                </section>
                <section className="pricing-details">
                    <p>{listing.price}</p>
                    <p>{listing.currency}</p>
                </section>
            </section>
            <button className="confirm-booking-button" onClick={handleConfirm}>
                Confirm Booking
            </button>
            <button className="back-button" onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
};

export default ConfirmBookingPage;