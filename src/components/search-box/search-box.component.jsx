import React from "react";
import "./search-box.styles.css";
const SearchBox = ({ placeholder, filterMonster }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={filterMonster}
    />
  );
};
export default SearchBox;
