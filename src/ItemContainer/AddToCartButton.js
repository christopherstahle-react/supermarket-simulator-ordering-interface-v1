import { Button } from "../Reusables/Button";

export function AddToCartButton({ onClickHandler }) {
  const style = {
    borderRadius: "20px",
  };
  return (
    <Button
      label={"Add To Cart"}
      onClickHandler={onClickHandler}
      style={style}
    />
  );
}
