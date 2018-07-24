import * as React from 'react';
import './App.css';
import { Transaction, default as TransactionRow } from './TransactionRow';
export { Transaction } from './TransactionRow';

export interface TransactionsProps {
  Transactions: Transaction[];
}

class TransactionListState {
  transactions: Transaction[];
}

class TransactionList extends React.Component<
  TransactionsProps,
  TransactionListState
> {
  constructor(transactionsProps: TransactionsProps) {
    super(transactionsProps);
    this.state = { transactions: transactionsProps.Transactions };
  }
  addTransaction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.setState({
      transactions: [Transaction.NewRecord(), ...this.state.transactions]
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Transactions</h3>
        <section>
          <div className="row transaction">
            <div className="col-sm-3">Store</div>
            <div className="col-sm-3">Date</div>
            <div className="col-sm-3">Category</div>
            <div className="col-sm-2">Amount</div>
            <div className="col-sm-1">
              <a onClick={this.addTransaction}>Add</a>
            </div>
          </div>
        </section>
        <section>
          {this.state.transactions.map(t => (
            <TransactionRow transaction={t} key={t.Id} />
          ))}
        </section>
      </div>
    );
  }
}

export default TransactionList;
