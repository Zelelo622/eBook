import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import CreateAuthor from "../components/modals/CreateAuthor"

const Admin = () => {
    const [authorVisible, setAuthorVisible] = useState(false);
    return (
        <Container>
            <div>
                <h2>Авторы</h2>
                <div className="d-flex align-items-center">
                    <Button variant={"outline-dark"} className="mt-4 p-2 me-5" style={{ borderRadius: '10px' }} onClick={() => setAuthorVisible(true)}>Добавить Автора</Button>
                    <NavLink className="mt-4 p-2 border border-dark link-dark" style={{ borderRadius: '10px' }} href="/author">Список Авторов</NavLink>
                </div>
            </div>

            <CreateAuthor show={authorVisible} onHide={() => setAuthorVisible(false)} />
        </Container>
    );
};

export default Admin;