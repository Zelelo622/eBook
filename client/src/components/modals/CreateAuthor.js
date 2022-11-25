import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createAuthor } from '../../http/bookAPI'


const CreateAuthor = ({ show, onHide }) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');

    const addAuthor = () => {
        const formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        createAuthor(formData).then(data => onHide());
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить автора
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Control className='mb-2' onChange={e => setFirstName(e.target.value)} placeholder={"Введите имя..."}></Form.Control>
                    <Form.Control onChange={e => setLastName(e.target.value)} placeholder={"Введите фамилию..."}></Form.Control>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addAuthor}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateAuthor;
