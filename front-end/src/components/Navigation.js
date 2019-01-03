import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1.5px solid black;
  padding-bottom: -30px;
  margin-top: 15px;
  padding-bottom: 5px;
`;

const NavHeader = styled.p`
  margin-left: 18px;
  font-family: ubuntu;
  font-size: 2.9rem;
`;

const ElementsContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Elements = styled.div`
  font-size: 1.5rem;
  font-family: ubuntu;
  text-decoration: none;
  color: black;
  &:hover {
    color: grey;
  }
`;

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <NavHeader>BEVY</NavHeader>
        <ElementsContainer>
          <Elements>Filters</Elements>
          <Elements>Public View</Elements>
          <Elements>Search</Elements>
          <Elements>
            <NavLink to="/login">Sign In</NavLink>
          </Elements>
        </ElementsContainer>
      </Nav>
    );
  }
}

export default Navigation;
