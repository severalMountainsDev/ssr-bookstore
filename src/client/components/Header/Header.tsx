import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setSearch,
  setFilter,
  setSort,
  selectUniqueCategories,
  selectUniqueAuthors,
} from "../../store/bookSlice";
import useDebounce from "../../hooks/useDebounce";
import useScrollPosition from "../../hooks/useScrollPosition";
import useThrottle from "../../hooks/useThrottle";
import { BookDialog } from "../BookDialog";
import { SelectField } from "../SelectField";
import { SearchField } from "../SearchField";

import "./Header.scss";

interface Option {
  value: string;
  label: string;
}

type Category = "category" | "author" | "sort";

const SORT_OPTIONS: Option[] = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Book Name: A-Z" },
  { value: "name-desc", label: "Book Name: Z-A" },
  { value: "author-asc", label: "Author: A-Z" },
  { value: "author-desc", label: "Author: Z-A" },
];

const Header: React.FC = () => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [formState, setFormState] = useState({
    search: "",
    category: null as Option | null,
    author: null as Option | null,
    sort: null as Option | null,
  });

  const isFixed = useScrollPosition(250);
  const dispatch = useDispatch();
  const categories = useSelector(selectUniqueCategories);
  const authors = useSelector(selectUniqueAuthors);

  const { search, category, author, sort } = formState;

  const categoryOptions = useMemo(() => {
    return categories.map((category) => ({ value: category, label: category }));
  }, [categories]);

  const authorOptions = useMemo(() => {
    return authors.map((author) => ({ value: author, label: author }));
  }, [authors]);

  const handleSearchChange = useCallback(
    (search: string) => {
      setFormState((prev) => ({ ...prev, search }));
    },
    [setFormState]
  );

  const handleFilterSortChange = useCallback(
    (option: Option | null, type: Category) => {
      setFormState((prev) => ({ ...prev, [type]: option }));
    },
    [setFormState]
  );

  const debouncedSearchQuery = useDebounce(search, 300);
  const throttledFilterSortChange = useThrottle(
    (option: Option | null, type: Category) => {
      if (type === "sort") dispatch(setSort(option?.value || ""));
      else dispatch(setFilter({ type, value: option?.value || "" }));
    },
    300
  );

  useEffect(() => {
    dispatch(setSearch(debouncedSearchQuery));
  }, [debouncedSearchQuery]);

  useEffect(() => {
    throttledFilterSortChange(author, "author");
  }, [author]);

  useEffect(() => {
    throttledFilterSortChange(category, "category");
  }, [category]);

  useEffect(() => {
    throttledFilterSortChange(sort, "sort");
  }, [sort]);

  return (
    <>
      <header className={`header ${isFixed ? "follow fadeIn" : ""}`}>
        <div className="header-content fadeIn">
          <span className="logo">Bookstore</span>

          <SearchField
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
          />

          <SelectField
            type="author"
            placeholder="Filter by Author"
            options={authorOptions}
            value={author}
            onChange={handleFilterSortChange}
          />

          <SelectField
            type="category"
            placeholder="Filter by Category"
            options={categoryOptions}
            value={category}
            onChange={handleFilterSortChange}
          />

          <SelectField
            type="sort"
            placeholder="Sort"
            options={SORT_OPTIONS}
            value={sort}
            onChange={handleFilterSortChange}
          />

          <button
            className="button-add"
            onClick={() => setTogglePopup(true)}
            aria-label="Add a new book"
          >
            Add book
          </button>
        </div>
      </header>
      {togglePopup && (
        <BookDialog
          isOpen={togglePopup}
          onClose={() => setTogglePopup(false)}
        />
      )}
    </>
  );
};

export default Header;
