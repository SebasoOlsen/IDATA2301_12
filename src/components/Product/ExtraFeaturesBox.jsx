import React from "react";
/**
 * ExtraFeaturesBox component for displaying a hotel's extra features.
 *
 * Renders a list of extra features provided by the hotel. If no extra features are available,
 * displays a message indicating their absence.
 *
 * Props:
 * - hotel: Object containing hotel details, including an `extraFeature` array.
 *
 * @component
 * @returns {JSX.Element} The UI for displaying extra hotel features.
 */
export default function ExtraFeaturesBox({ hotel }) {
  const { extraFeature = [] } = hotel;

  return (
    <div className="extra-features-box">
      <h3>Extra Features</h3>
      {extraFeature.length === 0 ? (
        <p>No extra features available.</p>
      ) : (
        extraFeature.map((feature, idx) => (
          <div key={idx} className="extra-feature-item">
            {feature}
          </div>
        ))
      )}
    </div>
  );
}
