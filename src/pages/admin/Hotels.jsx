import React, { useEffect, useState } from "react";
import HotelTable from "../../components/admin/HotelTable";
import EditHotelModal from "../../components/admin/EditHotelModal";
import PaginationControls from "../../components/admin/PaginationControls";
import {
  getAllHotels,
  updateHotelVisibility,
} from "../../service/api/hotelAPI";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [showHidden, setShowHidden] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const rowsPerPage = 10;

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    try {
      const data = await getAllHotels();
      if (!Array.isArray(data)) throw new Error("Expected array of hotels");
      setHotels(data);
    } catch (error) {
      console.error("Failed to load hotels:", error);
      setHotels([]);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleEdit = (hotel) => setSelectedHotel(hotel);
  const handleCloseModal = () => setSelectedHotel(null);
  const handleHotelUpdated = () => {
    handleCloseModal();
    loadHotels();
  };

  const handleToggleHide = async (hotel) => {
    try {
      await updateHotelVisibility(hotel.id, !hotel.hidden);
      await loadHotels();
    } catch (err) {
      console.error("Failed to toggle hotel visibility:", err);
      alert("Visibility toggle failed.");
    }
  };

  const filteredHotels = hotels
    .filter((hotel) => hotel.name.toLowerCase().includes(search.toLowerCase()))
    .filter((hotel) => showHidden || !hotel.hidden);

  return (
    <div className="hotels">
      <h1>Hotel Management</h1>

      <input
        type="text"
        placeholder="Search for hotels..."
        value={search}
        onChange={handleSearch}
      />

      <label style={{ display: "block", margin: "10px 0" }}>
        <input
          type="checkbox"
          checked={showHidden}
          onChange={() => setShowHidden(!showHidden)}
        />
        Show hidden hotels
      </label>

      <HotelTable
        hotels={filteredHotels}
        page={currentPage}
        rowsPerPage={rowsPerPage}
        onEdit={handleEdit}
        onToggleHide={handleToggleHide}
      />

      <PaginationControls
        total={filteredHotels.length}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        onPageChange={setCurrentPage}
      />

      {selectedHotel && (
        <EditHotelModal
          hotel={selectedHotel}
          onClose={handleCloseModal}
          onUpdate={handleHotelUpdated}
        />
      )}
    </div>
  );
};

export default Hotels;
