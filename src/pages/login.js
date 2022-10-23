import React, {useState} from "react";
import {Button, Container, FloatingLabel, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

import {setIsLoggedIn} from '../components/Navigation'

function Login ({isLoggedIn, setIsLoggedIn}) {
    return  (
        <div className="d-flex flex-column align-items-center mt-5">
            <h2>This is Login Page</h2>
            <Button className="fw-bold text-uppercase"
                    as={Link} to="/Dashboard"
                    variant="success"
                    onClick={() => {setIsLoggedIn(true)}}>
                Log In
            </Button>
        </div>
        // <Container>
        //     <Form>
        //         <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        //             <Form.Control type="email" placeholder="name@example.com" required/>
        //         </FloatingLabel>
        //         <FloatingLabel controlId="floatingPassword" label="Password">
        //             <Form.Control type="password" placeholder="Password" required/>
        //         </FloatingLabel>
        //         <Button type="submit">Log In</Button>
        //     </Form>
        // </Container>
    )
}

export default Login;