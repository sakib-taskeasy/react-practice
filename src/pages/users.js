import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import UserTable from "../components/UserTable";
import AddUser from "../components/AddUser";

function Users () {
    const [user, setUser] = useState({});
    const [updatedUser, setUpdatedUser] = useState({});
    useEffect(() => {
        const localUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        setUpdatedUser(localUserInfo)
    }, [user])
    return  (
        <Container className="py-5">
            <AddUser setUser={setUser} />
            <UserTable updatedUser={updatedUser} />
        </Container>
    )
}

export default Users;