import React from "react";

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
