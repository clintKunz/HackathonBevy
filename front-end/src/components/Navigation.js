import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1.5px solid black;
<<<<<<< HEAD
  padding-bottom: -30px;
  margin-top: 15px;
  padding-bottom: 5px;
  color: white; 
=======
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 2;
  background: #5abd9a;
  padding: 1rem 0;
>>>>>>> 0e6dccf235808eaedff5d17a38445f355830a30b
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
  color: grey;
  &:hover {
    color: grey;
  }
  &.active {
    border-bottom: 2px solid #0e0e0e;
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
<<<<<<< HEAD
          <Elements onClick={this.filterDropDown}>
            Filters
            <FilterMenu className="hide">Loan Amount (Low to High)</FilterMenu>
          </Elements>
          <Elements>Public View</Elements>
          <Elements>Search</Elements>
          <Elements>
            <NavLink to="/login">Sign In</NavLink>
          </Elements>
=======
          <Elements to="/filter">Filters</Elements>
          <Elements to="/public">Public View</Elements>
          <Elements to="/search">Search</Elements>
          <Elements to="/login">Sign In</Elements>
>>>>>>> 0e6dccf235808eaedff5d17a38445f355830a30b
        </ElementsContainer>
      </Nav>
    );
  }
}

export default Navigation;
