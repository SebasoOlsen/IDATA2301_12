// Language: javascript
import React, { useState, useEffect } from "react";
import "../assets/css/common/global.css";
import "../assets/css/favourites.css";
import FavouritesCard from "../components/FavouritesCard";
/**
 * FavouritesPage component for displaying the users favourites.
 *
 * Fetches the users favourite hotels from the API and displays them as a list of cards.
 * Handles loading errors and displays an error message if fetching fails.
 *
 * @component
 * @returns {JSX.Element} The rendered favourites page.
 */

export default function FavouritesPage() {
    const [favourites, setFavourites] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const response = await fetch("/api/favourites/account/user", {
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error("Network response was not OK: " + response.status);
                }
                const data = await response.json();
                console.log("JSON response:", data);
                const formattedFavourites = data.map((f, index) => ({
                    // Use f.id if available; also pass hotelId required for image fetching.
                    id: f.id || index,
                    hotelId: (f.listing && f.listing.hotel && f.listing.hotel.id) || null,
                    hotelName: f.listing?.hotel?.name || "Unknown Hotel",
                    city: f.listing?.hotel?.city || "Unknown City",
                    country: f.listing?.hotel?.country || "Unknown Country",
                }));
                setFavourites(formattedFavourites);
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Could not load favourites.");
            }
        };

        fetchFavourites();
    }, []);

    return (
        <div className="page-content">
            <main className="favourites-main">
                <h3 class="favourites-writing">Your Favourites</h3>
                {error && <p className="error-message">{error}</p>}
                <section id="favourites-list" className="favourites-list">
                    {favourites.map((fav) => (
                        <FavouritesCard
                            key={fav.id}
                            hotelId={fav.hotelId}
                            hotelName={fav.hotelName}
                            city={fav.city}
                            country={fav.country}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}