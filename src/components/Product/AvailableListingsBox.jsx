import React, {useState} from "react";
import "../../assets/css/available-listings.css"
import SelectBookingDateModal from "./selectBookingDateModal.jsx";"./selectBookingDateModal.jsx"
import {useNavigate} from "react-router-dom";
/**
 * AvailableListingsBox component for displaying available room listings.
 *
 * Renders a list of available listings with room and provider information, price, and currency.
 * Allows users to view available booking dates for each listing via a modal dialog.
 * Handles navigation to the booking confirmation page upon date selection.
 *
 * Props:
 * - listings: Array of listing objects to display.
 *
 * State:
 * - selectedListingId: ID of the currently selected listing for booking.
 * - showModal: Boolean indicating if the booking date modal is open.
 *
 * @component
 * @returns {JSX.Element} The UI for displaying and booking available listings.
 */
export default function AvailableListingsBox({ listings }) {

  const [selectedListingId, setSelectedListingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenDateSelector = listingId => {
      setSelectedListingId(listingId);
      setShowModal(true);
  }
  const handleCloseDateSelector = () => {
      setShowModal(false);
  }

  const handleSubmitDates = (bookingData) => {
      console.log("Handling submit dates.")
      setShowModal(false);
      navigate('/confirm-booking', {
          state: {
              listing: listings.find(listing => listing.id === bookingData.listingId),
              startDate: bookingData.startDate,
              endDate: bookingData.endDate
          }
      })
  }

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
                <button className="view-dates-button"
                        onClick={() => handleOpenDateSelector(listing.id)}
                >View dates</button>
            </div>
        ))
      )}
        </div>

          {showModal && (
              <SelectBookingDateModal
              listingId = {selectedListingId}
              onClose = {handleCloseDateSelector}
              onSubmit = {handleSubmitDates}
              />
          )}

      </div>
  );
}
