import { useState } from "react";
import { Button } from "../Reusables/Button";
export function FurnitureButton({ onClickHandler }) {
  return (
    <Button emoji={"🪑"} label={"Furniture"} onClickHandler={onClickHandler} />
  );
}
