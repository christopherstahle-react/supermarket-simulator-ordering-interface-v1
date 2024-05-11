import { DynamicDropdown } from "../Reusables/DynamicDropdown";

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
