import {Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";

function UserTable ({updatedUser}) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>{updatedUser.fullName}</td>
                <td>{updatedUser.email}</td>
            </tr>
            </tbody>
        </Table>
    )
}

export default UserTable;