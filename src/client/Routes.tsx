import React from "react";
import { Route, Routes } from "react-router-dom";

import { BookDetails, Main, NotFound } from "./pages";

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default React.memo(RoutesComponent);
