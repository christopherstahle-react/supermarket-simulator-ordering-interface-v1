import { DynamicDropdown } from "../Reusables/DynamicDropdown";
/**
 * SUMMARY: CategoryDropdown is a dropdown menu for selecting a filter to apply to the view.
 */
export function CategoryDropdown({
  optionLabels,
  onChange,
  selectedValue,
  selectedItemType,
}) {
  return (
    <div>
      {"Category: "}
      <DynamicDropdown
        optionLabels={optionLabels}
        onChange={onChange}
        selectedValue={selectedValue}
        isDropdownDisabled={selectedItemType === "Furniture"}
        type={"category"}
      />
    </div>
  );
}
