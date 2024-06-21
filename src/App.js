/** @jsxImportSource @emotion/react */
import { Searchbar } from "./Searchbar.js";
import Header from "./Header.js";
import "./App.css";
import { useState } from "react";
import { RecipesList } from "./RecipesList.js";

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  return (
    <div className="App">
      <Header />
      <Searchbar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
