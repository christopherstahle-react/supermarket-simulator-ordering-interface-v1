import { Button } from "../Reusables/Button";
/**
 * SUMMARY: FurnitureButton is a wrapper for a Button.
 */
export function FurnitureButton({ onClickHandler }) {
  return (
    <Button emoji={"🪑"} label={"Furniture"} onClickHandler={onClickHandler} />
  );
}
