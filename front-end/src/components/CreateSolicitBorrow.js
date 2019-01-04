import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from '../actions';
const { createLoan } = actions;

const Wrap = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
    padding: 30px;  
`;

const Header = styled.h2`
    color: white; 
    font-size: 1.8rem; 
    margin-bottom: 15px; 
`;

const Paragraph = styled.p`
    color: white; 
    font-size: 1.5rem; 
    margin-bottom: 15px;
    width: 85%;  
`;

const Form = styled.form`
    color: white;
    
    fieldset label {
        display: block; 
        margin: 10px; 
        font-size: 1.5rem; 

        input {
            font-size: 1.3rem; 
            margin: 10px; 
            width: 90%; 
        }

        textarea {
            font-size: 1.3rem; 
            margin: 10px; 
            width: 90%; 
            padding: 2px; 
        }
    }

    button {
        font-size: 1.8rem; 
        padding: 5px 15px; 
        margin: 10px 0;  
        border-radius: 5px; 
    }
`;

class CreateSolicitBorrow extends Component {
    state = {
        interest: '',
        lengthMonths: '',
        amount: '',
        pitch: '',
        startDate: '',
        loanType: '',
    };

    componentDidUpdate(prevProps) {
        if (!prevProps.createLoanSuccess && this.props.createLoanSuccess) {
            this.props.history.push('/');
        }
    }

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({
            [name]: val
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const loan = this.state;
        //console.log("create Loan with interest of", interest);
        this.props.createLoan({...loan, solicitType: 'borrower'});
        this.props.history.push('/solicits');
    };

    render() {
        return (
            <Wrap>
                <Header>Need to borrow money?</Header>
                <Paragraph>Fill out the form and hit submit. Your loan will then be public for potential peer lenders to see.</Paragraph>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <fieldset>
                        <label htmlFor="loanType">
                            Loan Type
                            <input type="text" id="loanType" name="loanType" placeholder="Auto, Personal, Home Remodel, Business"  value={this.state.loanType} onChange={(e) => this.handleChange(e)}/> 
                        </label>
                        <label htmlFor="amount">
                            Loan Amount
                            <input type="number" id="amount" name="amount" placeholder="3,000"  value={this.state.amount} onChange={(e) => this.handleChange(e)}/> 
                        </label>
                        <label htmlFor="lengthMonths">
                            Loan Length in Months 
                            <input type="number" id="lengthMonths" name="lengthMonths" placeholder="24"  value={this.state.lengthMonths} onChange={(e) => this.handleChange(e)}/> 
                        </label>
                        <label htmlFor="startDate">
                            Start Date of Payback 
                            <input type="date" id="startDate" name="startDate" placeholder="mm-dd-yyyy"  value={this.state.startDate} onChange={(e) => this.handleChange(e)}/> 
                        </label>
                        <label htmlFor="interest">
                            Annual Percentage Rate
                            <input type="number" id="interest" name="interest" placeholder="6%"  value={this.state.interest} onChange={(e) => this.handleChange(e)}/> 
                        </label>
                        <label htmlFor="pitch">
                            Why do you need the loan?
                            <textarea type="text" id="pitch" name="pitch" placeholder="My business is expanding, and I need the funds to buy more inventory!"  value={this.state.pitch} onChange={(e) => this.handleChange(e)}/> 
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </Form>
            </Wrap>
        );
    }
}

export default connect(null, {createLoan})(CreateSolicitBorrow);