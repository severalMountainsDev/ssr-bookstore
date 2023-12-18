import React from "react";

import "./Spinner.scss";

const Spinner: React.FC = () => {
  return (
    <div className="spinner-container" role="spinner">
      <div className="spinner">
        <div className="spinner-inner" />
      </div>
    </div>
  );
};

export default Spinner;
