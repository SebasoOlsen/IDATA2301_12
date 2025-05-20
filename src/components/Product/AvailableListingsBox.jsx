import React from "react";

export default function AvailableListingsBox({ listings }) {
  const { room, provider, price, currncy } = listings;
  return (
    <div className="available-listings-box">
      <h3>Available Listings</h3>
      {listings.length === 0 ? (
        <p>No available listings found.</p>
      ) : (
        listings.map((listing, idx) => (
          <div key={idx} className="listing-item">
            <h4>{room.name}</h4>
            <p>{provider.name}</p>
            <p>
              <strong>Price:</strong> {price} {currncy}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
