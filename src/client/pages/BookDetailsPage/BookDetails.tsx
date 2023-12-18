import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";

import { RootState } from "../../store";
import { clearSelectedBook, fetchBookAsync } from "../../store/bookSlice";
import { AppDispatch } from "../../store/configureStore";
import { formatCurrency } from "../../helpers/currencyFormatter";
import { Spinner } from "../../components";

import "./BookDetails.scss";

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, selectedBook } = useSelector(
    (state: RootState) => state.books
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBookAsync(Number(id)));

    return () => {
      dispatch(clearSelectedBook());
    };
  }, [dispatch, id]);

  const handleGoAllBooks = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>{selectedBook ? selectedBook.name : "Book Details"}</title>
        <meta
          name="description"
          content={
            selectedBook
              ? `Details of the book ${selectedBook.name}`
              : "Book details"
          }
        />
        <meta
          name="keywords"
          content="book details page, book information, book description, book price, book author, book category, reading material, book review, literary content"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        {selectedBook && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Book",
              name: selectedBook.name,
              author: selectedBook.author,
              description: selectedBook.description,
              url: window.location.href,
            })}
          </script>
        )}
      </Helmet>
      {loading ? (
        <Spinner />
      ) : (
        <div className="book-details fadeIn">
          {selectedBook ? (
            <article className="book" data-testid="render-book">
              <h1 className="book-title">{selectedBook.name}</h1>
              <section className="book-info">
                <h2 className="book-info-title">Book Information</h2>
                <ul className="info-list">
                  <li className="info-item">
                    <strong className="info-label">Author:</strong>{" "}
                    {selectedBook.author}
                  </li>
                  <li className="info-item">
                    <strong className="info-label">Category:</strong>{" "}
                    {selectedBook.category}
                  </li>
                  <li className="info-item">
                    <strong className="info-label">Price:</strong>{" "}
                    {formatCurrency(selectedBook.price)}
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="book-description-title">Description</h2>
                <p className="book-description">{selectedBook.description}</p>
              </section>
            </article>
          ) : (
            <p className="book-description" data-testid="empty-book">
              There is no such book
            </p>
          )}
          <button
            aria-label="Go to All Books"
            className="button-back"
            onClick={handleGoAllBooks}
          >
            Go to All Books
          </button>
        </div>
      )}
    </>
  );
};

export default BookDetails;
