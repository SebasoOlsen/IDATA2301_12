import React, { useState } from "react";
import axios from "axios";
import "../assets/css/AddNewHotelForm.css";

const AddNewHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    locationType: "",
    country: "",
    city: "",
    roomTypes: "",
    extraFeatures: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Save hotel data
      const hotelRes = await axios.post(
        "https://localhost:8443/hotels",
        formData
      );
      const hotelId = hotelRes.data.id;

      // Step 2: Upload images
      for (let file of images) {
        const imageForm = new FormData();
        imageForm.append("file", file);
        imageForm.append("type", "HOTEL");
        imageForm.append("typeId", hotelId);

        await axios.post("https://localhost:8443/images/upload", imageForm, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      alert("Hotel and images uploaded successfully!");
      setFormData({
        name: "",
        locationType: "",
        country: "",
        city: "",
        roomTypes: "",
        extraFeatures: "",
      });
      setImages([]);
    } catch (err) {
      console.error(err);
      alert("Error saving hotel or uploading images.");
    }
  };

  return (
    <div className="hotel-form-container">
      <h2 className="hotel-form-title">Add New Hotel</h2>
      <form onSubmit={handleSubmit} className="hotel-form">
        <label className="hotel-form-label">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="hotel-form-input"
        />

        <label className="hotel-form-label">Location Type</label>
        <input
          name="locationType"
          value={formData.locationType}
          onChange={handleChange}
          className="hotel-form-input"
        />

        <label className="hotel-form-label">Country</label>
        <input
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="hotel-form-input"
        />

        <label className="hotel-form-label">City</label>
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="hotel-form-input"
        />

        <label className="hotel-form-label">Room Types</label>
        <input
          name="roomTypes"
          value={formData.roomTypes}
          onChange={handleChange}
          className="hotel-form-input"
        />

        <label className="hotel-form-label">Extra Features</label>
        <input
          name="extraFeatures"
          value={formData.extraFeatures}
          onChange={handleChange}
          className="hotel-form-input"
        />

        <label className="hotel-form-label">Hotel Images</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hotel-form-input"
        />

        <button type="submit" className="hotel-form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewHotelForm;
