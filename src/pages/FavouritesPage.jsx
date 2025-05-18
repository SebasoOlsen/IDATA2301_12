// File: `IDATA2301_12/src/pages/Favourites.jsx`
import React, { useState, useEffect } from "react";
import "../assets/css/common/global.css";
import "../assets/css/favourites.css";
import FavouritesCard from "../components/FavouritesCard";

export default function FavouritesPage() {
    const [favourites, setFavourites] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const response = await fetch("/favourites/user", {
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error("Network response was not OK: " + response.status);
                }
                const data = await response.json();
                const formattedFavourites = data.map((f) => ({
                    id: f.id,
                    hotelName: f.listing.hotel.name,
                    roomTypes: f.listing.hotel.roomTypes,
                    city: f.listing.hotel.city,
                    country: f.listing.hotel.country,
                    imageSrc: f.listing.hotel.id && f.listing.hotel.name
                        ? `/images/${f.listing.hotel.id}-${f.listing.hotel.name.replace(/\s+/g, "-")}-hotel.jpg`
                        : "/images/default-hotel.jpg",
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
                <h3>Your Favourites</h3>
                {error && <p className="error-message">{error}</p>}
                <section id="favourites-list" className="favourites-list">
                    {favourites.map((fav) => (
                        <FavouritesCard
                            key={fav.id}
                            hotelName={fav.hotelName}
                            roomTypes={fav.roomTypes}
                            city={fav.city}
                            country={fav.country}
                            imageSrc={fav.imageSrc}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}