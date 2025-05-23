import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {checkLoginStatus} from "../service/api/loginAPI.js";
import {createBooking} from "../service/api/bookingAPI.js";
/**
 * ConfirmBookingPage component for confirming a hotel booking.
 *
 * Checks user login status, displays booking details, and allows the user to confirm or go back.
 * Handles invalid or missing booking information and redirects to login if needed.
 *
 * @component
 * @returns {JSX.Element} The booking confirmation page UI.
 */
const ConfirmBookingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { listing, startDate, endDate } = location.state || {};
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const loggedIn = await checkLoginStatus();
                setIsLoggedIn(loggedIn);
            } catch (error) {
                console.error('Error checking login status:', error);
            } finally {
                setIsLoading(false);
            }
        }
        checkLogin();
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!isLoggedIn) {
        return (
        <div className="login-required-container">
            <div>Please login to continue</div>
            <button
                className="login-button"
                onClick={() => navigate('/login')}
            >Go to login
            </button>
        </div>
    )
    }

    if (!listing) {
        console.log('Invalid listing information: ', listing);
    }

    if (!listing || !startDate || !endDate) {
        console.log('Invalid booking information: ', listing, startDate, endDate);
        return <div>Invalid booking information</div>;
    }


    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    };

    const handleConfirm = async () => {
        const result = await createBooking({listing, startDate, endDate});
        console.log('Booking result:', result);

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
                    <p>listing.price</p>
                    <p>listing.currency</p>
                </section>
                {/* Add more listing details and total price calculation here */}

            </section>
            <button
                className="confirm-booking-button"
                onClick={() => {/* Add final booking submission logic */}}
            >
                Confirm Booking
            </button>
            <button
                className="back-button"
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        </div>
    );
};

export default ConfirmBookingPage;