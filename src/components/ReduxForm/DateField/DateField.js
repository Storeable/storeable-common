import React from 'react';
import { Form, Label, Input } from 'semantic-ui-react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import { fieldProps } from '../FieldPropTypes';

const DateField = ({
  input,
  label,
  onChange,
  initialValue,
  required,
  width,
  inline,
  meta: { touched, error },
  ...rest
}) => (
  <Form.Field
    error={!!(touched && error)}
    required={required}
    width={width}
    inline={inline}
  >
    {label && <label>{label}</label>}
    <DateTimePicker
      onChange={onChange}
      format="DD MMM YYYY"
      time={false}
      value={!initialValue ? null : new Date(initialValue)}
    />
    <Input
      {...input}
      {...rest}
      value={initialValue}
    />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

DateField.propTypes = {
  ...fieldProps
};

export default DateField;
