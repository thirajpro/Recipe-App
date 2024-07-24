import styles from "./fooditem.module.css";
export default function FoodItem({ foodItem, setrecipeId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={foodItem.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{foodItem.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setrecipeId(foodItem.id)}
          className={styles.recipeButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
