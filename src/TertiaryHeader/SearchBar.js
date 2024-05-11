import { useState } from "react";
import { DynamicInputField } from "../Reusables/DynamicInputField";

export function SearchBar({}) {
  const [searchInputValue, setSearchInputValue] = useState("");
  function handleSearchInputChange(e) {
    setSearchInputValue(e.target.value);
  }
  return (
    <div className="searchbar">
      <DynamicInputField
        placeholder={"search..."}
        value={searchInputValue}
        onChange={handleSearchInputChange}
      />
    </div>
  );
}
