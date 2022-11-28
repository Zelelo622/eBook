import React, { Component, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { fetchAuthor, deleteAuthor } from "../../http/bookAPI";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateAuthor from "../modals/CreateAuthor"

import withNavigateHook from "../withNavigateHook";

export class ListAuthorElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: [],
      authorVisible: false
    };
    this.editAuthor = this.editAuthor.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
    // ---
    fetchAuthor().then((res) => {
      this.setState({ author: res });
    });
    // ---
  }

  deleteAuthor(id) {
    deleteAuthor(id).then((res) => {
      this.setState({
        author: this.state.author.filter((author) => author.id !== id),
      });
    });
  }

  editAuthor(id) {
    this.props.navigation(`/update-author/${id}`);
  }

  render() {
    return (
      <div>
        <Container>
          <h2 className="text-center">Список Авторов</h2>
          <Button variant={"outline-dark"} className="d-grid gap-2 col-6 mx-auto mb-3 mt-4" style={{ borderRadius: '10px' }} onClick={() => this.setState({authorVisible: true})}>Добавить Автора</Button>
          <CreateAuthor show={this.state.authorVisible} onHide={() => this.setState({authorVisible: false})} />
          <div className="row">
            <table className="table table-bordered">
              <thead className="text-center table-light">
                <tr>
                  <th> Имя</th>
                  <th> Фамилия</th>
                  <th> Функции</th>
                </tr>
              </thead>
              <tbody className="text-center table-light">
                {this.state.author.map((author) => (
                  <tr key={author.id}>
                    <td> {author.first_name} </td>
                    <td> {author.last_name}</td>
                    <td>
                      <button
                        onClick={() => this.editAuthor(author.id)}
                        className="btn btn-outline-warning"
                      >
                        Update{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.deleteAuthor(author.id)}
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

export default withNavigateHook(ListAuthorElement);
