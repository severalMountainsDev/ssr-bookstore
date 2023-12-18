import React from "react";

import { FullBook } from "../../api/booksApi";
import { formatCurrency } from "../../helpers/currencyFormatter";

import "./BookCard.scss";

const BookCard: React.FC<FullBook & { onCLick: (id: FullBook) => void }> = (
  props
) => {
  const { onCLick, ...book } = props;

  const handleOnCLick = () => {
    onCLick(book);
  };

  return (
    <article
      className="book-item"
      onClick={handleOnCLick}
      aria-label={`Book: ${book.name}`}
      data-testid="book-item"
    >
      <div className="book-item-info">
        <div className="book-item-info-item title">
          <span>{book.name}</span>
        </div>

        <div className="book-item-info-item author">
          <span className="subtitle">Author: </span>
          <span>{book.author}</span>
        </div>

        <div className="book-item-info-item edition-count">
          <span className="subtitle">Price: </span>
          <span>{formatCurrency(book.price)}</span>
        </div>

        <div className="book-item-info-item edition-count">
          <span className="subtitle">Category: </span>
          <span>{book.category}</span>
        </div>

        <div className="book-item-info-item edition-count">
          <span className="subtitle">Descriptions: </span>
          <span>{book.description}</span>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
