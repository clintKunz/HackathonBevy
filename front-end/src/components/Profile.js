import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import profilePic from "../images/profile-pic.jpg";
import moment from 'moment';
import actions from '../actions';
const { getMyLoans } = actions;

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

class Profile extends React.Component {

  componentDidMount() {
    this.props.getMyLoans();
  }

  render() {
    const { user } = this.props;    
    return (
      <>
        <StyledContainer>
          <img src={!user.img ? profilePic : user.img} alt="profile-pic" className="profilePic" />
          <StyledDescription>
            <label htmlFor="">name</label>
            <p>{user.username}</p>
          </StyledDescription>
          <StyledDescription>
            <label htmlFor="">credit score</label>
            <p>{user.creditScore}</p>
          </StyledDescription>
          <StyledDescription>
            <label htmlFor="">email</label>
            <p>{user.email}</p>
          </StyledDescription>
          <StyledDescription>
            <label htmlFor="">created on</label>
            <p>{moment(user.signUpDate).format('MMM-DD-YYYY')}</p>
          </StyledDescription>
        </StyledContainer>
        <StyledContainer>
          <StyledDescription>
            <label htmlFor="">my loans</label>
            <p></p>
          </StyledDescription>
        </StyledContainer>  
      </>
    );
  }
};

const mapStateToProps = state => {
  return {
    user: state.user.profile,
  };
};

export default connect(
  mapStateToProps,
  {getMyLoans}
)(Profile);
