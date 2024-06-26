import { ProductButton } from "./ProductButton";
import { FurnitureButton } from "./FurnitureButton";
import { Total } from "./Total.js";
import Divider from "@mui/material/Divider";
import "./Styles/subHeader.css";
import "./Styles/total.css";

/**
 * SUMMARY: SubHeader is a section below the Header.
 */
export function SubHeader({
  total,
  numBoxes,
  handleProductButtonClicked,
  handleFurnitureButtonClicked,
}) {
  const buttonConfigs = [
    {
      component: ProductButton,
      onClickHandler: handleProductButtonClicked,
    },
    {
      component: FurnitureButton,
      onClickHandler: handleFurnitureButtonClicked,
    },
  ];
  return (
    <>
      <div className="subheader-container">
        <div className="horizontal-buttons-layout-group">
          {buttonConfigs.map(({ component: Button, onClickHandler }, index) => (
            <Button key={index} onClickHandler={onClickHandler} />
          ))}
        </div>
        <Total formattedTotal={total} numBoxes={numBoxes} />
      </div>
      <Divider />
    </>
  );
}

/*Is this approach better?/more readable?
function ButtonsHorizontalLayoutGroup({ buttonComponents }) {
  return (
    <div className="horizontal-buttons-layout-group">
      {buttonComponents.map(
        ({ type: ButtonComponent, onClickHandler, key }) => (
          <ButtonComponent key={key} onClickHandler={onClickHandler} />
        )
      )}
    </div>
  );
}*/
