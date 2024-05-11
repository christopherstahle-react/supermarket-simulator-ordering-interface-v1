import "./Styles/button.css";

/**
 * SUMMARY: Button is a base-class button
 */
export function Button({ emoji, label, onClickHandler, style }) {
  return (
    <button className="button" onClick={onClickHandler} style={style}>
      {emoji} {label}
    </button>
  );
}
