import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { connect } from 'react-redux';
import {
  faEnvelope,
  faKey,
  faUser,
  faMapPin,
  faCreditCard,
  faDollarSign,
  faCommentsDollar
} from "@fortawesome/free-solid-svg-icons";

//components
import Auth from "./components/Auth";
import Navigation from "./components/Navigation";
import LogIn from "./components/Login.js";
import SolicitContainer from "./components/SoliticContainer";
import SignUp from "./components/SignUp";
import SolicitPage from "./components/SolicitPage";
import CreateSolicitBorrow from "./components/CreateSolicitBorrow";
import CreateSolicitLend from "./components/CreateSolicitLend";
import Background from "./components/Background";

library.add(
  faEnvelope,
  faKey,
  faUser,
  faMapPin,
  faCreditCard,
  faDollarSign,
  faCommentsDollar
);
const Container = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  background: #0e0e0e;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Route
          exact
          path="/solicits"
          render={props => <SolicitContainer {...props} />}
        />
        <Route exact path="/login" render={props => <LogIn {...props} />} />
        <Route exact path="/signup" render={props => <SignUp {...props} />} />
        <Route
          exact
          path="/create-borrow"
          render={props => <CreateSolicitBorrow {...props} />}
        />
        <Route
          exact
          path="/create-lend"
          render={props => <CreateSolicitLend {...props} />}
        />
        <Route
          exact
          path="/solicit"
          render={props => <SolicitPage {...props} />}
        />
        {/* <Background /> */}
      </Container>
    );
  }
}

export default App;
