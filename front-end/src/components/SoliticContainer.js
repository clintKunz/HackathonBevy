import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Solicit from './Solicit';

const Wrapper = styled.div`
    max-width: 450px; 
    margin: 0 auto; 
    border: 1px solid blue; 
`;

class SolicitContainer extends Component {
    state = {
        solicitsBorrows: [{
            id: 100000,
            userId: 1023948092134,
            loanAmt: 1000,
            lengthMonths: 6,
            type: 'Auto Loan',
            arp: 10,
            startPayback: "2019-12-12",
            pitch: "I need money."
        }],
        solicitLends: [{
            id: 1,
            loanRangeStart: 200,
            loanRangeStop: 1000,
            loanAmt: 1000,
            lengthMonths: 6,
            type: "car",
            arp: 10,
            startPayback: "2019-12-12",
            rating: 5,
            userId: "1"
        }]   
    };

    componentDidMount() {
        axios.get("http://localhost:9000/api/solicits/borrows")
            .then(res => {
                this.setState({
                    solicitsBorrows: res.data
                })
            })
            .catch(err => console.log(err));

        axios.get("http://localhost:9000/api/solicits/lends")
        .then(res => {
            this.setState({
                solicitsLends: res.data
            })
        })
        .catch(err => console.log(err));
    };

    render(props) {
        return (
            <Wrapper>
                {this.state.solicitsBorrows.map(borrows => <Solicit key={borrows.id} {...props} solicitBorrow={borrows} />)}
            </Wrapper>
        );
    }
}

export default SolicitContainer;