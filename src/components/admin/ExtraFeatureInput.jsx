import React, { useState } from "react";
import "../../assets/css/admin/ExtraFeatureInput.css";

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
