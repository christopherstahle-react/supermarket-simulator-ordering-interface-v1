import "./Styles/total.css";
/**
 * SUMMARY: Total is a collection of UI that displays cart information.
 */
export function Total({ formattedTotal, numBoxes }) {
  return (
    <div className="total-container">
      <span className="total-label">Total:</span>
      <div className="total-amount">${formattedTotal}</div>
      <div className="cart-icon">🛒</div>
      <div className="num-boxes">{numBoxes}</div>
    </div>
  );
}
