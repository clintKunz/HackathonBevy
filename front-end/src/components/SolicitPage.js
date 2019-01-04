import React from "react";
import axios from "axios";
import styled from "styled-components";
import moment from "moment"

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
    Comment: [],
    solicit:{}
  };
  componentDidMount(){
    axios.get(`http://localhost:5000/api/loans/${this.props.match.params.id}`)
    .then(res => {
      this.setState({solicit : res.data})
      console.log(this.state.solicit)
    })
  }
  render() {
    console.log("PROPS::::::::::" , this.props)
    return (
      <SolicitContainer>
        <table>
          <tbody>
            <SolicitItems><th>Loan ID: {this.state.solicit._id}</th></SolicitItems>
            <SolicitItems><th>User ID: {this.state.solicit.borrower}</th></SolicitItems>
            <SolicitItems><th>Loan Amount: {this.state.solicit.amount}</th></SolicitItems>
            <SolicitItems><th>Length in Months: {this.state.solicit.lengthMonths} months</th></SolicitItems>
            <SolicitItems><th>Type: {this.state.solicit.loanType}</th></SolicitItems>
            <SolicitItems><th>APR: {this.state.solicit.interest}%</th></SolicitItems>
            <SolicitItems><th>Start Payback Date: {moment(this.state.solicit.startDate).format('MMM-DD-YYYY')}</th></SolicitItems>
            <SolicitItems><th>Pitch: {this.state.solicit.pitch}</th></SolicitItems>
            <SolicitItems><th>Comments: {this.state.Comment}</th></SolicitItems>
          </tbody>
        </table>
      </SolicitContainer>
    );
  }
}

export default SolicitPage;
