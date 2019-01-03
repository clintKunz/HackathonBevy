import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SolicitDiv = styled.div`
    display: flex; 
    flex-direction: column; 
`;

class SolicitLend extends Component {

    render(props) {
        return (
            <SolicitDiv>
                {/* <h3>name: {this.props.solicitBorrow.name}</h3> */}
                <h3>Lending</h3>    
                <Link to="/solicit">See More</Link>
            </SolicitDiv>      
        );
    }
}

export default SolicitLend;