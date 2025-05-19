// File: `IDATA2301_12/src/components/common/Header.jsx`
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/common/global.css";
import "../../assets/css/common/header.css";
import UserDropdown from "../UserDropdown.jsx";

export default function Header() {
    const navigate = useNavigate();
    const handleMyAccountClick = (e) => {
        e.preventDefault();
        fetch("/isLoggedIn", { credentials: "same-origin" })
            .then((response) => {
                if (response.ok) {
                    navigate("/my-page");
                } else {
                    navigate("/login");
                }
            })
            .catch((error) => {
                console.error("Error checking login status:", error);
                navigate("/login");
            });
    };

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