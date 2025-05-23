import React, { useState } from "react";
import { updateUser } from "../../service/api/userAPI";
/**
 * EditUserModal component for editing user details.
 *
 * Renders a modal dialog with a form to edit user information such as first name, last name, email, telephone, role, and password.
 * Handles form state, input changes, and submission to update the user via API.
 *
 * Props:
 * - user: The user object to edit.
 * - onClose: Functon to close the modal.
 * - onUpdate: Function to call after a successful update.
 *
 * State:
 * - form: Object containing the editable user fields.
 *
 * @component
 * @returns {JSX.Element} The modal form for editing a user.
 */
const EditUserModal = ({ user, onClose, onUpdate }) => {
  const [form, setForm] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
    telephone: user.telephone || "",
    role: user.role || "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form };
    if (!payload.password) delete payload.password;

    try {
      try {
        await updateUser(user.id, payload);
        onUpdate();
      } catch (err) {
        alert("Update failed");
        console.error("Update error:", err);
      }
    } catch (err) {
      alert("Update failed");
      console.error(err);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          {["firstName", "lastName", "email", "telephone", "password"].map(
            (field) => (
              <div key={field}>
                <label>
                  {field === "password"
                    ? "Set new password"
                    : field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  value={form[field]}
                  onChange={handleChange}
                />
              </div>
            )
          )}
          <label>Role</label>
          <select id="role" value={form.role} onChange={handleChange}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
