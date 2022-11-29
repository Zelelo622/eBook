import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createBook } from '../../http/bookAPI'


const CreateBook = ({ show, onHide }) => {
    const [title, setTitle] = useState('');
    const [publication_date, setPublicationDate] = useState('');
    const [text, setText] = useState('')

    const addBook = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('publication_date', publication_date);
        formData.append('text', text);
        createBook(formData).then(data => onHide());
        window.location.reload(false);
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить книгу
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Control className='mb-2' onChange={e => setTitle(e.target.value)} placeholder={"Введите название..."}></Form.Control>
                    <Form.Control className='mb-2' type='date' onChange={e => setPublicationDate(e.target.value)} placeholder={"Введите дату публикации..."}></Form.Control>
                    <Form.Control as='textarea' rows={3} onChange={e => setText(e.target.value)} placeholder={"Введите текст..."}></Form.Control>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBook}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateBook;
