import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {

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