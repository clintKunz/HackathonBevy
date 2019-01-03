import React, { Component } from 'react';
import styled from 'styled-components';

const solicitDiv = styled.div`

`;

class Solicit extends Component {

    render(props) {
        return (
            <solicitDiv>
                {this.props.solicitBorrow.loanAmt}
            </solicitDiv>      
        );
    }
}

export default Solicit;