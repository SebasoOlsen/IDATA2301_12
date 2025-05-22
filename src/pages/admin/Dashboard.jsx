import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/common/global.css";
import "../../assets/css/admin/dashboard.css";
/**
 * Admin Dashboard page for navigation between admin sections.
 *
 * Displays a list of links to admin features such as user management and analytics.
 * Provides a simple entry point for administrators to access different admin tools.
 *
 * @component
 * @returns {JSX.Element} The rendered admin dashboard page.
 */
const links = [
  { name: "User Management", path: "/admin/users" },
  { name: "Analytics", path: "/analytics" },
];

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <ul className="dashboard-link-list">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
