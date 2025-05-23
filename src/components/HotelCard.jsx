import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getImageByTypeAndId } from "../service/api/imageAPI";
/**
 * HotelCard component for displaying a summary of a hotel.
 *
 * Shows hotel image, name, location, room types, extra features, and location type.
 * Fetches the hotel image by hotel ID and displays a fallback if unavailable.
 * Includes a link to view more details about the hotel.
 *
 * Props:
 * - hotel: Object containing hotel details, including `id`, `name`, `city`, `country`, `roomTypes`, `extraFeatures`, and `locationType`.
 *
 * @component
 * @returns {JSX.Element} The UI for displaying a hotel card.
 */
const HotelCard = ({ hotel }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const urls = await getImageByTypeAndId("HOTEL", hotel.id);
        console.log("Image URLs received:", urls);
        if (urls && urls.length > 0) {
          setImageUrl(urls[0]);
        }
      } catch (error) {
        console.error("Failed to fetch hotel image:", error);
      }
    }

    fetchImage();
  }, [hotel.id]);

  return (
    <div className="hotel-card">
      <div
        className="hotel-image"
        style={{
          backgroundImage: imageUrl ? `url("${imageUrl}")` : "none",
        }}
      ></div>

      <div className="hotel-info">
        <div className="hotel-name">{hotel.name}</div>
        <div className="hotel-location">
          {hotel.city}, {hotel.country}
        </div>
        <div className="hotel-room-types">
          <strong>Rooms:</strong> {hotel.roomTypes}
        </div>
        <div className="hotel-extras">
          <strong>Extras:</strong> {hotel.extraFeatures}
        </div>
        <div className="hotel-location-type">
          <strong>Location Type:</strong> {hotel.locationType}
        </div>
        <Link to={`/product/${hotel.id}`} className="view-deals-button">
          View Deal
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
