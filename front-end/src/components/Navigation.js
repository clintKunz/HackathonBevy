import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import NavigationSolicitsMenu from "./NavigationSolicitsMenu";

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
  justify-content: flex-end;
  align-items: center;
`;

export const Elements = styled(NavLink)`
  font-size: 1.6rem;
  font-family: ubuntu, sans-serif;
  text-decoration: none;
  color: black;
  margin-right: 15px; 
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
          <Route path="/solicits" render={props => <NavigationSolicitsMenu {...props} />} />
          <Elements to="/login">Sign In</Elements>
        </ElementsContainer>
      </Nav>
    );
  }
}

export default Navigation;
