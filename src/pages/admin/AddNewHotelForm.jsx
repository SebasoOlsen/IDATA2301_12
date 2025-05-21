import React, { useState } from "react";
import { createHotel } from "../../service/api/hotelAPI";
import { uploadImage } from "../../service/api/imageAPI";
import "../../assets/css/AddNewHotelForm.css";
import ExtraFeatureInput from "../../components/admin/ExtraFeatureInput";
import ImageUploadList from "../../components/admin/ImageUploadList";
import RoomTypeInput from "../../components/admin/RoomTypeInput";

const AddNewHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    locationType: "",
    country: "",
    city: "",
  });

  const [extraFeatures, setExtraFeatures] = useState([]);
  const [images, setImages] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
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
      const payload = { ...formData, extraFeatures, roomTypes };

      console.log("Submitting Hotel:", formData);
      console.log("Payload:", JSON.stringify(payload, null, 2));

      const { id: hotelId } = await createHotel(payload);

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
      });
      setImages([]);
      setExtraFeatures([]);
      setRoomTypes([]);
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

        {/* Room Type Input */}
        <RoomTypeInput roomTypes={roomTypes} setRoomTypes={setRoomTypes} />

        {/* Extra Feature Input */}
        <ExtraFeatureInput
          features={extraFeatures}
          setFeatures={setExtraFeatures}
        />

        <ImageUploadList images={images} setImages={setImages} />

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
