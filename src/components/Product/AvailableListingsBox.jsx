import React from "react";
import "../../assets/css/available-listings.css"

export default function AvailableListingsBox({ listings }) {
  const { room, provider, price, currency } = listings;
  return (
      <div className="wrapper">
          <h3 className="title">Available Listings</h3>
        <div className="available-listings-box">
      {listings.length === 0 ? (
        <p className="not-found-message">No available listings found.</p>
      ) : (
        listings.map((listing, idx) => (
            <div className="listing-item-wrapper">
                <div key={idx} className="listing-item">
                    <div className="room-info">
                        <h4 className ="room-type">{listing.room.name}</h4>
                        <p className="provider-name">{listing.provider.name}</p>
                    </div>
                </div>
                <div className= "price-info">
                    <strong className="price-label"> Price: </strong>
                    <p className="cost-p">{listing.price} </p>
                    <p className="currency-p">{listing.currency} </p>
                </div>
                <button className="view-dates-button">View dates</button>
            </div>
        ))
      )}
        </div>
      </div>
  );
}
