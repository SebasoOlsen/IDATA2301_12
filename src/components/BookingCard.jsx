import React from 'react';
/**
 * BookingCard component for displaying a summary of a hotel booking.
 *
 * Shows hotel name, check-in and check-out dates, booking status, and room type.
 * Includes a button to view more booking details.
 *
 * Props:
 * - hotel: Name of the hotel.
 * - checkin: Check-in date.
 * - checkout: Check-out date.
 * - status: Booking status.
 * - roomType: Type of room booked.
 *
 * @component
 * @returns {JSX.Element} The UI for displaying booking information.
 */
export default function BookingCard({ hotel, checkin, checkout, status, roomType }) {
  return (
    <section className="bookings-list">
      <div className="booking-card">
        <h4>Booking</h4>
        <p>Hotel Name: {hotel}</p>
        <p>Check-in: {checkin}</p>
        <p>Check-out: {checkout}</p>
        <p>Status: {status}</p>
        <p>Room Type: {roomType}</p>
      </div>
    </section>
  );
}
