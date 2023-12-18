import React from "react";

import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <section className="hero fadeIn">
      <h1 className="title">Bookworm's Wonderland</h1>
      <h2 className="title">Discover new worlds and universes with us</h2>
      <p className="text">
        Explore our collection of classic and contemporary books. We offer a
        wide range of genres to suit every reading taste.
      </p>
      <p className="text">
        Our curated selection includes fiction, non-fiction, science fiction,
        fantasy, mystery, romance, and more. Whether you're looking for
        bestsellers or hidden gems, you'll find something to enjoy.
      </p>
      <p className="text">
        Don't forget to check out our special offers, new arrivals, and
        recommendations from our passionate team of readers.
      </p>
    </section>
  );
};

export default Hero;
