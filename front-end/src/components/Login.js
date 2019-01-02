import React from "react";
import { Link, NavLink } from "react-router-dom";
// import axios from "axios";
import styled from "styled-components";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledLoginComp = styled.div`
  font-family: sans-serif;
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  color: black;
  transform: translate(-50%, -50%);
  text-align: center;
  h1 {
    font-size: 36px;
    border-bottom: 2px solid black;
    // border-radius: 3%;
    margin-bottom: 30px;
    padding: 12px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      width: 100%;
      font-size: 20px;
      padding: 10px 0;
      margin: 10px 0;
      border-bottom: 2px solid black;
    }
    input {
      outline: none;
      border: none;
      color: black;
      background: none;
      font-size: 20px;
      margin: 0 10px;
    }
    .login-btn {
      margin: 20px auto 30px auto;
      border: 1px solid black;
      background: none;
      width: 50%;
      transition: all 0.3s 0.3s ease-in-out;
      position: relative;
      span {
        position: relative;
        z-index: 10;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background: black;
        transform: scaleY(0);
        transition: transform 0.3s, width 0.3s cubic-bezier(1, 0, 0, 1) 0.3s,
          background-color 0.2s;
      }
      &:hover::before {
        transform: scaleY(1);
        width: 100%;
      }
      &:hover {
        color: white;
      }
    }
  }
  .sign-up-btn {
    text-decoration: none;
    border-bottom: 1px solid black;
    color: black;
  }
`;

class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSumbmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log("submitting");
    //axios calls here
  };
  render() {
    return (
      <StyledLoginComp>
        <h1>Bevy</h1>
        <form onSubmit={this.handleSumbmit}>
          <div>
            <FontAwesomeIcon icon="envelope" />
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              autoComplete="off"
              autoFocus
            />
          </div>
          <div>
            <FontAwesomeIcon icon="key" />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              autoComplete="off"
            />
          </div>
          <button className="login-btn" type="submit">
            <span>Log In</span>
          </button>
        </form>
        <Link className="sign-up-btn" to="/signup">
          Click Here To Sign Up
        </Link>
      </StyledLoginComp>
    );
  }
}

export default LogIn;
