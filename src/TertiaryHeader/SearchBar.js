import { useState } from "react";
import { DynamicInputField } from "../Reusables/DynamicInputField";

export function SearchBar({
  initialProducts,
  initialFurniture,
  filteredList,
  setFilteredList,
  selectedItemType,
  searchInputValue,
  setSearchInputValue,
}) {
  //const [searchInputValue, setSearchInputValue] = useState("");
  function handleSearchInputChange(e) {
    const userInputValue = e.target.value;
    setSearchInputValue(userInputValue);
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
