import * as React from 'react';
import { Transaction } from './model/Transaction';
import './App.css';
import { TextField, CurrencyField, DateField } from './ui';

class TransactionProps {
  public transaction: Transaction;
  public editing?: boolean;
}

class TransactionState {
  public transaction: Transaction;
  public editing: boolean;
  public pendingChange: boolean;
}

class TransactionRowEdit extends React.Component<
  TransactionProps,
  TransactionState
> {
  constructor(props: TransactionProps) {
    super(props);
    const { transaction, editing } = props;
    this.state = {
      editing: editing || false,
      transaction: transaction,
      pendingChange: false
    };
  }

  toggleEdit = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) {
      e.preventDefault();
    }
    this.setState({ editing: !this.state.editing });
  };

  setStore = (store: string) => {
    this.setState({
      transaction: { Store: store, ...this.state.transaction },
      pendingChange: true
    });
  };

  setDate = (date: Date) => {
    this.setState({
      transaction: { ...this.state.transaction, Date: date },
      pendingChange: true
    });
  };

  setCategory = (category: string) => {
    this.setState({
      transaction: { ...this.state.transaction, Category: category },
      pendingChange: true
    });
  };

  setAmount = (amount: number) => {
    this.setState({
      transaction: { ...this.state.transaction, Amount: amount },
      pendingChange: true
    });
  };

  render() {
    const transaction = this.state.transaction;
    return (
      <div className="row transaction">
        <div className="panel panel-primary">
          <div className="panel-heading">Transaction</div>
          <div className="panel-body">
            <form className="container">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Store</label>
                  <TextField
                    value={transaction.Store}
                    editing={true}
                    onEdit={this.setStore}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Date</label>
                  <DateField
                    value={transaction.Date}
                    editing={true}
                    onEdit={this.setDate}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Category</label>
                  <TextField
                    value={transaction.Category}
                    editing={true}
                    onEdit={this.setCategory}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Amount</label>
                  <CurrencyField
                    value={transaction.Amount}
                    editing={true}
                    onEdit={this.setAmount}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionRowEdit;
