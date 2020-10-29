import React from "react";

const Filter = ({ searchItem, handleSearchItemChange }) => {
  return (
    <div>
      filter shown with{" "}
      <input value={searchItem} onChange={handleSearchItemChange} />
    </div>
  );
};

export default Filter;
