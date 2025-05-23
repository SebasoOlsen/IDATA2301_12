// File: `IDATA2301_12/src/components/common/AdminIcon.jsx`
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../components/UserContext";
import "../assets/css/common/header.css";

export default function AdminIcon() {
    const userContext = useContext(UserContext);
    console.log(userContext);

    if (!userContext) {
        return null;
    }

    const { user } = userContext;

    // Adjust the role check to match uppercase "ADMIN"
    if (!user || user.role !== "ADMIN") {
        return null;
    }

    return (
        <Link to="/admin/dashboard" className="discover-btn">
            <i className="fa-solid fa-user-shield"></i>
        </Link>
    );
}