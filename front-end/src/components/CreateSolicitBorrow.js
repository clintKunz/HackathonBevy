import React, { Component } from 'react';

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
            <form>
                <fieldset>
                    <label htmlFor="loanType">
                        Loan Type
                        <input type="date" id="loanType" name="loanType" placeholder="Auto, Personal, Home Remodel" required value={this.state.loanType} onChange={this.handleChange}/> 
                    </label>
                    <label htmlFor="loanAmt">
                        Loan Amount
                        <input type="number" id="loanAmt" name="loanAmt" placeholder="3,000" required value={this.state.loanAmt} onChange={this.handleChange}/> 
                    </label>
                    <label htmlFor="lengthMonths">
                        Loan Length in Months 
                        <input type="date" id="lengthMonths" name="lengthMonths" placeholder="24" required value={this.state.lengthMonths} onChange={this.handleChange}/> 
                    </label>
                    <label htmlFor="startPayback">
                        Start Date of Payback 
                        <input type="date" id="startPayback" name="startPayback" placeholder="mm-dd-yyyy" required value={this.state.startPayback} onChange={this.handleChange}/> 
                    </label>
                    <label htmlFor="startPayback">
                        Start Date of Payback 
                        <input type="date" id="startPayback" name="startPayback" placeholder="mm-dd-yyyy" required value={this.state.startPayback} onChange={this.handleChange}/> 
                    </label>
                    <label htmlFor="startPayback">
                        Start Date of Payback 
                        <input type="date" id="startPayback" name="startPayback" placeholder="mm-dd-yyyy" required value={this.state.startPayback} onChange={this.handleChange}/> 
                    </label>
                </fieldset>
            </form>
        );
    }
}

export default CreateSolicitBorrow;