import * as React from 'react';
import { Transaction } from './TransactionRow';
import './App.css';

interface EditableFieldProps<T> {
  editing: boolean;
  onEdit: (value: T) => void;
}

class TextFieldProps {
  public value: string;
}
class TextField extends React.Component<
  TextFieldProps & EditableFieldProps<string>
> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onEdit(e.target.value);
  };
  render() {
    if (this.props.editing) {
      return (
        <input
          type="text"
          value={this.props.value}
          className="form-control"
          onChange={this.handleChange}
        />
      );
    } else {
      return <React.Fragment>{this.props.value}</React.Fragment>;
    }
  }
}

class CurrencyFieldProps {
  public value: number;
}
class CurrencyField extends React.Component<
  CurrencyFieldProps & EditableFieldProps<number>
> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    this.props.onEdit(value);
  };
  render() {
    if (this.props.editing) {
      return (
        <div className="input-group">
          <span className="input-group-addon">$</span>
          <input
            type="text"
            name="Amount"
            className="form-control"
            value={this.props.value}
            onChange={this.handleChange}
          />
        </div>
      );
    } else {
      return <React.Fragment>${this.props.value.toString()}</React.Fragment>;
    }
  }
}

class DateFieldProps {
  public value: Date;
}

class DateField extends React.Component<
  DateFieldProps & EditableFieldProps<Date>
> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = new Date(e.target.value);
    this.props.onEdit(value);
  };
  render() {
    if (this.props.editing) {
      return (
        <input
          type="text"
          value={this.props.value.toISOString()}
          className="form-control"
          onChange={this.handleChange}
        />
      );
    } else {
      return <React.Fragment>{this.props.value.toISOString()}</React.Fragment>;
    }
  }
}

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
            <form>
              <div className="form-group">
                <label>Store</label>
                <TextField
                  value={transaction.Store}
                  editing={true}
                  onEdit={this.setStore}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <TextField
                  value={transaction.Category}
                  editing={true}
                  onEdit={this.setCategory}
                />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <CurrencyField
                  value={transaction.Amount}
                  editing={true}
                  onEdit={this.setAmount}
                />
              </div>
              <div className="form-group">
                <label>Date</label>
                <DateField
                  value={transaction.Date}
                  editing={true}
                  onEdit={this.setDate}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionRowEdit;
