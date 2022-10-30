import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

import "./Navigation.css";

function Navigation (props) {
    const {isLoggedIn, setIsLoggedIn} = props;
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">React App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    {/*{isLoggedIn ? <Nav.Link as={Link} to="/logout" onClick={() => {setIsLoggedIn(false)}}>Logout</Nav.Link>*/}
                    {/*    :*/}
                    {/*    <>*/}
                    {/*        <Nav.Link as={Link} to="/login">Login</Nav.Link>*/}
                    {/*        <Nav.Link as={Link} to="/register">Register</Nav.Link>*/}
                    {/*    </>*/}
                    {/*}*/}
                    {/*<Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>*/}
                    <Nav.Link as={Link} to="/users">Users</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;