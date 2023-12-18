import React from "react";
import { render, screen } from "@testing-library/react";
import { Formik, Form } from "formik";

import FormField from "./FormField";

test("renders FormField component with label", () => {
  render(
    <Formik initialValues={{ name: "" }} onSubmit={() => {}}>
      <Form>
        <FormField label="Name" name="name" />
      </Form>
    </Formik>
  );
  const labelElement = screen.getByText("Name");
  expect(labelElement).toBeInTheDocument();
});

test("renders FormField component with input", () => {
  render(
    <Formik initialValues={{ email: "" }} onSubmit={() => {}}>
      <Form>
        <FormField label="Email" name="email" />
      </Form>
    </Formik>
  );
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

test("renders FormField component with specified type", () => {
  render(
    <Formik initialValues={{ password: "" }} onSubmit={() => {}}>
      <Form>
        <FormField label="Password" name="password" type="password" />
      </Form>
    </Formik>
  );
  const inputElement = screen.getByLabelText("Password");
  expect(inputElement).toHaveAttribute("type", "password");
});

test("renders FormField component with specified as prop", () => {
  render(
    <Formik initialValues={{ textarea: "" }} onSubmit={() => {}}>
      <Form>
        <FormField label="Textarea" name="textarea" as="textarea" />
      </Form>
    </Formik>
  );
  const textareaElement = screen.getByRole("textbox");
  expect(textareaElement).toBeInTheDocument();
});
