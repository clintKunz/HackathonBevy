import React from "react";
import axios from "axios";
import styled from "styled-components";
import moment from "moment"
import { connect } from 'react-redux';
import actions from '../actions';
const { getLoanById } = actions;

const SolicitContainer = styled.div`
  font-family: ubuntu;
  color: white; 
  font-size: 1.9rem; 
  margin: 15px;
  span {
    color: green;
    font-weight: bold; 
  }
  h2, h3 {
    margin: 10px 0; 
  }
  p {
    margin: 0 10px; 
  }
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
      <SolicitContainer>
          <h2>{(this.state.solicit.solicitType === 'borrower') ? 'In search of a qualified lender to agree to or counter the following terms:' : 'In search of a qualified borrower to agree to the following terms:'} </h2>
          <p>I, <span>"username"</span>, hereby solicit a <span>{this.state.solicit.loanType}</span> loan in the amount of <span>${this.state.solicit.amount}</span>. With the following terms,</p>
          <p>The loan will be funded by the lender no later than two weeks after both parties have signed the contract. Payback for the loan will then commence on the day the contract is executed or <span>{moment(this.state.solicit.startDate).format('MMM-DD-YYYY')}, whichever is later.</span> Payments will be made monthly for the entire length of the loan, which is <span>{this.state.solicit.lengthMonths}</span> months. Monthly payments will be $<span>{Math.round((this.state.solicit.amount/this.state.solicit.lengthMonths)*(1 + this.state.solicit.interest/100/12))}</span></p>
          <h3>Reason why I need the loan:</h3>
          <p><span>{this.state.solicit.pitch}.</span></p>
          <p>If you are interested in fulfilling this loan, contact me at <span>example@hotmail.com</span>. Thank you!</p>        
      </SolicitContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    solicit: state.solicit.searchResults,
  };
};

export default connect(mapStateToProps, {getLoanById})(SolicitPage);
