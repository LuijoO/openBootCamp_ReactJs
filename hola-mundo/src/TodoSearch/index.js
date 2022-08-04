import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const onSearhValueChange = (even) => {
    console.log(even.target.value);
    setSearchValue(even.target.value)
  }

  return (
    <input 
    className="TodoSearch" 
    placeholder="Cebolla"
    value={searchValue}
    onChange={onSearhValueChange}
    />
  );
}


export { TodoSearch };