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
          <SolicitItems>Loan ID: {this.state.Id}</SolicitItems>
          <SolicitItems>User ID: {this.state.UserId}</SolicitItems>
          <SolicitItems>Loan Amount: {this.state.LoanAmt}</SolicitItems>
          <SolicitItems>
            Length in Months: {this.state.LengthMonths} months
          </SolicitItems>
          <SolicitItems>Type: {this.state.Type}</SolicitItems>
          <SolicitItems>APR: {this.state.APR}%</SolicitItems>
          <SolicitItems>
            Start Payback Date: {this.state.StartPayback}
          </SolicitItems>
          <SolicitItems>Pitch: {this.state.Pitch}</SolicitItems>
          <SolicitItems>Comments: {this.state.Comment}</SolicitItems>
        </table>
      </SolicitContainer>
    );
  }
}

export default SolicitPage;
