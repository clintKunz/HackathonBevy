import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faUser,
  faMapPin,
  faCreditCard
} from "@fortawesome/free-solid-svg-icons";

//components
import Navigation from "./components/Navigation";
import LogIn from "./components/Login.js";
import SolicitContainer from "./components/SoliticContainer";
import SignUp from "./components/SignUp";

library.add(faEnvelope, faKey, faUser, faMapPin, faCreditCard);
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
        <SolicitContainer />
        <Route exact path="/login" render={props => <LogIn {...props} />} />
        <Route exact path="/signup" render={props => <SignUp {...props} />} />
      </Container>
    );
  }
}

export default App;
