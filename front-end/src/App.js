import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

//components
import Navigation from "./components/Navigation";
import LogIn from "./components/Login.js";
library.add(faEnvelope, faKey);
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  border: 1px solid red;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Route exact path="/login" render={props => <LogIn {...props} />} />
      </Container>
    );
  }
}

export default App;
