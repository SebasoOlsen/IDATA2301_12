import React, { useEffect, useState } from "react";
import "../assets/css/common/global.css";
import "../assets/css/homepage.css";
import "../components/HotelCard";
import { getRandomHotels } from "../service/api/hotelAPI";
import HotelCard from "../components/HotelCard";

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
    <div className="wrapper">
      <div className="page-content">
        <div className="search-container">
          <form className="search-form" action="/search" method="get">
            <input
              type="text"
              name="destination"
              className="search-input"
              placeholder="Destination"
            />
            <input type="date" name="checkin" className="search-input" />
            <input type="date" name="checkout" className="search-input" />
            <select name="rooms" className="search-input">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
            </select>
            <button type="submit" className="search-button">
              Search Hotels
            </button>
          </form>
        </div>
        <div className="featured-deals">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}
