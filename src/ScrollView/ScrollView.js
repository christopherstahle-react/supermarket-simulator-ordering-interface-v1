import { useState } from "react";
import { ItemContainer } from "../ItemContainer/ItemContainer";
import "./scrollview.css";

/**
 * SUMMARY: Scrollview is a scrollable window that holds ItemContainers
 */
export function ScrollView({ itemList, onAddToCartHandler }) {
  //#region Logic
  function handleOnAddToCart(totalAmountOfItemInDollars, step) {
    onAddToCartHandler(totalAmountOfItemInDollars, step);
  }
  //#endregion

  //#region Logic
  return (
    <ul className="scroll-view">
      <div className="grid-container">
        {itemList?.map((item) => (
          <ItemContainer
            item={item}
            //step={step}
            //onSubtractItemHandler={handleSubtractItem}
            //onAddItemHandler={handleAddItem}
            onAddToCartHandler={handleOnAddToCart}
            key={item.key}
          />
        ))}
      </div>
    </ul>
  );
  //#endregion
}
