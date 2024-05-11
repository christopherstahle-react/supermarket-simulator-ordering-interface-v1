import { Button } from "../Reusables/Button";
/**
 * SUMMARY: ProductButton is a wrapper for a Button.
 */
export function ProductButton({ onClickHandler }) {
  return (
    <Button emoji={"🥪"} label={"Product"} onClickHandler={onClickHandler} />
  );
}
