import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SolicitDiv = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items : center;
    font-size:1.4rem;
    color: white; 
    width : 75%;
    height : 200px;
    border: 2px solid green; 
    -webkit-border-radius: 100px;
    -webkit-border-top-right-radius: 0;
    border-radius: 100px;
    border-top-right-radius: 0;
    margin-bottom : 20px;
`;

class SolicitBorrow extends Component {

    render(props) {
        return (
            <SolicitDiv>
                <h3>Borrowing</h3>
                {/* <h3>name: {this.props.solicitBorrow.name}</h3> */}
                <h4>User: {this.props.solicitBorrow.id}</h4>
                <h4>Loan Amount: {this.props.solicitBorrow.loanAmt}</h4>
                <h4>Start Payback: {this.props.solicitBorrow.startPayback}</h4>
                <h4>Loan Length in Months from Start of Payback: {this.props.solicitBorrow.lengthMonths}</h4>
                <h4>APR: {this.props.solicitBorrow.arp}%</h4>
                <h4>Type: {this.props.solicitBorrow.type} Loan</h4>
                <h4>Why I Need to Borrow: {this.props.solicitBorrow.pitch}</h4>
                <Link to="/solicit">See More</Link>
            </SolicitDiv>      
        );
    }
}

export default SolicitBorrow;