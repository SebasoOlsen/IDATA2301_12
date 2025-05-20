import React, { useEffect, useState } from "react";

import { getAllHotels, getRoomsByHotelId } from "../../service/api/hotelAPI";
import { getProviders } from "../../service/api/providerAPI";
import { createListing } from "../../service/api/listingAPI";

const CreateListingForm = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState("");

  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState("");

  const [providers, setProviders] = useState([]);
  const [selectedProviderId, setSelectedProviderId] = useState("");

  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("NO");

  useEffect(() => {
    getAllHotels().then(setHotels).catch(console.error);
    getProviders().then(setProviders).catch(console.error);
  }, []);

  useEffect(() => {
    if (selectedHotelId) {
      getRoomsByHotelId(selectedHotelId).then(setRooms).catch(console.error);
    } else {
      setRooms([]);
      setSelectedRoomId("");
    }
  }, [selectedHotelId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      hotelId: Number(selectedHotelId),
      roomId: Number(selectedRoomId),
      providerId: Number(selectedProviderId),
      price: Number(price),
      currency,
    };

    try {
      await createListing(payload);
      alert("Listing created!");
      // Optionally reset
      setSelectedHotelId("");
      setSelectedRoomId("");
      setSelectedProviderId("");
      setPrice("");
    } catch (err) {
      console.error(err);
      alert("Failed to create listing.");
    }
  };

  return (
    <form className="create-listing-form" onSubmit={handleSubmit}>
      <label>Hotel:</label>
      <select
        value={selectedHotelId}
        onChange={(e) => {
          setSelectedHotelId(e.target.value);
        }}
        required
      >
        <option value="">-- Select Hotel --</option>
        {hotels.map((hotel) => (
          <option key={hotel.id} value={hotel.id}>
            {hotel.name} ({hotel.city})
          </option>
        ))}
      </select>

      <label>Room:</label>
      <select
        value={selectedRoomId}
        onChange={(e) => setSelectedRoomId(e.target.value)}
        required
        disabled={!rooms.length}
      >
        <option value="">-- Select Room --</option>
        {rooms.map((room) => (
          <option key={room.id} value={room.id}>
            {room.name}
          </option>
        ))}
      </select>

      <label>Provider:</label>
      <select
        value={selectedProviderId}
        onChange={(e) => setSelectedProviderId(e.target.value)}
        required
      >
        <option value="">-- Select Provider --</option>
        {providers.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      <label>Price:</label>
      <input
        type="number"
        min="0"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <label>Currency:</label>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="NOK">NOK</option>
      </select>

      <button type="submit">Create Listing</button>
    </form>
  );
};

export default CreateListingForm;
