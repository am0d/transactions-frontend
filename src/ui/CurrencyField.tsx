import { EditableFieldProps } from './EditableFieldProps';
import * as React from 'react';
class CurrencyFieldProps {
  public value: number;
}
export class CurrencyField extends React.Component<
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
