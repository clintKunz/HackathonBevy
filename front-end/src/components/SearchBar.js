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
  background-color: ${(props) => props.selected ? 'lightblue' : 'lightgray'};
`;

class SearchBar extends Component {
  state = {
    type: 'borrowers',
  }
  
  handleChange = (e) => {
    this.props.searchLoans(this.state.type, e.target.value);
  }
  
  setType(string) {
    this.setState({
      type: string
    });
  }

  render() {
     return (
      <StyledContainer>
        <StyledInput type="text" placeholder="Search by Name" onChange={(e) => this.handleChange(e)}/>
        <Radio selected={this.state.type === "borrowers"} onClick={() => this.setType('borrowers')}>borrowers</Radio>
        <Radio selected={this.state.type === "lenders"} onClick={() => this.setType('lenders')}>lenders</Radio>
        <FontAwesomeIcon icon="search" className="search" />
      </StyledContainer>
    ); 
  }
}


export default connect(null, {searchLoans})(SearchBar);