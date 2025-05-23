import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function AdminRoute({ children }) {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("AdminRoute: useEffect triggered.");
        console.log("Current user state:", user);

        if (user !== undefined) {
            if (!user) {
                console.log("User is null. Redirecting to /login.");
                navigate("/login");
            } else if (user.role !== "ADMIN") {
                console.log(`User role is ${user.role}. ADMIN is required. Redirecting to /login.`);
                navigate("/login");
            } else {
                console.log("User is an ADMIN. Access granted.");
            }
        } else {
            console.log("User is still undefined (loading state).");
        }
    }, [user, navigate]);

    if (user === undefined) {
        console.log("User is still loading. Rendering loading screen.");
        return <div>Loading...</div>;
    }

    return children;
}