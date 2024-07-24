import { useEffect, useState } from "react";
import styles from "./recipecontainer.module.css";

export default function RecipeDetails({ recipeId }) {
  const [recipeDetails, setrecipeDetails] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${recipeId}/information`;
  const API_KEY = "71eecac72dd242249d06500991093373";

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();

      setrecipeDetails(data);
      setisLoading(false);
      console.log(data);
    }
    fetchRecipe();
  }, [recipeId]);

  return (
    <div>
      Recipe Details {recipeId}
      <div className={styles.recipecontainer}>
        <h1 className={styles.recipetitle}>{recipeDetails.title}</h1>
        <div className={styles.imageContainer}>
          <img src={recipeDetails.image} alt="" />
        </div>
        <span>
          {isLoading
            ? "Loading..."
            : recipeDetails.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))}
        </span>
      </div>
    </div>
  );
}
