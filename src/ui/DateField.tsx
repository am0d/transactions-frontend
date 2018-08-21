import { EditableFieldProps } from './EditableFieldProps';
import * as React from 'react';

class DateFieldProps {
  public value: Date;
}

export class DateField extends React.Component<
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
