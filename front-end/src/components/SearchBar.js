import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

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
  border-radius: 2rem;
  padding: 0 1rem;
`;

const SearchBar = props => {
  return (
    <StyledContainer>
      <StyledInput type="text" placeholder="Search by Name" />
      <FontAwesomeIcon icon="search" className="search" />
    </StyledContainer>
  );
};

export default SearchBar;
