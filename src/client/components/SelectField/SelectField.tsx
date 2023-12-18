import React, { useState } from "react";

import "./SelectField.scss";

interface Option {
  value: string;
  label: string;
}

type Category = "category" | "author" | "sort";

interface SelectFiledProps {
  type: Category;
  value: Option | null;
  onChange: (option: Option | null, type: Category) => void;
  options: Option[];
  placeholder: string;
}

const SelectField: React.FC<SelectFiledProps> = ({
  type,
  value,
  onChange,
  options,
  placeholder,
}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const toggleOptions = () => setIsOptionsOpen((prev) => !prev);

  const selectOption = (option: Option) => {
    if (option?.value !== value?.value) onChange(option, type);
    toggleOptions();
  };

  return (
    <div
      className="select-container"
      tabIndex={0}
      onBlur={() => setIsOptionsOpen(false)}
      onClick={toggleOptions}
      role="combobox"
      aria-expanded={isOptionsOpen}
      aria-haspopup="listbox"
      aria-controls={`${type}-list`}
      aria-label={placeholder}
    >
      <span className={`value ${!value?.label && "placeholder"}`}>
        {value?.label || placeholder}
      </span>
      {value?.label ? (
        <button
          aria-label={`Clear selected ${type}`}
          className="clear-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (value) onChange(null, type);
          }}
        >
          ×
        </button>
      ) : null}
      <div className="divider" />
      <div className={isOptionsOpen ? "caret-close" : "caret"} />
      {isOptionsOpen ? (
        <ul className={"options"}>
          {options.map((option, index) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value?.value}
              className={`option ${
                option.value === value?.value && "selected"
              } ${index === highlightedIndex && "highlighted"}`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={(e) => {
                e.stopPropagation();
                if (option !== value) selectOption(option);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SelectField;
