import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";

import * as booksApi from "../api/booksApi";

export const fetchBooksAsync = createAsyncThunk(
  "books/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await booksApi.fetchBooks();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchBookAsync = createAsyncThunk(
  "books/fetchBook",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await booksApi.fetchBook(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addBookAsync = createAsyncThunk(
  "books/addBook",
  async (book: booksApi.Book, { rejectWithValue }) => {
    try {
      const response = await booksApi.addBook(book);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateBookAsync = createAsyncThunk(
  "books/updateBook",
  async (book: booksApi.FullBook, { rejectWithValue }) => {
    try {
      const response = await booksApi.updateBook(book);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteBookAsync = createAsyncThunk(
  "books/deleteBook",
  async (id: number, { rejectWithValue }) => {
    try {
      await booksApi.deleteBook(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const selectUniqueCategories = createSelector(
  (state) => state.books.items,
  (items: booksApi.FullBook[]) => {
    const categories = new Set(items.map((item) => item.category));
    return Array.from(categories);
  }
);

export const selectUniqueAuthors = createSelector(
  (state) => state.books.items,
  (items: booksApi.FullBook[]) => {
    const authors = new Set(items.map((item) => item.author));
    return Array.from(authors);
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    items: [] as booksApi.FullBook[],
    loading: false,
    error: null,
    search: "",
    selectedBook: null as booksApi.FullBook | null,
    filter: { category: "", author: "" },
    sort: "",
  },
  reducers: {
    setSelectedBook: (state, action: PayloadAction<booksApi.FullBook>) => {
      state.selectedBook = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{ type: "category" | "author"; value: string }>
    ) => {
      const { type, value } = action.payload;
      state.filter[type] = value;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    clearSort: (state) => {
      state.sort = "";
    },
    clearSearch: (state) => {
      state.search = "";
    },
    clearFilter: (state) => {
      state.filter = { category: "", author: "" };
    },
    clearSelectedBook: (state) => {
      state.selectedBook = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBooksAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchBookAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookAsync.fulfilled, (state, action) => {
        state.selectedBook = action.payload;
        state.loading = false;
      })
      .addCase(fetchBookAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addBookAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addBookAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateBookAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBookAsync.fulfilled, (state, action) => {
        state.items = state.items.map((book) =>
          book.id === action.payload.id ? action.payload : book
        );
        state.loading = false;
      })
      .addCase(updateBookAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteBookAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBookAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((book) => book.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteBookAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const {
  setSelectedBook,
  setSearch,
  setFilter,
  setSort,
  clearSearch,
  clearFilter,
  clearSelectedBook,
  clearSort,
} = booksSlice.actions;
export default booksSlice.reducer;
