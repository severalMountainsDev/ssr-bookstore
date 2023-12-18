import React from "react";

import useDisableBodyScroll from "../../hooks/useDisableBodyScroll";

import "./DeleteConfirmation.scss";

interface DeleteConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  onConfirm,
  onCancel,
}) => {
  useDisableBodyScroll();
  return (
    <div className="delete-container">
      <div className="delete-confirmation">
        <p>Are you sure that you want to delete this book?</p>
        <div className="buttons-container">
          <button
            aria-label="Delete book"
            className="delete-button"
            onClick={onConfirm}
          >
            Yes, Delete
          </button>
          <button
            aria-label="Cancel delete book"
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
