import React, { useState } from "react";
import "../../assets/css/admin/ExtraFeatureInput.css";
/**
 * ExtraFeatureInput component for managing a list of extra features.
 *
 * Renders an input field and a list to add or remove extra features.
 * Allows users to enter a feature, add it to the list, and remove features as needed.
 *
 * Props:
 * - features: Array of current feature strings.
 * - setFeatures: Function to update the features array.
 *
 * State:
 * - inputValue: The current value of the input field.
 *
 * @component
 * @returns {JSX.Element} The input and list UI for managing extra features.
 */
const ExtraFeatureInput = ({ features, setFeatures }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      setFeatures((prev) => [...prev, trimmed]);
      setInputValue("");
    }
  };

  const handleRemove = (index) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="extra-feature-container">
      <label className="hotel-form-label">Extra Feature</label>
      <div className="extra-feature-input-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="hotel-form-input"
          placeholder="Enter a feature"
        />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul className="extra-feature-list">
        {features.map((feature, index) => (
          <li key={index} className="extra-feature-item">
            <span>{feature}</span>
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="extra-feature-remove-btn"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraFeatureInput;
