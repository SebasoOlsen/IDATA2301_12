import React, { useEffect, useState } from "react";
import { getImageByTypeAndId } from "../service/api/imageAPI";

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
        <a href={`/product/${hotel.id}`} className="view-deals-button">
          View Deal
        </a>
      </div>
    </div>
  );
};

export default HotelCard;
