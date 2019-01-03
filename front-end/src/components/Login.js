import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";

// import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//custom css
import "./landingPage.css";
import actions from '../actions';
const { login } = actions;

const StyledLoginComp = styled.div`
  font-family: sans-serif;
  font-size: 1.6rem;
  width: 28rem;
  position: absolute;
  top: 50%;
  left: 50%;
  color: #d1e7df;
  transform: translate(-50%, -50%);
  text-align: center;
  background: transparent;
  z-index: 2;
  .logo {
    width: 50%;
    border: 3px solid #5abd9a;
    margin-bottom: 2rem;
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
      border-bottom: 2px solid #5abd9a;
    }
    input::placeholder {
      color: #eee;
    }

    .log-in-btn {
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
  .sign-up-btn {
    text-decoration: none;
    border-bottom: 1px solid #5abd9a;
    color: #5abd9a;
  }
`;

class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSumbmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log("submitting");
    this.props.login(email, password);
    //axios calls here
  };
  render() {
    return (
      <StyledLoginComp>
        <img src={Logo} alt="logo" className="logo" />
        <form onSubmit={this.handleSumbmit}>
          <div>
            <FontAwesomeIcon icon="envelope" />
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
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
          <button className="log-in-btn" type="submit">
            <span>{this.state.loading ? "Loading" : "Log In"}</span>
          </button>
        </form>
        <Link className="sign-up-btn" to="/signup">
          Click Here To Sign Up
        </Link>
      </StyledLoginComp>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.session.isLoggedIn,
  }
}

export default connect(mapStateToProps, {login})(LogIn);
