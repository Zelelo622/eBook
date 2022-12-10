import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { fetchBookOne } from "../../http/bookAPI";
import "bootstrap/dist/css/bootstrap.min.css";

import withNavigateHook from "../withNavigateHook";

export class BookRead extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.params.id,
      title: "",
      publication_date: "",
      text: "",
      author: "",
    };

    console.log(this.state.book)
  }

  componentDidMount() {
    fetchBookOne(this.state.id).then((res) => {
      let book = res;
      this.setState({
        title: book.title,
        publication_date: book.publication_date,
        text: book.text,
        author: book.author,
      });
    });
  }

  render() {
    return (
      <div>
        <Container>
          <h2 className="text-center">{this.state.title}</h2>
          <div className="mt-5">
            <div className="d-flex flex-column bd-highlight gap-2">
              <p className="my-1">{this.state.text}</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withNavigateHook(BookRead);
