import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import actions from './actions';
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
const {refreshToken} = actions;

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
  height: 100vh;
  background: #0e0e0e;
`;

class App extends React.Component {
  // make and break refresh token flow
  componentDidUpdate(prevProps) {
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      this.refreshToken = setInterval(() => this.props.refreshToken(), 10000);
    } else if (prevProps.isLoggedIn && !this.props.isLoggedIn) {
      clearInterval(this.refreshToken)
    }
  }

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

const mapStateToProps = state =>  ({
  isLoggedIn: state.session.isLoggedIn,
})

export default withRouter(connect(mapStateToProps, {refreshToken})(App));
