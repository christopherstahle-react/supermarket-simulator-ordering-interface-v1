import "./Styles/item.css";
/**
 * SUMMARY: Item is a container to display data associated with an item.
 */
export function Item({ item }) {
  return (
    <div className="item">
      <div className="item-info">
        <span className="name-label">{item.nameLabel}</span>
        <span className="emoji">{item.emoji}</span>
      </div>
      <div className="item-details">
        <span className="display-label">Display:{item.displayLabel}</span>
        <span className="unit-price">Unit Price:${item.unitPrice}</span>
        <div className="num-units-in-box">{item.numUnitsInBox}📦</div>
      </div>
    </div>
  );
}
