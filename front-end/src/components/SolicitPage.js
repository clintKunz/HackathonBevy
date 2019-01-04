import React from "react";
import axios from "axios";
import styled from "styled-components";
import moment from "moment"
import { connect } from 'react-redux';
import actions from '../actions';
const { getLoanById } = actions;

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
    solicit: {}
  };

  componentDidMount(){
    axios.get(`http://localhost:5000/api/loans/${this.props.match.params.id}`)
    .then(res => {
      this.setState({solicit : res.data})
      console.log(this.state.solicit)
    })
    // console.log(this.props.match.params.id)
    // this.props.getLoanById(this.props.match.params.id);
  }

  render() {
    console.log("PROPS::::::::::" , this.props)
    return (
      <div style={{color: "white"}}>
          <h2>{(this.state.solicit.solicitType === 'borrower') ? 'In search of a qualified lender to agree to or counter the following terms:' : 'In search of a qualified borrower to agree to the following terms:'} </h2>
          <p>I, <span>"username"</span>, hereby solicit a <span>{this.state.solicit.loanType}</span> loan in the amount of <span>${this.state.solicit.amount}</span>. With the following terms,</p>
          <p>The loan will be funded by the lender no later than two weeks after both parties have signed the contract. Payback for the loan will then commence the day the contract is executed or <span>{moment(this.state.solicit.startDate).format('MMM-DD-YYYY')}, whichever is later.</span></p> 
      </div>

      // <SolicitContainer>
      //   <table>
      //     <tbody>
      //       <SolicitItems><th>Loan ID: {this.state.solicit._id}</th></SolicitItems>
      //       <SolicitItems><th>User ID: {this.state.solicit.borrower}</th></SolicitItems>
      //       <SolicitItems><th>Loan Amount: {this.state.solicit.amount}</th></SolicitItems>
      //       <SolicitItems><th>Length in Months: {this.state.solicit.lengthMonths} months</th></SolicitItems>
      //       <SolicitItems><th>Type: {this.state.solicit.loanType}</th></SolicitItems>
      //       <SolicitItems><th>APR: {this.state.solicit.interest}%</th></SolicitItems>
      //       <SolicitItems><th>Start Payback Date: {moment(this.state.solicit.startDate).format('MMM-DD-YYYY')}</th></SolicitItems>
      //       <SolicitItems><th>Pitch: {this.state.solicit.pitch}</th></SolicitItems>
      //       <SolicitItems><th>Comments: {this.state.Comment}</th></SolicitItems>
      //     </tbody>
      //   </table>
      // </SolicitContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    solicit: state.solicit.searchResults,
  };
};

export default connect(mapStateToProps, {getLoanById})(SolicitPage);
