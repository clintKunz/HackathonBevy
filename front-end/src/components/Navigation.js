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
  color: white; 
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
  color: grey;
  &:hover {
    color: grey;
  }
`;

const FilterMenu = styled.div`
  .hide {
    display: none; 
  }
`;

class Navigation extends Component {
  filterDropDown = (e) => {
    console.log(e.target.ChildNode.innerHTML);
    //e.target.child.classList.toggle('hide');
  };
  
  render() {
    return (
      <Nav>
        <NavHeader>
          <NavLink to="/solicits">BEVY</NavLink>
        </NavHeader>
        <ElementsContainer>
          <Elements onClick={this.filterDropDown}>
            Filters
            <FilterMenu className="hide">Loan Amount (Low to High)</FilterMenu>
          </Elements>
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
