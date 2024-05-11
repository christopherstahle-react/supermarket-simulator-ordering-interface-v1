import { useState } from "react";
import { Button } from "../Reusables/Button";
export function ProductButton({ onClickHandler }) {
  return (
    <Button emoji={"🥪"} label={"Product"} onClickHandler={onClickHandler} />
  );
}
