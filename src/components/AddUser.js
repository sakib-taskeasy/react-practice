import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

function AddUser ({setUser}) {
    const [userInfo, setUserInfo] = useState({fullName:'', email:'', password:''});
    const handleAddUser = ()=> {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        setUser(userInfo)
    }
    return (
        <Form className="pb-5">
            <Row>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="fullname">
                    <Form.Label column sm={2} className="text-start text-muted">Full Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control className="bg-transparent py-3 text-light border-secondary"
                                      type="text"
                                      name="fullName"
                                      placeholder="full name"
                                      value={userInfo.fullName}
                                      onChange={(e)=> {setUserInfo({...userInfo, [e.target.name]:e.target.value})}}
                                      required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="email">
                    <Form.Label column sm={2} className="text-start text-muted">Email</Form.Label>
                    <Col sm={10}>
                        <Form.Control className="bg-transparent py-3 text-light border-secondary"
                                      type="email"
                                      name="email"
                                      placeholder="Enter email"
                                      value={userInfo.email} onChange={(e)=> {setUserInfo({...userInfo, [e.target.name]:e.target.value})}}
                                      required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="password">
                    <Form.Label column sm={2} className="text-start text-muted">Password</Form.Label>
                    <Col sm={10}>
                        <Form.Control className="bg-transparent py-3 text-light border-secondary"
                                      type="password"
                                      name="password"
                                      placeholder="Password"
                                      value={userInfo.password} onChange={(e)=> {setUserInfo({...userInfo, [e.target.name]:e.target.value})}}
                                      required
                        />
                    </Col>
                </Form.Group>
            </Row>

            <Button className="fw-bold text-uppercase"
                    variant="success"
                    onClick={handleAddUser}>
                Add User
            </Button>
        </Form>
    )
}

export default AddUser;