import * as React from 'react';
import './App.css';

export class Transaction {
    public constructor(public Store : string, public Date : Date, public Category : string, public Amount : number,) {}
}

class TransactionRow extends React.Component < Transaction, {} > {
    render() {
        return (
            <tr>
                <td>{this.props.Store}</td>
                <td>{this
                        .props
                        .Date
                        .toISOString()}</td>
                <td>{this.props.Category}</td>
                <td>${this.props.Amount}</td>
            </tr>

        );
    }
}

export default TransactionRow;
