import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState();

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function onSearchChange(e){
    console.log(e.target.value)
    const value = e.target.value;
    setSearchText(value);
    console.log(itemsToDisplay)
  }
  console.log(searchText)
  itemsToDisplay = items.filter((item) => {
    if(!searchText) return true;
    return (item.name).toLowerCase().includes(searchText.toLowerCase());
  }
    );

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} searchText={searchText} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
