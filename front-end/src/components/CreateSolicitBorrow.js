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

class CreateSolicitBorrow extends Component {
    state = {
        arp: null,
        lengthMonths: null,
        loanAmt: null,
        pitch: '',
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
                    <label htmlFor="loanAmt">
                        Loan Amount
                        <input type="number" id="loanAmt" name="loanAmt" placeholder="3,000" required value={this.state.loanAmt} onChange={this.handleChange}/> 
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
                    <label htmlFor="pitch">
                        Why do you need the loan?
                        <textarea type="text" id="pitch" name="pitch" placeholder="My business is expanding, and I need the funds to buy more inventory!" required value={this.state.pitch} onChange={this.handleChange}/> 
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </Form>
        );
    }
}

export default CreateSolicitBorrow;