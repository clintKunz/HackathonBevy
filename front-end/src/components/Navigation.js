import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1.5px solid black;
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 2;
  background: #5abd9a;
  padding: 1rem 0;
`;

const NavHeader = styled.p`
  margin-left: 18px;
  font-family: sans-serif;
  font-size: 2.9rem;
`;

const ElementsContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Elements = styled(NavLink)`
  font-size: 1.6rem;
  font-family: ubuntu, sans-serif;
  text-decoration: none;
  color: black;
  &:hover {
    color: grey;
  }
  &.active {
    border-bottom: 2px solid #0e0e0e;
  }
`;

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <NavHeader>BEVY</NavHeader>
        <ElementsContainer>
          <Elements to="/filter">Filters</Elements>
          <Elements to="/public">Public View</Elements>
          <Elements to="/search">Search</Elements>
          <Elements to="/login">Sign In</Elements>
        </ElementsContainer>
      </Nav>
    );
  }
}

export default Navigation;
