import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Elements } from "./Navigation";
class NavigationSolicitsMenu extends Component {
  render() {
    return (
      <>
        <Elements to="/solicits/public">Public View</Elements>
        <Elements to="/profile">View Profile</Elements>
      </>
    );
  }
}

export default NavigationSolicitsMenu;
