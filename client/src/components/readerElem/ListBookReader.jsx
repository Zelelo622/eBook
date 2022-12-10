import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import { fetchBook } from "../../http/bookAPI";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateBook from "../modals/CreateBook";

import withNavigateHook from "../withNavigateHook";

export class ListBookReader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: [],
      bookVisible: false,
      inputText: "",
    };
    // ---
    fetchBook().then((res) => {
      this.setState({ book: res });
    });
    // ---
  }

  inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    this.setState({ inputText: lowerCase });
  };

  readBook(id) {
    this.props.navigation(`/book/${id}`);
  }

  render() {
    return (
      <div>
        <Container>
          <div class="input-group">
            <span class="input-group-text">Поиск книг</span>
            <input
              className="form-control"
              type="text"
              id="outline-basic"
              onChange={this.inputHandler}
              value={this.state.inputText}
            />
          </div>

          <h2 className="text-center">Книги</h2>
          <div className="mt-5">
            <div className="d-flex flex-column bd-highlight gap-2">
              {this.state.book
                .filter((book) => {
                  if (this.state.inputText === "") {
                    return book;
                  } else {
                    return book.title
                      .toLowerCase()
                      .includes(this.state.inputText.toLowerCase());
                  }
                })
                .map((book) => (
                  <Nav.Link
                    key={book.id}
                    className="p-2 bg-light border text-decoration-none text-dark"
                    onClick={() => this.readBook(book.id)}
                  >
                    <span className="link-questionnaire__text">
                      <span className="link-questionnaire__title">
                        {book.title}
                      </span>
                    </span>
                  </Nav.Link>
                ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withNavigateHook(ListBookReader);
