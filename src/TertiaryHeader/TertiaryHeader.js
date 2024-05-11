import { SearchBar } from "./SearchBar";
import { DisplayDropdown } from "./DisplayDropdown";
import { CategoryDropdown } from "./CategoryDropdown";
import Divider from "@mui/material/Divider";
import "./tertiaryHeader.css";

/**
 * SUMMARY: TertiaryHeader is a section that holds the SearchBar, Display && Category filter dropdowns.
 */
export function TertiaryHeader({
  displayOptionLabels,
  categoryOptionLabels,
  handleDropdownValueChange,
  displayDropdownValue,
  categoryDropdownValue,
  selectedItemType,
  initialProducts,
  filteredList,
  setFilteredList,
  initialFurniture,
  searchInputValue,
  setSearchInputValue,
}) {
  //#region Rendering
  return (
    <>
      <div className="tertiaryheader-container">
        <SearchBar
          initialProducts={initialProducts}
          filteredList={filteredList}
          setFilteredList={setFilteredList}
          initialFurniture={initialFurniture}
          selectedItemType={selectedItemType}
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
        <DisplayDropdown
          optionLabels={displayOptionLabels}
          onChange={handleDropdownValueChange}
          selectedValue={displayDropdownValue}
          selectedItemType={selectedItemType}
        />
        <CategoryDropdown
          optionLabels={categoryOptionLabels}
          onChange={handleDropdownValueChange}
          selectedValue={categoryDropdownValue}
          selectedItemType={selectedItemType}
        />
      </div>
      <Divider />
    </>
  );
  //#endregion
}
