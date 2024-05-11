export function DynamicInputField({
  type = "text",
  value,
  onChange,
  placeholder,
  className,
  style,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      style={style}
    />
  );
}
