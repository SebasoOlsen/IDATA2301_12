import React from "react";

const HotelTable = ({ hotels, page, rowsPerPage, onEdit, onDelete }) => {
  const start = (page - 1) * rowsPerPage;
  const paginatedHotels = hotels.slice(start, start + rowsPerPage);

  return (
    <table id="hotelTable">
      <thead>
        <tr>
          <th>Hotel ID</th>
          <th>Name</th>
          <th>Location Type</th>
          <th>City</th>
          <th>Country</th>
          <th>Rooms</th>
          <th>Features</th>
          <th>Avg. Review</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {paginatedHotels.map((hotel) => (
          <tr key={hotel.id}>
            <td>{hotel.id}</td>
            <td>{hotel.name}</td>
            <td>{hotel.locationType}</td>
            <td>{hotel.city}</td>
            <td>{hotel.country}</td>
            <td>{hotel.rooms?.length || 0}</td>
            <td>{hotel.extraFeatures?.length || 0}</td>
            <td>{hotel.averageReview?.toFixed(1)}</td>
            <td>
              <button onClick={() => onEdit(hotel)}>Edit</button>
              <button onClick={() => onDelete(hotel.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HotelTable;
