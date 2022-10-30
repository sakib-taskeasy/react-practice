import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Register () {
    const [userInfo, setUserInfo] = useState({fullName:'', email:'', password:''});
    const handleRegister = ()=> {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
    return  (
        <Container className="col-12 col-md-6">
            <Form>
                <Row className="pt-5">
                    <Form.Group as={Row} className="mb-3 align-items-center" controlId="fullname">
                        <Form.Label column sm={2} className="text-start text-muted">Full Name</Form.Label>
                        <Col sm={10}>
                            <Form.Control className="bg-transparent py-3 text-light border-secondary" type="text" name="fullName" placeholder="full name" value={userInfo.fullName} onChange={(e)=> {setUserInfo({...userInfo, fullName:e.target.value})}} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 align-items-center" controlId="email">
                        <Form.Label column sm={2} className="text-start text-muted">Email</Form.Label>
                        <Col sm={10}>
                            <Form.Control className="bg-transparent py-3 text-light border-secondary" type="email" name="email" placeholder="Enter email" value={userInfo.email} onChange={(e)=> {setUserInfo({...userInfo, email:e.target.value})}} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 align-items-center" controlId="password">
                        <Form.Label column sm={2} className="text-start text-muted">Password</Form.Label>
                        <Col sm={10}>
                            <Form.Control className="bg-transparent py-3 text-light border-secondary" type="password" name="password" placeholder="Password" value={userInfo.password} onChange={(e)=> {setUserInfo({...userInfo, password:e.target.value})}} required/>
                        </Col>
                    </Form.Group>
                </Row>

                <Button className="fw-bold text-uppercase"
                        as={Link}
                        variant="success"
                        onClick={handleRegister}>
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export default Register;