import styles from "./ingredientcontainer.module.css";
export default function Ingredients({ recipeDetails, isLoading }) {
  const URL = "https://img.spoonacular.com/ingredients_100x100/";
  return (
    <div>
      <div className={styles.ingredientsContainer}>
        <h3 className={styles.ingredientTitle}>Ingredients</h3>
        {isLoading
          ? "Loading"
          : recipeDetails.extendedIngredients.map((item) => (
              <div className={styles.itemContainer}>
                <img
                  className={styles.imageContainer}
                  src={`https://img.spoonacular.com/ingredients_100x100/${item.image}`}
                  alt=""
                />
                <div className={styles.itemDetails}>
                  <span>
                    {item.name}: {item.amount} {item.unit}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
