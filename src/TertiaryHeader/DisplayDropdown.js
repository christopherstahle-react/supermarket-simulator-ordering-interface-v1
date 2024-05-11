import { DynamicDropdown } from "../Reusables/DynamicDropdown";
/**
 * SUMMARY: DisplayDropdown is a dropdown menu for selecting a filter to apply to the view.
 */
export function DisplayDropdown({
  optionLabels,
  onChange,
  selectedValue,
  selectedItemType,
}) {
  return (
    <div>
      {"Display: "}
      <DynamicDropdown
        optionLabels={optionLabels}
        onChange={onChange}
        selectedValue={selectedValue}
        isDropdownDisabled={selectedItemType === "Furniture"}
        type={"display"}
      />
    </div>
  );
}
