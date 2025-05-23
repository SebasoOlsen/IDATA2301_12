import React from "react";
/**
 * HotelTable component for displaying a paginated list of hotels.
 *
 * Renders a table with hotel details, including name, location, rooms, features, average review, and visibility.
 * Provides actions to edit hotel details and toggle hotel visibility.
 *
 * Props:
 * - hotels: Array of hotel objects to display.
 * - page: Current page number for pagination.
 * - rowsPerPage: Number of rows to display per page.
 * - onEdit: Function to call when editing a hotel.
 * - onToggleHide: Function to call to toggle hotel visibility.
 *
 * @component
 * @returns {JSX.Element} The table displaying hotels with actions.
 */
const HotelTable = ({ hotels, page, rowsPerPage, onEdit, onToggleHide }) => {
  const start = (page - 1) * rowsPerPage;
  const paginatedHotels = hotels.slice(start, start + rowsPerPage);

  return (
    <table id="hotelTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location Type</th>
          <th>City</th>
          <th>Country</th>
          <th>Rooms</th>
          <th>Features</th>
          <th>Avg. Review</th>
          <th>Visibility</th>
          <th>Actions</th>
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
            <td>{hotel.hidden ? "Hidden" : "Visible"}</td>
            <td>
              <button onClick={() => onEdit(hotel)}>Edit</button>
              <button onClick={() => onToggleHide(hotel)}>
                {hotel.hidden ? "Unhide" : "Hide"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HotelTable;
