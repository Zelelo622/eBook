import React, { Component } from "react";
import { fetchAuthorOne, updateAuthor } from "../../http/bookAPI";
import withNavigateHook from "../withNavigateHook";

class UpdateAuthorComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.params.id,
      first_name: "",
      last_name: ""
    };

    this.changeFirstNameHandler =
      this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.updateAuthorFun = this.updateAuthorFun.bind(this);
  }

  componentDidMount() {
    fetchAuthorOne(this.state.id).then(
      (res) => {
        let author = res;
        this.setState({
          first_name: author.first_name,
          last_name: author.last_name,
        });
      }
    );
  }

  updateAuthorFun = (e) => {
    e.preventDefault();
    let author = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    };
    console.log("author => " + JSON.stringify(author));
    console.log("id => " + JSON.stringify(this.state.id));
    updateAuthor(
      author,
      this.state.id
    ).then((res) => {
      this.props.navigation("/author");
    });
  };

  changeFirstNameHandler = (event) => {
    this.setState({ first_name: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ last_name: event.target.value });
  };

  cancel() {
    this.props.navigation("/author");
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center mt-2">Обновление автора</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="mb-1"> Имя автора: </label>
                    <input
                      placeholder="имя..."
                      name="first_name"
                      className="form-control mb-2"
                      value={this.state.first_name}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1"> Фамилия автора: </label>
                    <input
                      placeholder="фамилия..."
                      name="last_name"
                      className="form-control mb-2"
                      value={this.state.last_name}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-success"
                      onClick={this.updateAuthorFun}
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

export default withNavigateHook(UpdateAuthorComponent);