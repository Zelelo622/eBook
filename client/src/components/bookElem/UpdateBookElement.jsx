import React, { Component } from "react";
import { fetchBookOne, updateBook } from "../../http/bookAPI";
import withNavigateHook from "../withNavigateHook";

class UpdateBookComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.params.id,
      title: "",
      publication_date: "",
      text: "",
      author: "",
    };

    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changePublicationDateHandler = this.changePublicationDateHandler.bind(
      this
    );
    this.changeTextHandler = this.changeTextHandler.bind(this);
    this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
    this.updateBookFun = this.updateBookFun.bind(this);
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

  updateBookFun = (e) => {
    e.preventDefault();
    let book = {
      title: this.state.title,
      publication_date: this.state.publication_date,
      text: this.state.text,
      author: this.state.author,
    };
    console.log("book => " + JSON.stringify(book));
    console.log("id => " + JSON.stringify(this.state.id));
    updateBook(book, this.state.id).then((res) => {
      this.props.navigation("/book");
    });
  };

  changeTitleHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  changePublicationDateHandler = (event) => {
    this.setState({ publication_date: event.target.value });
  };

  changeTextHandler = (event) => {
    this.setState({ text: event.target.value });
  };

  changeAuthorHandler = (event) => {
    this.setState({author: event.target.value});
  }

  cancel() {
    this.props.navigation("/book");
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center mt-2">Обновление Книги</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="mb-1"> Название книги: </label>
                    <input
                      placeholder="название..."
                      name="title"
                      className="form-control mb-2"
                      value={this.state.title}
                      onChange={this.changeTitleHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1"> Дата публикации: </label>
                    <input
                      type="date"
                      name="publicationDate"
                      className="form-control mb-2"
                      value={this.state.publication_date.substring(0, 10)}
                      onChange={this.changePublicationDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1"> Текст: </label>
                    <textarea
                      name="text"
                      className="form-control mb-2"
                      value={this.state.text}
                      onChange={this.changeTextHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1"> Автор: </label>
                    <input
                      name="author"
                      className="form-control mb-2"
                      value={this.state.author}
                      onChange={this.changeAuthorHandler}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-success"
                      onClick={this.updateBookFun}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withNavigateHook(UpdateBookComponent);
