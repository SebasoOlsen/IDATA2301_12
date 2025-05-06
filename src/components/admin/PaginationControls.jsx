import React from "react";

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
