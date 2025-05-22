import React, { useState } from "react";
import { updateHotel } from "../../service/api/hotelAPI";
/**
 * EditHotelModal component for editing hotel details.
 *
 * Renders a modal dialog with a form to edit hotel information such as name, location type, country, city, and average review.
 * Handles form state, input changes, and submission to update the hotel via API.
 *
 * Props:
 * - hotel: The hotel object to edit.
 * - onClose: Function to close the modal.
 * - onUpdate: Function to call after a successful update.
 *
 * State:
 * - form: Object containing the editable hotel fields.
 *
 * @component
 * @returns {JSX.Element} The modal form for editing a hotel.
 */
const EditHotelModal = ({ hotel, onClose, onUpdate }) => {
  const [form, setForm] = useState({
    name: hotel.name || "",
    locationType: hotel.locationType || "",
    country: hotel.country || "",
    city: hotel.city || "",
    averageReview: hotel.averageReview || 0,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: id === "averageReview" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateHotel(hotel.id, form);
      onUpdate();
    } catch (err) {
      alert("Hotel update failed.");
      console.error(err);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Hotel</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input id="name" value={form.name} onChange={handleChange} />
          </div>
          <div>
            <label>Location Type</label>
            <input
              id="locationType"
              value={form.locationType}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Country</label>
            <input id="country" value={form.country} onChange={handleChange} />
          </div>
          <div>
            <label>City</label>
            <input id="city" value={form.city} onChange={handleChange} />
          </div>
          <div>
            <label>Average Review</label>
            <input
              id="averageReview"
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={form.averageReview}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditHotelModal;
