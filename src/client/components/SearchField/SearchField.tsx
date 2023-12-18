import React from "react";

import "./SearchField.scss";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchField: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const clearInput = () => {
    onChange("");
  };

  return (
    <div className="input-container">
      <input
        id="input-field"
        className="input-field"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          aria-label="Clear input"
          className="clear-btn"
          onClick={clearInput}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchField;
