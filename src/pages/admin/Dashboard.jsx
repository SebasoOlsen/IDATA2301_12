import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/common/global.css";
import "../../assets/css/admin/dashboard.css";

const links = [
  { name: "User Management", path: "/admin/users" },
    { name: "Hotel Management", path: "/admin/hotels" },
    { name: "Add New Listing", path: "/admin/create-new-listing" },
    { name: "Add New Provider", path: "/admin/create-new-provider" },
    { name: "Add New Hotel", path: "/admin/add-new-hotel" },
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
