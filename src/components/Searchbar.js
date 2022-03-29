import React, {useState} from "react";

const Searchbar = () => {

  const [search, setSearch] = useState("goku")
  const onChangeHandler = (e) => {
    console.log("pokemon: ", e.target.value)
    setSearch(e.target.value)
  }

  const onButtonClickHandler = () => {
    console.log("pokemon: ", search)
  }
  return (
  <div className="searchbar-container">
    <div className="searchbar">
      <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  </div>
  )
}

export default Searchbar;