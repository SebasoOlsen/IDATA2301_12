import React, { useEffect, useState } from "react";
import HotelTable from "../../components/admin/HotelTable";
import EditHotelModal from "../../components/admin/EditHotelModal";
import PaginationControls from "../../components/admin/PaginationControls";
import { getAllHotels } from "../../service/api/hotelAPI";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const rowsPerPage = 10;

  useEffect(() => {
    loadHotels(search);
  }, [search]);

  const loadHotels = async () => {
    try {
      const data = await getAllHotels();

      if (!Array.isArray(data)) {
        throw new Error("Expected array of hotels");
      }

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
    loadHotels(search);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      await fetch(`/api/hotels/${id}`, { method: "DELETE" });
      loadHotels(search);
    }
  };

  return (
    <div className="hotels">
      <h1>Hotel Management</h1>
      <input
        type="text"
        id="searchInput"
        placeholder="Search for hotels..."
        value={search}
        onChange={handleSearch}
      />
      <HotelTable
        hotels={hotels}
        page={currentPage}
        rowsPerPage={rowsPerPage}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <PaginationControls
        total={hotels.length}
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
