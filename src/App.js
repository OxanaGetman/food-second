import './App.css';
import { useCallback, useEffect, useState } from 'react';
import MyRecipeComponent from './MyRecipeComponent';
import logo from './icon.png';

function App() {
  const MY_ID = "2f66da8b";
  const MY_KEY = "3c5a4f5360c99f4ea5ef3a1c2ffea579";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("tuna")

  const myRecipeSearch = (e) => {
    setMySearch (e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  const getRecipe = useCallback( async () => {
  const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setMyRecipes(data.hits)
  console.log(data.hits)
  }, [wordSubmitted])

  useEffect(() => {
    getRecipe()
  }, [getRecipe])

  return (
    <div className="App">
      <div className="container">
        <h1>Finde a Recipe!</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch} className="container">
          <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}>
          </input>
          <button>
          <img className="logo" src={logo} alt="picOne"/>
        </button>
        </form>
      </div>

      {myRecipes.map(element => (
        <MyRecipeComponent label={element.recipe.label}
        image={element.recipe.image}
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        cuisineType={element.recipe.cuisineType}
        dishType={element.recipe.dishType}
        />
      ))}

    </div>
  );
}

export default App;

