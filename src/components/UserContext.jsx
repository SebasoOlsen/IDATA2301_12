// File: `IDATA2301_12/src/components/UserContext.jsx`
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
    console.log("UserProvider rendered");
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log("Fetching user status from /api/login/public/isLoggedIn...");
        const fetchUserStatus = async () => {
            try {
                const response = await axios.get("/api/login/public/isLoggedIn");
                console.log("Full server response:", response);
                const data = response.data;
                console.log("Parsed data:", data);

                if (data.loggedIn) {
                    console.log("User is logged in. Email:", data.email, "Role:", data.role);
                    setUser({ email: data.email, role: data.role });
                } else {
                    console.log("User is not logged in.");
                    setUser(null);
                }
            } catch (error) {
                console.error("Error checking login status:", error);
                setUser(null);
            }
        };

        fetchUserStatus();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}