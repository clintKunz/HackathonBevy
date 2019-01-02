import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import Navigation from './components/Navigation';

const Container = styled.div`
  max-width: 500px; 
  margin: 0 auto; 
  height: 100vh; 
  border: 1px solid red; 
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Navigation />
      </Container>
    );
  }
}

export default App;
