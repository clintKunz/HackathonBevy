import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../images/Logo.png";
import actions from '../actions';
const { register } = actions;

const StyledSignUpComp = styled.div`
  font-family: sans-serif;
  font-size: 1.6rem;
  width: 28rem; 
  position: relative; 
  top: 50%;
  left: 50%;
  color: #d1e7df;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  .logo {
    border: 2px solid #5abd9a;
    width: 50%;
  }
  h1 {
    font-size: 5rem;
    border-bottom: 2px solid #5abd9a;
    margin-bottom: 3rem;
    padding: 1.2rem 0;
  }
  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 3rem;
      padding: 1rem 0;
      margin: 1rem 0;
    }
    .map-pin {
      margin-left: 0.7rem;
    }
    input {
      outline: none;
      border: none;
      color: #5abd9a;
      background: none;
      font-size: 2rem;
      margin: 0 10px;
      width: 80%;
      border-bottom: 2px solid #5abd9a;
    }
    input:focus {
      border-bottom: 2px solid #d1e7df;
    }
    input::placeholder {
      color: #eee;
    }
    .sign-up-btn {
      margin: 2rem auto 3rem auto;
      padding: 0.5rem 0;
      background: none;
      width: 50%;
      transition: all 0.3s 0.3s ease-in-out;
      position: relative;
      border: 1px solid #5abd9a;
      outline: 0;
      color: white;
      cursor: pointer;
      span {
        position: relative;
        z-index: 10;
        border: none;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background: #5abd9a;
        transform: scaleY(0);
        transition: transform 0.3s, width 0.3s cubic-bezier(1, 0, 0, 1) 0.3s,
          background-color 0.2s;
      }
      &:hover::before {
        transform: scaleY(1);
        width: 100%;
      }
    }
  }
  .log-in-btn {
    text-decoration: none;
    border-bottom: 1px solid #5abd9a;
    color: #5abd9a;
  }
`;
class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      zipCode: "",
      creditScore: "",
      loading: false
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        loading: !this.state.loading
      },
      () => {
        const newUser = this.state;
        console.log("loading!!");
        this.props.register(newUser);
      }
    );
  };

  render() {
    return (
      <StyledSignUpComp>
        <img src={Logo} alt="logo" className="logo" />
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <FontAwesomeIcon icon="user" />
            <input
              name="username"
              type="username"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={this.handleInputChange}
              autocomplete="off"
              required
            />
          </div>
          <div>
            <FontAwesomeIcon icon="key" />
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleInputChange}
              autocomplete="off"
              required
            />
          </div>

          <div>
            <FontAwesomeIcon icon="envelope" />
            <input
              type="text"
              placeholder="Enter E-mail"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              autocomplete="off"
              required
            />
          </div>

          <div>
            <FontAwesomeIcon icon="map-pin" className="map-pin" />
            <input
              type="text"
              placeholder="Enter Zip Code"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleInputChange}
              autocomplete="off"
              required
            />
          </div>
          <div>
            <FontAwesomeIcon icon="credit-card" />
            <input
              type="text"
              placeholder="Enter Credit Score"
              name="creditScore"
              value={this.state.creditScore}
              onChange={this.handleInputChange}
              autocomplete="off"
            />
          </div>
          <button className="sign-up-btn" type="submit">
            <span>{this.state.loading ? "Loading" : "Sign Up"}</span>
          </button>
        </form>
        <Link className="log-in-btn" to="/login">
          Click here to log in
        </Link>
      </StyledSignUpComp>
    );
  }
}

export default connect(null, { register })(SignUpForm);
