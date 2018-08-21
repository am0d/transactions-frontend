import { EditableFieldProps } from './EditableFieldProps';
import * as React from 'react';

export class TextFieldProps {
  public value: string;
}
export class TextField extends React.Component<
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
