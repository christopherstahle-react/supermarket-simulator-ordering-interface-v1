import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { DisplayDropdown } from "./DisplayDropdown";
import { CategoryDropdown } from "./CategoryDropdown";
import Divider from "@mui/material/Divider";
import "./tertiaryHeader.css";

///TertiaryHeader holds the SearchBar, Display && Category filter dropdowns.
export function TertiaryHeader({
  displayOptionLabels,
  categoryOptionLabels,
  handleDropdownValueChange,
  displayDropdownValue,
  categoryDropdownValue,
  selectedItemType,
}) {
  //#region Logic
  /*
  const [displayDropdownValue, setDisplayDropdownValue] = useState(
    displayOptionLabels[0].label
  );
  const [categoryDropdownValue, setCategoryDropdownValue] = useState(
    categoryOptionLabels[0].label
  );
  const handleDropdownValueChange = (selectedValue, dropdownType) => {
    if (dropdownType === "display") {
      setDisplayDropdownValue(selectedValue);
    } else if (dropdownType === "category") {
      setCategoryDropdownValue(selectedValue);
    }
  };*/
  //#endregion

  //#region Rendering
  return (
    <>
      <div className="tertiaryheader-container">
        <SearchBar />
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
