import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./NotFound.scss";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoAllBooks = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Browse our collection of books."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Helmet>
      <main>
        <section
          aria-labelledby="not-found-title"
          className="not-found-container fadeIn"
        >
          <h1 id="not-found-title" className="not-found-title">
            404 - Page Not Found
          </h1>
          <p className="not-found-text">
            The page you are looking for does not exist.
          </p>
          <button className="not-found-button" onClick={handleGoAllBooks}>
            Go to All Books
          </button>
        </section>
      </main>
    </>
  );
};

export default NotFound;
