import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/UserDropdown.css";
/**
 * UserDropdown component for displaying a user menu.
 *
 * Shows a dropdown with account options if the user is logged in.
 * Handles login status, navigation, and logout.
 *
 * @component
 * @returns {JSX.Element} The user dropdown menu UI.
 */
export default function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        console.log("User icon clicked, checking login status...");
        fetch("/api/login/public/isLoggedIn", { credentials: "same-origin" })
            .then((response) => response.json())
            .then((data) => {
                console.log("Response loggedIn value:", data.loggedIn);
                setIsLoggedIn(data.loggedIn);
                if (!data.loggedIn) {
                    console.log("User not logged in. Redirecting to login.");
                    navigate("/login");
                } else {
                    console.log("User is logged in. Toggling dropdown.");
                    setIsOpen(!isOpen);
                }
            })
            .catch((error) => {
                console.error("Error checking login status:", error);
            });
    };

    const handleMenuItemClick = (route) => {
        console.log("Navigating to route:", route);
        setIsOpen(false);
        navigate(route);
    };

    const handleLogout = () => {
        console.log("Initiating logout process.");
        fetch("/api/login/account/logout", {
            method: "POST",
            credentials: "same-origin",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Logout successful, server response:", data);
                if (data.redirect) {
                    setIsLoggedIn(false);
                    setIsOpen(false);
                    navigate(data.redirect);
                }
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };

    return (
        <div className="user-dropdown-container" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="user-dropdown-button">
                <img src="/images/user-icon.png" alt="User Icon" className="user-icon" />
            </button>
            {isOpen && isLoggedIn && (
                <div className="dropdown-menu">
                    <div className="dropdown-header">
                        <div className="user-avatar">
                            <div className="user-initial">
                                {userName ? userName.charAt(0).toUpperCase() : "U"}
                            </div>
                        </div>
                        <div className="user-info">
                            <div className="user-name">{userName || "User"}</div>
                        </div>
                    </div>
                    <ul className="dropdown-items">
                        <li onClick={() => handleMenuItemClick("/my-page")}>
                            <i className="fa-regular fa-user"></i>
                            <span>My account</span>
                        </li>
                        <li onClick={() => handleMenuItemClick("/favourites")}>
                            <i className="fa-regular fa-heart"></i>
                            <span>Saved</span>
                        </li>
                    </ul>
                    <div className="dropdown-footer">
                        <button onClick={handleLogout} className="logout-button">
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <span>Sign out</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}