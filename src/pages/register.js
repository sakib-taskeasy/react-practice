import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Register ({isLoggedIn, setIsLoggedIn}) {
    return  (
        <div className="d-flex flex-column align-items-center mt-5">
            <h2>This is Register Page</h2>
            <Button
                className="fw-bold text-uppercase"
                as={Link} to="/Dashboard"
                variant="success"
                onClick={() => {setIsLoggedIn(true)}}>
                Register
            </Button>
        </div>
    )
}

export default Register;