import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { connect } from "react-redux";
import {
  faEnvelope,
  faKey,
  faUser,
  faMapPin,
  faCreditCard,
  faDollarSign,
  faCommentsDollar,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

//components
import Navigation from "./components/Navigation";
import LogIn from "./components/Login.js";
import SolicitContainer from "./components/SoliticContainer";
import SignUp from "./components/SignUp";
import SolicitPage from "./components/SolicitPage";
import CreateSolicitBorrow from "./components/CreateSolicitBorrow";
import CreateSolicitLend from "./components/CreateSolicitLend";
import Background from "./components/Background";
import Profile from "./components/Profile";
library.add(
  faEnvelope,
  faKey,
  faUser,
  faMapPin,
  faCreditCard,
  faDollarSign,
  faCommentsDollar,
  faSearch
);
const Container = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  height: minmax(100vh, 100%);
  background: #0e0e0e;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Route
          path="/solicits"
          render={props => <SolicitContainer {...props} />}
        />
        <Route path="/login" render={props => <LogIn {...props} />} />
        <Route path="/signup" render={props => <SignUp {...props} />} />
        <Route
          path="/create-borrow"
          render={props => <CreateSolicitBorrow {...props} />}
        />
        <Route
          path="/create-lend"
          render={props => <CreateSolicitLend {...props} />}
        />
        <Route path="/solicit/:id" render={props => <SolicitPage {...props} />} />
        <Route path="/profile" render={props => <Profile {...props} />} />
        {/* <Background /> */}
      </Container>
    );
  }
}

export default App;
