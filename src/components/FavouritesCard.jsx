import React from 'react';
import { Link } from 'react-router-dom';

export default function FavouritesCard({ hotel, location, city, country }) {
  return (
    <div className="favourites-card">
      <h4>Favourite</h4>
      <p>Hotel Name: {hotel}</p>
      <p>Location type: {location}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <Link to="/ProductPage">
        <button className="big-button">View Details</button>
      </Link>
    </div>
  );
}
