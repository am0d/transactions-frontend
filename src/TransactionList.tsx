import * as React from 'react';
import './App.css';
import { default as TransactionRowView } from './TransactionRowView';
import { Transaction } from './model/Transaction';
import TransactionRowEdit from './TransactionRowEdit';

export interface TransactionsProps {
  Transactions: Transaction[];
}

const transactions: TransactionsProps = {
  Transactions: [
    new Transaction(1, 'Walmart', new Date(), 'Groceries', 137.32),
    new Transaction(2, 'Pioneer', new Date(), 'Gas', 41.11)
  ]
};

class TransactionRowState {
  transaction: Transaction;
  editing: boolean;
}
class TransactionListState {
  rows: TransactionRowState[];
}

class TransactionList extends React.Component<{}, TransactionListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      rows: transactions.Transactions.map(tp => ({
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
                <TransactionRowView
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
