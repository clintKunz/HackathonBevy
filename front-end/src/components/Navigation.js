import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavigationSolicitsMenu from "./NavigationSolicitsMenu";
import { connect } from "react-redux";
import actions from '../actions';
const {logout} = actions;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1.5px solid black;
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 100;
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
`;

const FilterMenu = styled.div`
  .hide {
    display: none;
  }
`;

class Navigation extends Component {
  filterDropDown = e => {
    console.log(e.target.ChildNode.innerHTML);
    //e.target.child.classList.toggle('hide');
  };

  render() {
    if (!this.props.isLoggedIn)
      return (
        <Nav>
          <NavHeader>
            <Elements to="/login">Sign In</Elements>
          </NavHeader>
          <ElementsContainer>
            <Elements to="/solicits">Public View</Elements>
          </ElementsContainer>
        </Nav>
      );
    return (
      <Nav>
        <NavHeader>
          <Elements style={{fontSize: '3rem'}} to="/solicits">BEVY</Elements>
        </NavHeader>
        <ElementsContainer>
          <NavigationSolicitsMenu />
          <Elements to="/login" onClick={() => this.props.logout()}>Log Out</Elements>
        </ElementsContainer>
      </Nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.session.isLoggedIn,
  };
};

export default connect(mapStateToProps, { logout })(Navigation);
