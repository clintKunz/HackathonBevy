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

const Radioi = styled.button`
  color: props => selected ? 1y
  
`;

class SearchBar extends Component => {
  state = {
    type: 'borrowers',

  }
  
  handleChange = (e) => {
    props.searchLoans(this.state.type, e.value);
  }
  
  setType(string) {
    this.setState({
      type: string
    });
  }

  render() {
     return (
      <StyledContainer>
        <StyledInput type="text" placeholder="Search by Name" onChange={(e) => handleChange(e)}/>
        <Radio selected={this.state.type === "borrowers"} onClick={() => setType('borrowers')}>borrowers</Radio>
        <Radio selected={this.state.type === "lenders"} onClick={() => setType('lenders')}>lenders</Radio>
        <FontAwesomeIcon icon="search" className="search" />
      </StyledContainer>
    ); 
  }
}


export default connect(null, {searchLoans})(SearchBar);