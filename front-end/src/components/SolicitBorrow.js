import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from 'moment';

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
    -webkit-border-top-right-radius: 0;
    border-radius: 100%;
    border-top-right-radius: 0;
    margin-bottom : 20px;
    h3{
        text-decoration:underline;
        margin-top:10px;
    }
    h4{
        margin:0% 5%;
    }
`;

class SolicitBorrow extends Component {
  render(props) {
    return (
      <SolicitDiv>
        <h3>Borrowing</h3>
        {/* <h3>name: {this.props.solicit.name}</h3> */}
        <h4>User: {this.props.solicit.solicitedBy.username}</h4>
        <h4>Loan Amount: {this.props.solicit.amount}</h4>
        <h4>Start Payback: {moment(this.props.solicit.startDate).format('MMM DD YYYY')}</h4>
        <h4>
          Loan Length in Months from Start of Payback:{" "}
          {this.props.solicit.lengthMonths}
        </h4>
        <h4>APR: {this.props.solicit.interest}%</h4>
        <h4>Type: {this.props.solicit.loanType} Loan</h4>
        <h4>Why I Need to Borrow: {this.props.solicit.pitch}</h4>
        <Link to="/solicit">See More</Link>
      </SolicitDiv>
    );
  }
}

export default SolicitBorrow;
