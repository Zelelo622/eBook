import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { fetchBook, deleteBook } from "../../http/bookAPI";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateBook from "../modals/CreateBook";

import withNavigateHook from "../withNavigateHook";

export class ListBookElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: [],
      bookVisible: false,
    };
    this.editBook = this.editBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    // ---
    fetchBook().then((res) => {
      this.setState({ book: res });
    });
    // ---
  }

  deleteBook(id) {
    deleteBook(id).then((res) => {
      this.setState({
        book: this.state.book.filter((book) => book.id !== id),
      });
    });
  }

  editBook(id) {
    this.props.navigation(`/update-book/${id}`);
  }

  render() {
    console.log(this.state.book);
    return (
      <div>
        <Container>
          <h2 className="text-center">Список Книг</h2>
          <Button
            variant={"outline-dark"}
            className="d-grid gap-2 col-6 mx-auto mb-3 mt-4"
            style={{ borderRadius: "10px" }}
            onClick={() => this.setState({ bookVisible: true })}
          >
            Добавить Книгу
          </Button>
          <CreateBook
            show={this.state.bookVisible}
            onHide={() => this.setState({ bookVisible: false })}
          />
          <div className="row">
            <table className="table table-bordered">
              <thead className="text-center table-light">
                <tr>
                  <th> Название</th>
                  <th> Дата публикации</th>
                  <th> Автор</th>
                  <th> Функции</th>
                </tr>
              </thead>
              <tbody className="text-center table-light">
                {this.state.book.map((book) => (
                  <tr key={book.id}>
                    <td> {book.title} </td>
                    <td> {book.publication_date.substr(0, 10)}</td>
                    <td> {book.author}</td>
                    <td>
                      <button
                        onClick={() => this.editBook(book.id)}
                        className="btn btn-outline-warning"
                      >
                        Update{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.deleteBook(book.id)}
                        className="btn btn-outline-danger"
                      >
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    );
  }
}

export default withNavigateHook(ListBookElement);
