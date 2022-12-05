import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createBook, fetchAuthor } from '../../http/bookAPI'


const CreateBook = ({ show, onHide }) => {
    const [title, setTitle] = useState('');
    const [publication_date, setPublicationDate] = useState('');
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    let authorList = [];
    authorList = fetchAuthor();
    // console.log(authorList);

    const addBook = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('publication_date', publication_date);
        formData.append('text', text);
        formData.append('author', author);
        authorList.then((ath) => {
            ath.map(({last_name}) => {
                if (author === last_name) {
                    // TODO добавить роутер для bookAuthor и создать id
                }
            });
        })
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
                    <Form.Control className='mb-2' as='textarea' onChange={e => setText(e.target.value)} placeholder={"Введите текст..."}></Form.Control>
                    <Form.Control rows={4} onChange={e => setAuthor(e.target.value)} placeholder={"Введите автора..."}></Form.Control>
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
