import * as React from 'react';
import './App.css';
import {Transaction, default as TransactionRow} from './TransactionRow';
export {Transaction}
from './TransactionRow';

export interface TransactionsProps {
    Transactions : Transaction[];
}

class TransactionList extends React.Component < TransactionsProps, {} > {
    render() {
        return (
            <table className="table">
                <caption>Transactions</caption>
                <thead>
                    <tr>
                        <th>Store</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" name="Store" className="form-control"/></td>
                        <td><input type="date" name="Date" className="form-control"/></td>
                        <td><input type="text" name="Category" className="form-control"/></td>
                        <td>
                            <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <input type="number" name="Amount" className="form-control"/>
                            </div>
                        </td>
                    </tr>
                        {this
                            .props
                            .Transactions
                            .map(t => <TransactionRow {...t} key={t.Store}/>)}
                    </tbody>
                </table>
        );
    }
}

export default TransactionList;