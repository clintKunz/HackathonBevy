import React from "react";
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
import Auth from "./components/Auth";
import Navigation from "./components/Navigation";
import LogIn from "./components/Login.js";
import SolicitContainer from "./components/SoliticContainer";
import SignUp from "./components/SignUp";
import SolicitPage from "./components/SolicitPage";

library.add(faEnvelope, faKey, faUser, faMapPin, faCreditCard);
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  border: 1px solid red;
  background: #0e0e0e;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Route exact path="/solicits" render={props => <SolicitContainer {...props} />} />
        <Route exact path="/login" render={props => <LogIn {...props} />} />
        <Route exact path="/signup" render={props => <SignUp {...props} />} />
        <Route
          exact
          path="/solicit"
          render={props => <SolicitPage {...props} />}
        />
      </Container>
    );
  }
}

export default App;
