import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Elements } from './Navigation';

class NavigationSolicitsMenu extends Component {

    render() {
        return (
            <>
            <Elements to="/solicits/filter">Filters</Elements>
            <Elements to="/solicits/public">Public View</Elements>
            <Elements to="/solicits/search">Search</Elements>
            </>
        );
    }
}

export default NavigationSolicitsMenu;