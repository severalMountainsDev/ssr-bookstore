import React from "react";
import { Field, ErrorMessage } from "formik";

import "./FormField.scss";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  as?: React.ElementType;
  autoComplete?: string;
  resize?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  as,
  type = "text",
  autoComplete = "off",
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <Field
        type={type}
        as={as}
        id={name}
        name={name}
        className="input"
        autoComplete={autoComplete}
        resize="none"
        overflow="hidden"
      />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default FormField;
