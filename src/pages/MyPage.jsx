import React, { useState, useEffect } from "react";
import "../assets/css/common/global.css";
import "../assets/css/my-page.css";
import { Link } from "react-router-dom";
import BookingCard from "../components/BookingCard";
/**
 * MyPage component for displaying the user's bookings and quick links.
 *
 * Fetches and lists user bookings, and provides navigation to favourites and contact information.
 *
 * @component
 * @returns {JSX.Element} The rendered user page.
 */
export default function MyPage() {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch("/api/bookings/account/user", {
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error("Network response was not OK: " + response.status);
                }
                const data = await response.json();
                console.log("Raw booking data:", data);

                const formattedBookings = data.map((b) => ({
                    id: b.id,
                    hotel: b.listing?.hotel?.name || "Unknown Hotel",
                    checkin: b.startDate,
                    checkout: b.endDate,
                    status: b.status,
                    roomType: b.listing?.room?.name || "Unknown Room Type",
                }));
                setBookings(formattedBookings);
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Could not load bookings.");
            }
        };

        fetchBookings();
    }, []);

    return (
        <div className="page-content">
            <main className="myPage-main">
                <h3>Your Bookings</h3>
                {error && <p className="error-message">{error}</p>}
                {bookings.length === 0 && !error && (
                    <p>You don't have any bookings yet.</p>
                )}
                <section id="bookings-list" className="bookings-list">
                    {bookings.map((booking) => (
                        <BookingCard
                            key={booking.id}
                            hotel={booking.hotel}
                            checkin={booking.checkin}
                            checkout={booking.checkout}
                            status={booking.status}
                            roomType={booking.roomType}
                        />
                    ))}
                </section>
                <section className="quick-links">
                    <Link className="big-button" to="/favourites">Favourites</Link>
                    <Link className="big-button" to="/contactInformation">Contact Information</Link>
                </section>
            </main>
        </div>
    );
}