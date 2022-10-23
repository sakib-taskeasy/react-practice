import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";

function Navigation (props) {
    const {isLoggedIn, setIsLoggedIn} = props;
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">React App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    {isLoggedIn ? <Nav.Link as={Link} to="/logout" onClick={() => {setIsLoggedIn(false)}}>Logout</Nav.Link>
                        :
                        <div className="d-flex">
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        </div>
                    }
                    <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;