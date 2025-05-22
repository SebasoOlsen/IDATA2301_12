// File: `IDATA2301_12/src/components/common/Header.jsx`
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/common/global.css";
import "../../assets/css/common/header.css";
import UserDropdown from "../UserDropdown.jsx";
/**
 * Header component for creating big bar on top of page
 *
 * Creates the application logo, title, a discover button, and a user with a dropdown menu.
 * Provides navigation links and user account access at the top of the application.
 *
 * @component
 * @returns {JSX.Element} The header UI for the application.
 */
export default function Header() {

    return (
        <header className="header">
            <div className="header-left">
                <a href="/">
                    <img
                        src="/images/StayFinder-logo.jpg"
                        alt="Stay Finder Logo"
                        className="logo-img"
                    />
                </a>
            </div>
            <div className="header-center">
                <span className="header-title">Stay Finder</span>
            </div>
            <div className="header-right">
                <a href="/" className="discover-btn">
                    <i className="fa-solid fa-earth-americas"></i>
                </a>
                <UserDropdown/>
            </div>
        </header>
    );
}