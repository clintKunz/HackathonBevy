import React from "react";
import axios from "axios";
import styled from "styled-components";

const SolicitContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 5.5rem;
  font-family: ubuntu;
  margin-left: 18px;
`;

const SolicitItems = styled.tr`
  font-size: 1.6rem;
  color: white; 
`;
class SolicitPage extends React.Component {
  state = {
    Id: "",
    UserId: "",
    LoanAmt: 1,
    LengthMonths: 2,
    Type: "",
    APR: 3,
    StartPayback: "Date",
    Pitch: "",
    Comment: []
  };
  render() {
    return (
      <SolicitContainer>
        <table>
          <tbody>
            <SolicitItems><th>Loan ID: {this.state.Id}</th></SolicitItems>
            <SolicitItems><th>User ID: {this.state.UserId}</th></SolicitItems>
            <SolicitItems><th>Loan Amount: {this.state.LoanAmt}</th></SolicitItems>
            <SolicitItems><th>Length in Months: {this.state.LengthMonths} months</th></SolicitItems>
            <SolicitItems><th>Type: {this.state.Type}</th></SolicitItems>
            <SolicitItems><th>APR: {this.state.APR}%</th></SolicitItems>
            <SolicitItems><th>Start Payback Date: {this.state.StartPayback}</th></SolicitItems>
            <SolicitItems><th>Pitch: {this.state.Pitch}</th></SolicitItems>
            <SolicitItems><th>Comments: {this.state.Comment}</th></SolicitItems>
          </tbody>
        </table>
      </SolicitContainer>
    );
  }
}

export default SolicitPage;
