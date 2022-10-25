import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css';

import Protected from "../routes/Protected";
import Navigation from "../components/Navigation";
import Index from "../pages/index";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";
import ErrorPage from "../pages/404";
import Logout from "../pages/logout";

function RouteIndex() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <Navigation isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />} />
                <Route path="/register" element={<Register isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/dashboard" element={<Protected isLoggedIn = {isLoggedIn}><Dashboard /></Protected>} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteIndex;