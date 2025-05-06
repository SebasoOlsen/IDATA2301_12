import React, { useEffect, useState } from "react";
import UserTable from "../../components/admin/UserTable";
import EditUserModal from "../../components/admin/EditUserModal";
import PaginationControls from "../../components/admin/PaginationControls";
import "../../assets/css/common/global.css";
import "../../assets/css/admin/users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  const rowsPerPage = 10;

  useEffect(() => {
    loadUsers(search);
  }, [search]);

  const loadUsers = async (query = "") => {
    const url = query
      ? `/users/search?query=${encodeURIComponent(query)}`
      : "/users";

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();

      if (!Array.isArray(data)) {
        throw new Error("Expected array of users, got something else.");
      }

      setUsers(data);
    } catch (error) {
      console.error("Failed to load users:", error);
      setUsers([]); // prevent UI crash
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleEdit = (user) => setSelectedUser(user);
  const handleCloseModal = () => setSelectedUser(null);
  const handleUserUpdated = () => {
    handleCloseModal();
    loadUsers(search);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await fetch(`/api/users/${id}`, { method: "DELETE" });
      loadUsers(search);
    }
  };

  return (
    <div className="users">
      <h1>User Management</h1>
      <input
        type="text"
        id="searchInput"
        placeholder="Search for users..."
        value={search}
        onChange={handleSearch}
      />
      <UserTable
        users={users}
        page={currentPage}
        rowsPerPage={rowsPerPage}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <PaginationControls
        total={users.length}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        onPageChange={setCurrentPage}
      />
      {selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={handleCloseModal}
          onUpdate={handleUserUpdated}
        />
      )}
    </div>
  );
};

export default Users;
