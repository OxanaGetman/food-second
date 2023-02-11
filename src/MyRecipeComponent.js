import './App.css';
import iconOne from "./iconOne.png";

function MyRecipeComponent({label, image, calories, ingredients, cuisineType, dishType}) {
    return(
        <div className="container">
            <h2>{label}</h2>
            <p className="dish">Dish type: {dishType}</p>
            <img src={image} alt="pic"/>

            <ul className="list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}><img src={iconOne} alt="pic" width="20px"/>{ingredient}</li>
                ))}
            </ul>

            <p className="calories">Calories: {calories.toFixed()}</p>
            <p className="cuisine">Cuisine: {cuisineType}</p>
        </div>
    )
}

export default MyRecipeComponent;