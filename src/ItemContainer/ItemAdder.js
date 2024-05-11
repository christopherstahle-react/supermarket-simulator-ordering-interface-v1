import Divider from "@mui/material/Divider";
import { AddToCartButton } from "./AddToCartButton";
import "./Styles/itemAdder.css";

/**
 * SUMMARY: ItemAdder is a piece of UI within the ItemContainer that offers:
 * 0.)UI for the amount of 'the corresponding item'
 * 1.)UI for the sum of the cost of ' '
 * 2.)fn to add and subtract ' '
 * 3.)fn to add ' ' to the cart.
 */
export function ItemAdder({
  step,
  itemUnitPrice,
  itemNumUnitsInBox,
  onSubtractItemHandler,
  onAddItemHandler,
  onAddToCartHandler,
}) {
  //#region Logic
  const formattedTotal = (step * (itemUnitPrice * itemNumUnitsInBox)).toFixed(
    2
  );
  //#endregion

  //#region Rendering
  return (
    <div className="item-adder">
      <span>Num Boxes</span>
      <Divider flexItem />
      <div className="add-subtract-amount">
        <div className="subtract-amount" onClick={onSubtractItemHandler}>
          -
        </div>
        <span>{step}</span>
        <div className="add-amount" onClick={onAddItemHandler}>
          +
        </div>
      </div>
      <Divider flexItem />
      <div className="formatted-total">${formattedTotal}</div>
      <AddToCartButton
        onClickHandler={() => onAddToCartHandler(formattedTotal)}
      />
    </div>
  );
  //#endregion
}
