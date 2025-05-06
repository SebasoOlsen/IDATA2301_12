import React from "react";
import "../assets/css/common/global.css";
import "../assets/css/homepage.css";

export default function HomePage() {
  // Mocked hotel data for now
  const hotels = [
    {
      name: "Andante Hotel",
      location: "City Center",
      price: "From $150/night",
      image: "/pictures/front-andante-hotel.jpg",
      providers: [
        { name: "Booking.com", price: "1500 NOK" },
        { name: "Agoda", price: "2000 NOK" },
      ],
      link: "/product",
    },
    // Add more hotel objects here if needed
  ];

  return (
    <div className="wrapper">
      <div classname="page-content">
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
          {hotels.map((hotel, index) => (
            <div className="hotel-card" key={index}>
              <div
                className="hotel-image"
                style={{
                  backgroundImage: `url('${hotel.image}')`,
                }}
              ></div>
              <div className="hotel-info">
                <div className="hotel-name">{hotel.name}</div>
                <div className="hotel-location">{hotel.location}</div>
                <div className="hotel-price">{hotel.price}</div>
                <div className="provider-prices">
                  {hotel.providers.map((provider, idx) => (
                    <span key={idx}>
                      {provider.name}
                      <br />
                      {provider.price}
                    </span>
                  ))}
                </div>
                <a href={hotel.link} className="view-deals-button">
                  View Deal
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
