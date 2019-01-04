import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { connect } from 'react-redux';
import actions from '../actions';
const {searchLoans} = actions;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .search {
    margin-left: -2rem;
    margin-right: 2rem;
  }
`;
const StyledInput = styled.input`
  outline: 0;
  border-radius: 2rem;
  padding: 0 1rem;
`;

const Radio = styled.button`
  background-color: ${(props) => props.selected ? 'lightgreen' : 'white'};
  padding: 1px 4px; 
  border-radius: 5px; 
`;

class SearchBar extends Component {
  state = {
    type: 'borrower',
  }
  
  handleChange = (e) => {
    this.props.searchLoans(this.state.type, e.target.value);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.props.searchLoans(this.state.type, ''), 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  setType(string) {
    this.setState({
      type: string
    });
  }

  render() {
     return (
      <StyledContainer>
        <StyledInput type="text" placeholder="Search by Description" onChange={(e) => this.handleChange(e)}/>
        <Radio selected={this.state.type === "borrower"} onClick={() => this.setType('borrower')}>borrowers</Radio>
        <Radio selected={this.state.type === "lender"} onClick={() => this.setType('lender')}>lenders</Radio>
      </StyledContainer>
    ); 
  }
}


export default connect(null, {searchLoans})(SearchBar);