import React, { useEffect, useState } from "react";
import "../assets/css/common/global.css";
import "../assets/css/homepage.css";
import { getRandomHotels } from "../service/api/hotelAPI";
import HotelCard from "../components/HotelCard";
import beachImage from "../assets/images/beach.jpg";
/**
 * HomePage component for displaying the main page.
 *
 * Shows a featured image, a hotel search form, and random featured hotel deals.
 * Fetches random hotels to display as featured deals.
 *
 * @component
 * @returns {JSX.Element} The rendered home page.
 */
export default function HomePage() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await getRandomHotels(3);
        setHotels(data);
      } catch (error) {
        console.error("Error fetching random hotels:", error);
      }
    };
    fetchHotels();
  }, []);

  return (
      <main className="wrapper">
        <section className="page-content">
          {/* Optional: Beach image as img element for better loading control */}
          <figure className="beach-image">
            <img
                src={beachImage}
                alt="Beautiful beach resort background"
            />
          </figure>

          <section className="search-container">
            <form className="search-form" action="/search" method="get">
              <input
                  type="text"
                  name="destination"
                  className="search-input"
                  placeholder="Destination"
              />
              <button type="submit" className="search-button">
                Search Hotels
              </button>
            </form>
          </section>

          <section className="featured-deals">
            {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </section>
        </section>
      </main>
  );
}