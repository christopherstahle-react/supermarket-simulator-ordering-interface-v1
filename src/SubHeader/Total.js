import { useState } from "react";
import "./total.css";

export function Total({ formattedTotal, numBoxes }) {
  console.log(formattedTotal);
  return (
    <div className="total-container">
      <span className="total-label">Total:</span>
      <div className="total-amount">${formattedTotal}</div>
      <div className="cart-icon">🛒</div>
      <div className="num-boxes">{numBoxes}</div>
    </div>
  );
}
