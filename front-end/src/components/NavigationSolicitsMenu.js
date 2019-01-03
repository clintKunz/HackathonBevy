import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Elements } from './Navigation';

class NavigationSolicitsMenu extends Component {

    render() {
        return (
            <>
            <Elements to="/filter">Filters</Elements>
            <Elements to="/public">Public View</Elements>
            <Elements to="/search">Search</Elements>
            </>
        );
    }
}

export default NavigationSolicitsMenu;