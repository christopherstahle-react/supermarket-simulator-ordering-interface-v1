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

//#region Filtering
function applySearchFilter(list, searchValue) {
  return list.filter((item) =>
    item.nameLabel.toLowerCase().includes(searchValue.toLowerCase())
  );
}

function applyDisplayFilter(list, displayValue) {
  if (displayValue === "Any") {
    return list;
  }
  return list.filter((product) => product.displayLabel === displayValue);
}

function applyCategoryFilter(list, categoryValue) {
  if (categoryValue === "Any") {
    return list;
  }
  return list.filter((product) => product.keywordList?.includes(categoryValue));
}

//#endregion

export default function App() {
  //#region Logic
  const [filteredList, setFilteredList] = useState(initialProducts);
  const [selectedItemType, setSelectedItemType] = useState("Product");
  const [total, setTotal] = useState(0.0);
  const [numBoxesInCart, setNumBoxesInCart] = useState(0);
  const [displayDropdownValue, setDisplayDropdownValue] = useState(
    displayOptionLabels[0].label
  );
  const [categoryDropdownValue, setCategoryDropdownValue] = useState(
    categoryOptionLabels[0].label
  );
  const [searchInputValue, setSearchInputValue] = useState("");

  function handleOnAddToCart(totalAmountOfItemInDollars, step) {
    setTotal((prevTotal) => {
      const newTotal = prevTotal + Number(totalAmountOfItemInDollars);
      return Number(newTotal.toFixed(2));
    });
    setNumBoxesInCart((prevBoxesInCart) => prevBoxesInCart + step);
  }
  function handleProductButtonClicked() {
    if (selectedItemType === "Product") {
      return;
    } else if (selectedItemType === "Furniture") {
      setSelectedItemType("Product");
    }
  }
  function handleFurnitureButtonClicked() {
    if (selectedItemType === "Furniture") {
      return;
    } else if (selectedItemType === "Product") {
      setSelectedItemType("Furniture");
    }
  }
  function handleDropdownValueChange(selectedValue, dropdownType) {
    if (dropdownType === "display") {
      setDisplayDropdownValue(selectedValue);
    } else if (dropdownType === "category") {
      setCategoryDropdownValue(selectedValue);
    }
  }

  //#region useEffect hook for filtering
  useEffect(() => {
    /* README filtering logic.
     * Order of ops:
     * 0.)Check if we are on the Product or Furniture view.
     * 1.)Make a new tempList for gathering filtered results.
     * 2.)Apply the display dropdown filter by filtering on the tempList.
     * 3.)Apply the category dropdown filter by filtering on the tempList.
     * 4.)Apply the search filter by filtering on the tempList.
     * 5.)Use the useState to set the value of the filteredList.
     *
     * How it works:
     * It works largely in part due to React managing the state of the filteredList.
     * Basically once filteredList is set from calling setFilteredList, it re-renders my scroll view of ItemComponents.
     * The fucky thing about this is this useEffect hook.
     * The code in here will run whenever the passed-in array values have their state updated.
     */

    let tempList = null;
    if (selectedItemType === "Product") {
      tempList = initialProducts;
      tempList = applyDisplayFilter(tempList, displayDropdownValue);
      tempList = applyCategoryFilter(tempList, categoryDropdownValue);
    } else if (selectedItemType === "Furniture") {
      tempList = initialFurniture;
    }

    tempList = applySearchFilter(tempList, searchInputValue);

    setFilteredList(tempList);
  }, [
    searchInputValue,
    selectedItemType,
    displayDropdownValue,
    categoryDropdownValue,
  ]);
  //#endregion
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
