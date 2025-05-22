import React, { useState } from "react";

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
      const res = await fetch(`/api/hotels/${hotel.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Update failed");
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
