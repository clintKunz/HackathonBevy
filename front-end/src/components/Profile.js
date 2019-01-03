import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import profilePic from "../images/profile-pic.jpg";

const StyledContainer = styled.div`
  border: 1px solid #d1e7df;
  padding: 5rem;
  margin: 5rem;
  color: #5abd9a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  .profilePic {
    border: 5px solid #d1e7df;
    border-radius: 50%;
    width: 50%;
    margin-bottom: 3rem;
  }
  p {
    color: rgba(90, 189, 154, 0.7);
  }
`;
const StyledDescription = styled.h2`
  margin: 1rem 0;
`;
const Profile = props => {
  console.log(props);
  return (
    <StyledContainer>
      <img src={props.img} alt="profile-pic" className="profilePic" />
      <StyledDescription>
        <label htmlFor="">name</label>
        <p>{props.username}</p>
      </StyledDescription>
      <StyledDescription>
        <label htmlFor="">credit score</label>
        <p>{props.creditScore}</p>
      </StyledDescription>
      <StyledDescription>
        <label htmlFor="">email</label>
        <p>{props.email}</p>
      </StyledDescription>
      <StyledDescription>
        <label htmlFor="">created on</label>
        <p>{props.createdOn}</p>
      </StyledDescription>
    </StyledContainer>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.session.isLoggedIn,
    username: "ben",
    creditScore: 999,
    createdOn: "2000-11-11",
    img: profilePic,
    email: "123@hotmail.com"
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
