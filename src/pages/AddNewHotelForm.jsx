import React, { useState } from "react";
import { createHotel } from "../service/api/hotelAPI";
import { uploadImage } from "../service/api/imageAPI";
import "../assets/css/AddNewHotelForm.css";

const AddNewHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    locationType: "",
    country: "",
    city: "",
    roomType: "",
    extraFeature: "",
  });

  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting Hotel:", formData);

      const { id: hotelId } = await createHotel(formData);

      await Promise.all(
        images.map((img) => uploadImage(img, "HOTEL", hotelId))
      );

      alert("Hotel and images uploaded successfully!");

      // Reset form
      setFormData({
        name: "",
        locationType: "",
        country: "",
        city: "",
        roomType: "",
        extraFeature: "",
      });
      setImages([]);
    } catch (err) {
      console.error(err);
      alert("Error saving hotel or uploading images.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="hotel-form-container">
      <h2 className="hotel-form-title">Add New Hotel</h2>
      <form onSubmit={handleSubmit} className="hotel-form">
        {[
          { label: "Name", name: "name" },
          { label: "Location Type", name: "locationType" },
          { label: "Country", name: "country" },
          { label: "City", name: "city" },
          { label: "Room Type", name: "roomType" },
          { label: "Extra Feature", name: "extraFeature" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="hotel-form-label">{label}</label>
            <input
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="hotel-form-input"
            />
          </div>
        ))}

        <label className="hotel-form-label">Hotel Images</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hotel-form-input"
        />

        <button
          type="submit"
          className="hotel-form-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddNewHotelForm;
