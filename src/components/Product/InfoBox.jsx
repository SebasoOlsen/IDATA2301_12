import React from "react";
/**
 * HotelInfoBox component for displaying hotel information.
 *
 * Shows the hotel's name, location, average rating, and description.
 *
 * Props:
 * - hotel: Object containing hotel details, including `name`, `city`, `country`, `locationType`, `description`, and `averageRating`.
 *
 * @component
 * @returns {JSX.Element} The UI for displaying hotel information.
 */
export default function HotelInfoBox({ hotel }) {
  const { name, city, country, locationType, description, averageRating } =
    hotel;

  return (
    <div className="hotel-info-box">
      <h2>{name}</h2>
      <p>
        <strong>Location:</strong> {locationType} {city}, {country}
      </p>
      <p>
        <strong>Rating:</strong> {averageRating}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
}
