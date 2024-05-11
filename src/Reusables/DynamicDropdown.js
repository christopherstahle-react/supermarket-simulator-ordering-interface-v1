export function DynamicDropdown({
  optionLabels,
  onChange,
  selectedValue,
  isDropdownDisabled,
  type,
}) {
  const handleChange = (e) => {
    onChange(e.target.value, type);
  };
  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      disabled={isDropdownDisabled}
    >
      {optionLabels?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
