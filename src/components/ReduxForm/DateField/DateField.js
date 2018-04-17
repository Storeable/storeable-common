import React from 'react';
import { Form, Label, Input } from 'semantic-ui-react';
import { fieldProps } from '../FieldPropTypes';

const DateField = ({
  input,
  label,
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
    <Input
      {...input}
      {...rest}
      type="date"
      defaultValue={initialValue}
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
