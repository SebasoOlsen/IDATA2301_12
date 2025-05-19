import React from "react";

export default function ExtraFeaturesBox({ hotel }) {
  const { extraFeatures } = hotel;

  return (
    <div className="extra-features-box">
      {extraFeatures &&
        extraFeatures.map((feature, idx) => (
          <div key={idx} className="extra-feature-item">
            {feature}
          </div>
        ))}
    </div>
  );
}
