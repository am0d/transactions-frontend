export interface EditableFieldProps<T> {
  editing: boolean;
  onEdit: (value: T) => void;
}
