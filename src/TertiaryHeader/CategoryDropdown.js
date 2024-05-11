import { DynamicDropdown } from "../Reusables/DynamicDropdown";

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
