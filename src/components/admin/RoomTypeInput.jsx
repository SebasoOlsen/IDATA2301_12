import React, { useState } from "react";
import "../../assets/css/admin/RoomTypeInput.css";

const RoomTypeInput = ({ roomTypes, setRoomTypes }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      setRoomTypes((prev) => [...prev, trimmed]);
      setInputValue("");
    }
  };

  const handleRemove = (index) => {
    setRoomTypes((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="room-type-container">
      <label className="hotel-form-label">Room Type</label>
      <div className="room-type-input-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="hotel-form-input"
          placeholder="Enter a room type"
        />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul className="room-type-list">
        {roomTypes.map((room, index) => (
          <li key={index} className="room-type-item">
            <span>{room}</span>
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="room-type-remove-btn"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomTypeInput;
