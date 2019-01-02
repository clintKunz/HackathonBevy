import React from 'react';
import axios from 'axios';

class SolicitPage extends Component {
    state = { 
            Id: 'A',
            UserId: 'B',
            LoanAmt: 1,
            LengthMonths: 2,
            Type: 'C',
            ARP: 3,
            StartPayback: 'Date',
            Pitch: 'D',
            Comment: []
     }
    render() { 
        return ( 
            <h2>Loan ID: {this.state.Id}</h2>
            <h2>User ID: {this.state.UserId}</h2>
            <h2>Loan ID: {this.state.Id}</h2>
            <h2>Loan ID: {this.state.Id}</h2>
            <h2>Loan ID: {this.state.Id}</h2>
            <h2>Loan ID: {this.state.Id}</h2>
            <h2>Loan ID: {this.state.Id}</h2>
            <h2>Loan ID: {this.state.Id}</h2>
         );
    }
}
 
export default SolicitPage;