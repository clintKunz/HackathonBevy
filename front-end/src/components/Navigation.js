import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex; 
    width: 100%; 
    border: 1px solid green; 
`;

class Navigation extends Component {

    render() {
        return (
            <Nav>
                <h1>Bevy</h1>
            </Nav>
        );
    }
}

export default Navigation;