import React from 'react';

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
