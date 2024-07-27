import { useEffect, useState } from "react";
import styles from "./recipecontainer.module.css";
import Ingredients from "./Ingredients.jsx";

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
      <div className={styles.recipecontainer}>
        <h1 className={styles.recipetitle}>{recipeDetails.title}</h1>
        <img className={styles.recipeImage} src={recipeDetails.image} alt="" />

        <div className={styles.recipeInstructions}>
          <div>
            <span className={styles.preperationTitle}>
              <strong>
                Preparation Time: {recipeDetails.readyInMinutes} minutes
              </strong>
            </span>
            <span className={styles.servingTitle}>
              <strong>Servings : {recipeDetails.servings}</strong>
            </span>
            <span className={styles.vegitarianTitle}>
              <strong>
                Vegetarian :{" "}
                {recipeDetails.vegetarian ? "Vegetarian" : "Non- Vegetarian"}
              </strong>
            </span>
          </div>
          <Ingredients recipeDetails={recipeDetails} isLoading={isLoading} />
          <div className={styles.instructionsContainer}>
            <span className={styles.instructionsTitle}>Instructions</span>
            <ol>
              {isLoading
                ? "Loading..."
                : recipeDetails.analyzedInstructions[0].steps.map((step) => (
                    <li>{step.step}</li>
                  ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
