import * as React from 'react';
import './styles/transaction.css';
import { Transaction } from './model/Transaction';

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

class TransactionRowView extends React.Component<
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
      transaction: { ...this.state.transaction, Store: store },
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
    return (
      <div className="row transaction">
        <div className="col-sm-3">
          <TextField
            value={this.state.transaction.Store}
            editing={this.state.editing}
            onEdit={this.setStore}
          />
        </div>
        <div className="col-sm-3">
          <DateField
            value={this.state.transaction.Date}
            editing={this.state.editing}
            onEdit={this.setDate}
          />
        </div>
        <div className="col-sm-3">
          <TextField
            value={this.state.transaction.Category}
            editing={this.state.editing}
            onEdit={this.setCategory}
          />
        </div>
        <div className="col-sm-2">
          <CurrencyField
            value={this.state.transaction.Amount}
            editing={this.state.editing}
            onEdit={this.setAmount}
          />
        </div>
        <div className="col-sm-1">
          <a href="#" onClick={this.toggleEdit}>
            Edit
          </a>
          {this.state.pendingChange ? <span>Save</span> : null}
        </div>
      </div>
    );
  }
}

export default TransactionRowView;
