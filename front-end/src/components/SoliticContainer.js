import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import SolicitBorrow from "./SolicitBorrow";
import SolicitLend from "./SolicitLend";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Wrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
`;
const StyledLink = styled(Link)`
  margin: 2rem 0;
  color: #eee;
  font-family: sans-serif;
`;
class SolicitContainer extends Component {
  // state = {
  //   solicitsBorrows: [
  //     {
  //       id: 100000,
  //       name: "Chris Smith",
  //       userId: 1023948092134,
  //       loanAmt: 1000,
  //       lengthMonths: 6,
  //       type: "Auto Loan",
  //       arp: 10,
  //       startPayback: "2019-12-12",
  //       pitch: "I need money."
  //     }
  //   ],
  //   solicitLends: [
  //     {
  //       id: 1,
  //       loanRangeStart: 200,
  //       loanRangeStop: 1000,
  //       loanAmt: 1000,
  //       lengthMonths: 6,
  //       type: "car",
  //       arp: 10,
  //       startPayback: "2019-12-12",
  //       rating: 5,
  //       userId: "1"
  //     }
  //   ]
  // };

  render(props) {
    return (
      <Wrapper>
        <SearchBar />
        <StyledLink to="/create-borrow">Need to Borrow Money?</StyledLink>
        <StyledLink to="/create-lend">Willing to Lend Money?</StyledLink>
        {this.props.searchResults.map(solicit => (
          <SolicitBorrow key={solicit.id} solicit={solicit} />
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.solicit.searchResults,
  }
}

export default connect(mapStateToProps)(SolicitContainer);
