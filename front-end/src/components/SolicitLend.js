import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SolicitDiv = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items : center;
    font-size:1.45rem;
    color: white; 
    width : 66%;
    height : 275px;
    border: 2px solid green; 
    -webkit-border-radius: 100px;
    -webkit-border-top-left-radius: 0px;
    border-radius: 100%;
    border-top-left-radius:0px;
    margin-bottom : 20px;
    h3{
        text-decoration:underline;
        margin-top:10px;
    }
    h4{
        margin:0% 5%;
    }
`;

class SolicitLend extends Component {
  render(props) {
    return (
      <SolicitDiv>
        {/* <h3>name: {this.props.solicitBorrow.name}</h3> */}
        <h3>Lending</h3>
        <h4>User: {this.props.solicitLend.id}</h4>
        <h4>
          Loan Range: {this.props.solicitLend.loanRangeStart} to{" "}
          {this.props.solicitLend.loanRangeStop}
        </h4>
        <h4>Start PayBack: {this.props.solicitLend.startPayback}</h4>
        <h4>
          Loan Length in Months from Start of Payback:{" "}
          {this.props.solicitLend.lengthMonths}
        </h4>
        <h4>APR: {this.props.solicitLend.arp}%</h4>
        <h4>Type: {this.props.solicitLend.type} Loans</h4>
        <h4>Lender Rating: {this.props.solicitLend.rating}</h4>
        <Link to="/solicit">See More</Link>
      </SolicitDiv>
    );
  }
}

export default SolicitLend;
