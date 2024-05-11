import { useState } from "react";
import { ItemAdder } from "./ItemAdder";
import { Item } from "./Item";
import "./Styles/itemContainer.css";

/**
 * SUMMARY: ItemContainer is a container to display an Item and an ItemAdder.
 */
export function ItemContainer({ item, onAddToCartHandler }) {
  //#region Logic
  const initialStep = 1;
  const [step, setStep] = useState(initialStep);
  function handleSubtractItem() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleAddItem() {
    if (step < 99) setStep((s) => s + 1);
  }
  function handleOnAddToCart(totalAmountOfItemInDollars) {
    onAddToCartHandler(totalAmountOfItemInDollars, step);
    setStep(initialStep);
  }
  //#endregion

  //#region
  return (
    <li className="item-container">
      <Item item={item} />
      <ItemAdder
        step={step}
        itemUnitPrice={item.unitPrice}
        itemNumUnitsInBox={item.numUnitsInBox}
        onSubtractItemHandler={handleSubtractItem}
        onAddItemHandler={handleAddItem}
        onAddToCartHandler={handleOnAddToCart}
      />
    </li>
  );
  //#endregion
}
