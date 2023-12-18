import React, { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import {
  fetchBooksAsync,
  deleteBookAsync,
  setSelectedBook,
} from "../../store/bookSlice";
import { FullBook } from "../../api/booksApi";
import { RootState } from "../../store";
import { AppDispatch } from "../../store/configureStore";
import {
  BookCard,
  BookDialog,
  Hero,
  Header,
  Spinner,
  DeleteConfirmation,
} from "../../components";

import "./Main.scss";

const Main: React.FC = () => {
  const [isBookDialog, setIsBookDialog] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const {
    loading,
    items: books,
    error,
    search,
    filter,
    sort,
  } = useSelector((state: RootState) => state.books);
  const deleteBookIdRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  const toggleBookDialog = () => setIsBookDialog((prev) => !prev);
  const toggleConfirmation = () => setShowConfirmation((prev) => !prev);

  const handleDelete = (id: number) => () => {
    deleteBookIdRef.current = id;
    toggleConfirmation();
  };

  const handleConfirmDelete = () => {
    dispatch(deleteBookAsync(deleteBookIdRef.current));
    toggleConfirmation();
  };

  const handleUpdateBook = (book: FullBook) => {
    dispatch(setSelectedBook(book));
    toggleBookDialog();
  };

  const handleBookDetailsClick = (id: number) => () => {
    navigate(`/book/${id}`);
  };

  const filteredAndSortedBooks = useMemo(() => {
    let result = books;

    if (search) {
      result = result.filter((book) => {
        for (const key in book) {
          const searchingData = String(book[key as keyof FullBook])
            .toLowerCase()
            .includes(search.toLowerCase());
          if (key !== "id" && searchingData) {
            if (searchingData) return true;
          }
        }
        return false;
      });
    }

    if (filter.category || filter.author) {
      result = result.filter(
        (book) =>
          (!filter.category || book.category === filter.category) &&
          (!filter.author || book.author === filter.author)
      );
    }

    if (sort) {
      result = [...result].sort((a, b) => {
        switch (sort) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "name-asc":
            return a.name.localeCompare(b.name);
          case "name-desc":
            return b.name.localeCompare(a.name);
          case "author-asc":
            return a.author.localeCompare(b.author);
          case "author-desc":
            return b.author.localeCompare(a.author);
          default:
            return 0;
        }
      });
    }

    return result;
  }, [books, search, filter, sort]);

  const structuredData = useMemo(() => {
    return {
      "@context": "http://schema.org",
      "@type": "ItemList",
      itemListElement: books.map((book, index) => ({
        "@type": "Book",
        name: book.name,
        author: book.author,
        position: index + 1,
      })),
    };
  }, [books]);

  return (
    <>
      <Helmet>
        <title>Books - Browse Our Newest Collection</title>
        <meta
          name="description"
          content="Explore a diverse collection of books spanning various genres, authors, and price ranges. Discover your next captivating read with ease."
        />
        <meta
          name="keywords"
          content="books, genres, authors, price ranges, captivating reads"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <section
              className="booklist fadeIn"
              aria-labelledby="booklist-heading"
            >
              <div className="container">
                {filteredAndSortedBooks?.length ? (
                  <div className="booklist-content">
                    {filteredAndSortedBooks.map((book: FullBook) => {
                      return (
                        <div key={book.id} data-testid="book-item">
                          <BookCard {...book} onCLick={handleUpdateBook} />
                          <div className="buttons-container">
                            <button
                              className="details-button"
                              onClick={handleBookDetailsClick(book.id)}
                              aria-label={`Details for ${book.name}`}
                            >
                              Details
                            </button>
                            <button
                              className="delete-button"
                              aria-label={`Delete ${book.name}`}
                              onClick={handleDelete(book.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="empty-book" data-testid="empty-book">
                    <p className="text">There is no books</p>
                  </div>
                )}
              </div>
            </section>
            {isBookDialog ? <BookDialog onClose={toggleBookDialog} /> : null}
            {showConfirmation ? (
              <DeleteConfirmation
                onConfirm={handleConfirmDelete}
                onCancel={toggleConfirmation}
              />
            ) : null}
          </main>
        </>
      )}
    </>
  );
};

export default Main;
