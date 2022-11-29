import React from "react";
import { Container, NavLink } from "react-bootstrap";

const Admin = () => {
    return (
        <Container>
            <div>
                <h2>Авторы</h2>
                <div className="d-flex align-items-center">
                    <NavLink className="mt-4 p-2 border border-dark link-dark" style={{ borderRadius: '10px' }} href="/author">Список Авторов</NavLink>
                    <NavLink className="mt-4 mx-2 p-2 border border-dark link-dark" style={{ borderRadius: '10px' }} href="/book">Список Книг</NavLink>
                </div>
            </div>
        </Container>
    );
};

export default Admin;