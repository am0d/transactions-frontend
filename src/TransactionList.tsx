import * as React from 'react';
import './App.css';
import { Transaction, default as TransactionRow } from './TransactionRow';
import TransactionRowEdit from './TransactionRowEdit';
export { Transaction } from './TransactionRow';

export interface TransactionsProps {
  Transactions: Transaction[];
}

class TransactionRowState {
  transaction: Transaction;
  editing: boolean;
}
class TransactionListState {
  rows: TransactionRowState[];
}

class TransactionList extends React.Component<
  TransactionsProps,
  TransactionListState
> {
  constructor(transactionsProps: TransactionsProps) {
    super(transactionsProps);
    this.state = {
      rows: transactionsProps.Transactions.map(tp => ({
        transaction: tp,
        editing: false
      }))
    };
  }
  addTransaction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.setState({
      rows: [
        { transaction: Transaction.NewRecord(), editing: true },
        ...this.state.rows
      ]
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
              <a href="#" onClick={this.addTransaction}>
                Add
              </a>
            </div>
          </div>
        </section>
        <section>
          {this.state.rows.map(
            t =>
              t.editing ? (
                <TransactionRowEdit
                  transaction={t.transaction}
                  editing={t.editing}
                  key={t.transaction.Id}
                />
              ) : (
                <TransactionRow
                  transaction={t.transaction}
                  editing={t.editing}
                  key={t.transaction.Id}
                />
              )
          )}
        </section>
      </div>
    );
  }
}

export default TransactionList;
