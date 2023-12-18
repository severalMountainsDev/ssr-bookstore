import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import {
  addBookAsync,
  clearFilter,
  clearSearch,
  clearSelectedBook,
  clearSort,
  updateBookAsync,
} from "../../store/bookSlice";
import { FullBook } from "../../api/booksApi";
import { AppDispatch } from "../../store/configureStore";
import useDisableBodyScroll from "../../hooks/useDisableBodyScroll";
import { validationSchema } from "../../helpers/validationSchema";
import { FormField } from "../FormField";
import { RootState } from "../../store";

import "./BookDialog.scss";

interface IMyProps {
  onClose: () => void;
  isOpen?: boolean;
}

const initialValues = {
  name: "",
  price: "",
  category: "",
  author: "",
  description: "",
};

const BookDialog: React.FC<IMyProps> = ({ onClose, isOpen }) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    selectedBook,
    search,
    filter: { category, author },
    sort,
  } = useSelector((state: RootState) => state.books);
  useDisableBodyScroll();

  const handleSubmit = (values: FullBook) => {
    if (selectedBook) dispatch(updateBookAsync(values));
    else dispatch(addBookAsync(values));

    if (search) dispatch(clearSearch());
    if (sort) dispatch(clearSort());
    if (category || author) dispatch(clearFilter());

    onClose();
  };

  useEffect(() => {
    return () => {
      dispatch(clearSelectedBook());
    };
  }, []);

  return (
    <dialog
      className={`book-dialog ${isOpen ? "open" : ""}`}
      data-testid="book-dialog"
    >
      <div className="dialog-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2 className="title">{selectedBook ? "Edit Book" : "Add Book"}</h2>
        <Formik
          initialValues={selectedBook || initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <FormField label="Name:" name="name" />
            <FormField label="Price:" name="price" type="number" />
            <FormField label="Author:" name="author" />
            <FormField label="Category:" name="category" />
            <FormField label="Description:" name="description" as="textarea" />

            <button type="submit" className="submit-button">
              {selectedBook ? "Update" : "Add"}
            </button>
          </Form>
        </Formik>
      </div>
    </dialog>
  );
};

export default BookDialog;
