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
        <img className={styles.recipeImage} src={recipeDetails.image} alt="" />

        <div className={styles.recipeInstructions}>
          <div>
            <span className={styles.preperationTitle}>
              Preparation Time: {recipeDetails.readyInMinutes} minutes
            </span>
            <span className={styles.servingTitle}>
              Servings : {recipeDetails.servings}
            </span>
            <span className={styles.vegitarianTitle}>
              Vegitarian :{" "}
              {recipeDetails.vegetarian ? "Vegetarian" : "Non- Vegetarian"}
            </span>
          </div>
          <div className={styles.instructionsContainer}>
            <span className={styles.instructionsTitle}>Instructions</span>
            {isLoading
              ? "Loading..."
              : recipeDetails.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
