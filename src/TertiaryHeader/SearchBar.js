import { DynamicInputField } from "../Reusables/DynamicInputField";
/**
 * SUMMARY: SearchBar is a search bar input field for selecting a filter to apply to the view.
 */
export function SearchBar({
  initialProducts,
  initialFurniture,
  filteredList,
  setFilteredList,
  selectedItemType,
  searchInputValue,
  setSearchInputValue,
}) {
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
