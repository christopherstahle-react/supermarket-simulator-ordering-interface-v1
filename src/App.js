import { useState, useEffect } from "react";
import { Header } from "./Header/Header";
import { SubHeader } from "./SubHeader/SubHeader";
import { TertiaryHeader } from "./TertiaryHeader/TertiaryHeader";
import { ScrollView } from "./ScrollView/ScrollView";

//#region Datas
const initialProducts = [
  {
    nameLabel: "Rice",
    emoji: "🍚",
    displayLabel: "Shelf",
    unitPrice: 1.45,
    numUnitsInBox: 12,
    key: 0,
  },
  {
    nameLabel: "Milk",
    emoji: "🍼",
    displayLabel: "Fridge",
    unitPrice: 0.57,
    numUnitsInBox: 6,
    keywordList: ["Dairy", "Beverages"],
    key: 1,
  },
  {
    nameLabel: "Popcorn",
    emoji: "🍿",
    displayLabel: "Shelf",
    unitPrice: 0.19,
    numUnitsInBox: 12,
    key: 2,
  },
  {
    nameLabel: "Hand Soap",
    emoji: "🧴",
    displayLabel: "Shelf",
    unitPrice: 0.87,
    numUnitsInBox: 10,
    key: 3,
  },
  {
    nameLabel: "Coffee",
    emoji: "☕️",
    displayLabel: "Shelf",
    unitPrice: 0.99,
    numUnitsInBox: 12,
    keywordList: ["Beverages"],

    key: 4,
  },
  {
    nameLabel: "Taco Shells",
    emoji: "🌮",
    displayLabel: "Shelf",
    unitPrice: 0.38,
    numUnitsInBox: 24,
    key: 5,
  },
  {
    nameLabel: "Ice Cream",
    emoji: "🍦",
    displayLabel: "Fridge",
    unitPrice: 1.99,
    numUnitsInBox: 6,
    keywordList: ["Dairy", "Frozen"],
    key: 6,
  },
  {
    nameLabel: "Apple Juice",
    emoji: "🧃",
    displayLabel: "Fridge",
    unitPrice: 0.22,
    numUnitsInBox: 24,
    keywordList: ["Beverages"],

    key: 7,
  },
  {
    nameLabel: "Sushi",
    emoji: "🍣",
    displayLabel: "Fridge",
    unitPrice: 8.97,
    numUnitsInBox: 6,
    key: 8,
  },
];
const initialFurniture = [
  {
    nameLabel: "Chair",
    emoji: "🪑",
    unitPrice: 36.45,
    numUnitsInBox: 1,
    key: 0,
  },
  {
    nameLabel: "Shopping Cart",
    emoji: "🛒",
    unitPrice: 65.88,
    numUnitsInBox: 1,
    key: 1,
  },
  {
    nameLabel: "Sled",
    emoji: "🛷",
    unitPrice: 56.99,
    numUnitsInBox: 1,
    key: 3,
  },
];

const displayOptionLabels = [
  {
    label: "Any",
    key: 0,
  },
  {
    label: "Shelf",
    key: 1,
  },
  {
    label: "Fridge",
    key: 2,
  },
];
const categoryOptionLabels = [
  {
    label: "Any",
    key: 0,
  },
  {
    label: "Produce",
    key: 1,
  },
  {
    label: "Dairy",
    key: 2,
  },
  {
    label: "Beverages",
    key: 3,
  },
];
//#endregion

export default function App() {
  //#region Logic
  const [filteredList, setFilteredList] = useState(initialProducts);
  const [selectedItemType, setSelectedItemType] = useState("Product");

  const [total, setTotal] = useState(0.0);
  function handleOnAddToCart(totalAmountOfItemInDollars, step) {
    setTotal((prevTotal) => {
      const newTotal = prevTotal + Number(totalAmountOfItemInDollars);
      return Number(newTotal.toFixed(2));
    });
    setNumBoxesInCart((prevBoxesInCart) => prevBoxesInCart + step);
  }
  const [numBoxesInCart, setNumBoxesInCart] = useState(0);

  function handleProductButtonClicked() {
    if (selectedItemType === "Product") {
      return;
    } else if (selectedItemType === "Furniture") {
      setSelectedItemType("Product");

      /* README
      If here, then we were viewing the furniture list when we clicked the Product button.
      Before we change the view to display Products, we need to apply the active filters to it.
      We don't want to set the filtered list twice, because that would render everything twice.
      So we make a temp filtered list, then set it once we've applied all filters to that temp.
      */
      let tempList = initialProducts;

      // Apply the search filter
      if (searchInputValue.length > 0) {
        tempList = tempList.filter((product) =>
          product.nameLabel
            .toLowerCase()
            .includes(searchInputValue.toLowerCase())
        );
      }

      // Apply the display filter
      switch (displayDropdownValue) {
        case "Shelf":
          tempList = tempList.filter(
            (product) => product.displayLabel === "Shelf"
          );
          break;
        case "Fridge":
          tempList = tempList.filter(
            (product) => product.displayLabel === "Fridge"
          );
          break;
        default:
          break;
      }

      // Apply the category filter
      switch (categoryDropdownValue) {
        case "Produce":
          tempList = tempList.filter((product) =>
            product.keywordList?.includes("Produce")
          );
          break;
        case "Dairy":
          tempList = tempList.filter((product) =>
            product.keywordList?.includes("Dairy")
          );
          break;
        case "Beverages":
          tempList = tempList.filter((product) =>
            product.keywordList?.includes("Beverages")
          );
          break;
        case "Frozen":
          tempList = tempList.filter((product) =>
            product.keywordList?.includes("Frozen")
          );
          break;
        default:
          break;
      }

      setFilteredList(tempList);
    }
  }
  function handleFurnitureButtonClicked() {
    if (selectedItemType === "Furniture") {
      return;
    } else if (selectedItemType === "Product") {
      setSelectedItemType("Furniture");

      /* README
      If here, then we were viewing the Product list when we clicked the Furniture button.
      Display and Category filters don't apply to furnitures, so we can safely just set the filtered list.
      */

      let tempList = initialFurniture;

      // Apply the search filter
      if (searchInputValue.length > 0) {
        tempList = tempList.filter((furniture) =>
          furniture.nameLabel
            .toLowerCase()
            .includes(searchInputValue.toLowerCase())
        );
      }

      setFilteredList(tempList);
    }
  }

  const [displayDropdownValue, setDisplayDropdownValue] = useState(
    displayOptionLabels[0].label
  );
  const [categoryDropdownValue, setCategoryDropdownValue] = useState(
    categoryOptionLabels[0].label
  );
  function handleDropdownValueChange(selectedValue, dropdownType) {
    if (dropdownType === "display") {
      setDisplayDropdownValue(selectedValue);
    } else if (dropdownType === "category") {
      setCategoryDropdownValue(selectedValue);
    }
  }
  /*README
  //--Figuring this out was a major pain in the ass.
  //--React batches state updates internally,so you can't read a state value after you set it.
  //--This means I need to fix my other code that attempts to do that as well.
  //--This code will execute any time the states in the array are updated.
  */
  useEffect(() => {
    let tempList = initialProducts;

    if (selectedItemType === "Furniture") return;

    if (displayDropdownValue !== "Any") {
      tempList = tempList.filter(
        (product) => product.displayLabel === displayDropdownValue
      );
    }

    if (categoryDropdownValue !== "Any") {
      tempList = tempList.filter((product) =>
        product.keywordList?.includes(categoryDropdownValue)
      );
    }

    setFilteredList(tempList);
  }, [displayDropdownValue, categoryDropdownValue, selectedItemType]);
  //#endregion

  //#region Search Bar State
  const [searchInputValue, setSearchInputValue] = useState("");
  useEffect(() => {
    let tempList = null;
    if (selectedItemType === "Product") {
      tempList = initialProducts;

      // Apply the display filter
      switch (displayDropdownValue) {
        case "Shelf":
          tempList = tempList.filter(
            (product) => product.displayLabel === "Shelf"
          );
          break;
        case "Fridge":
          tempList = tempList.filter(
            (product) => product.displayLabel === "Fridge"
          );
          break;
        default:
          break;
      }

      // Apply the category filter
      switch (categoryDropdownValue) {
        case "Produce":
          tempList = tempList.filter((product) =>
            product.keywordList?.includes("Produce")
          );
          break;
        case "Dairy":
          tempList = tempList.filter((product) =>
            product.keywordList?.includes("Dairy")
          );
          break;
        case "Beverages":
          tempList = tempList.filter((product) =>
            product.keywordList?.includes("Beverages")
          );
          break;
        case "Frozen":
          tempList = tempList.filter((product) =>
            product.keywordList?.includes("Frozen")
          );
          break;
        default:
          break;
      }
    } else if (selectedItemType === "Furniture") {
      tempList = initialFurniture;
    }

    // Apply the search filter
    if (searchInputValue.length > 0) {
      tempList = tempList.filter((item) =>
        item.nameLabel.toLowerCase().includes(searchInputValue.toLowerCase())
      );
    }

    setFilteredList(tempList);
  }, [
    searchInputValue,
    selectedItemType,
    displayDropdownValue,
    categoryDropdownValue,
  ]);
  //#endregion

  //#region Rendering
  return (
    <div className="App">
      <Header />
      <SubHeader
        total={total}
        numBoxes={numBoxesInCart}
        handleProductButtonClicked={handleProductButtonClicked}
        handleFurnitureButtonClicked={handleFurnitureButtonClicked}
      />
      <TertiaryHeader
        categoryOptionLabels={categoryOptionLabels}
        displayOptionLabels={displayOptionLabels}
        handleDropdownValueChange={handleDropdownValueChange}
        displayDropdownValue={displayDropdownValue}
        categoryDropdownValue={categoryDropdownValue}
        selectedItemType={selectedItemType}
        initialProducts={initialProducts}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        initialFurniture={initialFurniture}
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
      <ScrollView
        itemList={filteredList}
        onAddToCartHandler={handleOnAddToCart}
      />
    </div>
  );
  //#endregion
}
