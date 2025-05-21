import React from "react";

export default function AvailableListingsBox({ listings }) {
  const { room, provider, price, currency } = listings;
  return (
    <div className="available-listings-box">
      <h3>Available Listings</h3>
      {listings.length === 0 ? (
        <p>No available listings found.</p>
      ) : (
        listings.map((listing, idx) => (
          <div key={idx} className="listing-item">
            <h4>{listing.room.name}</h4>
            <p>{listing.provider.name}</p>
            <p>
              <strong>Price:</strong> {listing.price} {listing.currency}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
