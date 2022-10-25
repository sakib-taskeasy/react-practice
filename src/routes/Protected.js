import React from "react";
import { Navigate } from "react-router-dom";

function Protected ({isLoggedIn, children}) {
    if (!isLoggedIn) {
        return (
            <Navigate to="/login" replace />
        )
    }
    return children;

}

export default Protected;