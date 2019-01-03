import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    color: white;
    
    fieldset label {
        display: block; 
        margin: 10px; 

        input {
            margin-left: 10px; 
            width: 65%; 
        }

        textarea {
            margin-left: 10px; 
            width: 65%; 
        }
    }
`;

class CreateSolicitLend extends Component {
    state = {
        arp: null,
        lengthMonths: null,
        loanRangeStart: null,
        loanRangeStop: null,
        startPayback: null,
        loanType: '',
    };

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({
            [name]: val
        })
    };

    render() {
        return (
            <Form>
                <fieldset>
                    <label htmlFor="loanType">
                        Loan Type
                        <input type="text" id="loanType" name="loanType" placeholder="Auto, Personal, Home Remodel, Business" required value={this.state.loanType} onChange={this.handleChange}/> 
                    </label>
                    <label htmlFor="loanRangeStart">
                        Lowest Loan Amount
                        <input type="number" id="loanRangeStart" name="loanRangeStart" placeholder="3,000" required value={this.state.loanRangeStart} onChange={this.handleChange}/> 
                    </label>
                    <label htmlFor="loanRangeStop">
                        Highest Loan Amount
                        <input type="number" id="loanRangeStop" name="loanRangeStop" placeholder="10,000" required value={this.state.loanRangeStop} onChange={this.handleChange}/> 
                    </label>
                    <label htmlFor="lengthMonths">
                        Loan Length in Months 
                        <input type="number" id="lengthMonths" name="lengthMonths" placeholder="24" required value={this.state.lengthMonths} onChange={this.handleChange}/> 
                    </label>
                    <label htmlFor="startPayback">
                        Start Date of Payback 
                        <input type="date" id="startPayback" name="startPayback" placeholder="mm-dd-yyyy" required value={this.state.startPayback} onChange={this.handleChange}/> 
                    </label>
                    <label htmlFor="arp">
                        Annual Percentage Rate
                        <input type="number" id="arp" name="arp" placeholder="6%" required value={this.state.arp} onChange={this.handleChange}/> 
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </Form>
        );
    }
}

export default CreateSolicitLend;