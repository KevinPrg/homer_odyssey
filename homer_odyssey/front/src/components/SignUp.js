import React, { Component } from "react";
import "../style/signup.css";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      lastname: ""
    };
  }

  updateEmailField = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(JSON.stringify(this.state, 1, 1));
  };

  render() {
    return (
      <div className="container">
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="contain">
            email:
            <input type="email" name="email" onChange={this.updateEmailField} />
          </div>
          <div className="contain">
            password:
            <input
              type="password"
              name="password"
              onChange={this.updateEmailField}
            />
          </div>
          <div className="contain">
            repeat password:
            <input type="password" name="passwordBis" />
          </div>
          <div className="contain">
            name:
            <input type="text" name="name" onChange={this.updateEmailField} />
          </div>
          <div className="contain">
            lastname:
            <input
              type="text"
              name="lastname"
              onChange={this.updateEmailField}
            />
          </div>
          <div className="contain">
            <input type="submit" value="Soumettre" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
