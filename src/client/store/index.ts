import { combineReducers } from "@reduxjs/toolkit";

import booksReducer from "./bookSlice";

const rootReducer = combineReducers({
  books: booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
