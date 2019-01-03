import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex; 
    justify-content: space-between;
    width: 100%; 
    border: 1px solid green; 
`;

const SignIn = styled.div`
    font-size: 16px; 

`;

class Navigation extends Component {

    render() {
        return (
            <Nav>
                <h1>Bevy</h1>
                <SignIn>Sign In</SignIn>
            </Nav>
        );
    }
}

export default Navigation;