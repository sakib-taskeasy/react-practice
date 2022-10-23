import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Protected from "../routes/Protected";
import Navigation from "../components/Navigation";
import Index from "../pages/index";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";

function RouteIndex() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <Navigation isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />} />
                <Route path="/register" element={<Register isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />} />
                {/*<Protected path="/dashboard" element={<Dashboard />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default RouteIndex;