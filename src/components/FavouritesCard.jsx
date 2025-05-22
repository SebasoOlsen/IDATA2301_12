// Language: javascript
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImageByTypeAndId } from "../service/api/imageAPI";
import "../assets/css/favourites.css";
/**
 * FavouritesCard component for displaying a favourite hotel summary.
 *
 * Shows hotel image, name, city and country. Includes a button to view hotel details.
 * Fetches the hotel image by hotel ID and displays a fallback if unavailable.
 *
 * Props:
 * - hotelId: ID of the hotel.
 * - hotelName: Name of the hotel.
 * - roomTypes: Array of room types (not displayed).
 * - city: City where the hotel is located.
 * - country: Country where the hotel is located.
 *
 * @component
 * @returns {JSX.Element} The UI for displaying a favourite hotel card.
 */
// Generates fallback image URL using hotelId and hotelName.
// Example: /1-Thon-Hotel-hotel.jpg

export default function FavouritesCard({ hotelId, hotelName, roomTypes, city, country }) {
    const [imageUrl, setImageUrl] = useState(null);
    useEffect(() => {
        async function fetchImage() {
            try {
                console.log(hotelId);
                const urls = await getImageByTypeAndId("HOTEL", hotelId);
                console.log("Image URLs received:", urls);
                if (urls && urls.length > 0) {
                    setImageUrl(urls[0]);
                }
            } catch (error) {
                console.error("Failed to fetch hotel image:", error);
            }
        }
        fetchImage();
    }, [hotelId]);

    return (
        <div className="favourites-card">
            <div
                className="hotel-image"
                style={{
                    backgroundImage: imageUrl ? `url("${imageUrl}")` : "none",
                }}
            ></div>
            <p>Hotel Name: {hotelName}</p>
            <p>City: {city}</p>
            <p>Country: {country}</p>
            <Link to="/ProductPage">
                <button className="big-button">View Details</button>
            </Link>
        </div>
    );
}