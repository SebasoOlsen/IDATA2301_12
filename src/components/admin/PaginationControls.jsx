import React from "react";
/**
 * PaginationControls component for navigating paginated data.
 *
 * Renders pagination buttons to navigate between pages, including previous, next, and individual page numbers.
 * Disables navigation buttons when on the first or last page.
 *
 * Props:
 * - total: Total number of items.
 * - currentPage: The currently active page number.
 * - rowsPerPage: Number of items per page.
 * - onPageChange: Function to call when the page changes.
 *
 * @component
 * @returns {JSX.Element} The pagination controls UI.
 */
const PaginationControls = ({
  total,
  currentPage,
  rowsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / rowsPerPage);

  return (
    <div id="paginationControls">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={currentPage === i + 1 ? "active-page" : ""}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default PaginationControls;
