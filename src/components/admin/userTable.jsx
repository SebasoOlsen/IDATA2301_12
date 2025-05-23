import React from "react";
/**
 * UserTable component for displaying a paginated list of users.
 *
 * Renders a table with user details, including ID, name, email, telephone, and role.
 * Provides actions to edit or delete a user.
 *
 * Props:
 * - users: Array of user objects to display.
 * - page: Current page number for pagination.
 * - rowsPerPage: Number of rows to display per page.
 * - onEdit: Function to call when editing a user.
 * - onDelete: Function to call when deleting a user.
 *
 * @component
 * @returns {JSX.Element} The table displaying users with actions.
 */
const UserTable = ({ users, page, rowsPerPage, onEdit, onDelete }) => {
  const start = (page - 1) * rowsPerPage;
  const paginatedUsers = users.slice(start, start + rowsPerPage);

  return (
    <table id="userTable">
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Telephone</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {paginatedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.telephone}</td>
            <td>{user.role}</td>
            <td>
              <button onClick={() => onEdit(user)}>Edit</button>
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
