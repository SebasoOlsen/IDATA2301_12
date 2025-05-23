import React, { useEffect, useState } from "react";
import UserTable from "../../components/admin/UserTable";
import EditUserModal from "../../components/admin/EditUserModal";
import PaginationControls from "../../components/admin/PaginationControls";
import "../../assets/css/common/global.css";
import "../../assets/css/admin/users.css";
import { getAllUsersBySearch, deleteUser } from "../../service/api/userAPI";
/**
 * User's admin page for managing user accounts.
 *
 * Displays a searchable, paginated list of users with options to edit or delete each user.
 * Integrates user search, pagination, editing via modal, and deletion with confirmation.
 *
 *
 * @component
 * @returns {JSX.Element} The rendered user management admin page.
 */
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
    try {
      const data = await getAllUsersBySearch(query);

      if (!Array.isArray(data)) {
        throw new Error("Expected array of users");
      }

      setUsers(data);
    } catch (error) {
      console.error("Failed to load users:", error);
      setUsers([]);
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
      try {
        await deleteUser(id);
        loadUsers(search);
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user. Please try again.");
      }
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
