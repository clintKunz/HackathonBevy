import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1.5px solid black;
  padding-bottom: -30px;
`;

const NavHeader = styled.p`
  margin-left: 18px;
  font-family: ubuntu;
  font-size: 28px;
`;

const ElementsContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Elements = styled.a`
  font-size: 15px;
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
          <Elements href="#">Filters</Elements>
          <Elements href="#">Public View</Elements>
          <Elements href="#">Search</Elements>
          <Elements href="#">Sign In</Elements>
        </ElementsContainer>
      </Nav>
    );
  }
}

export default Navigation;
