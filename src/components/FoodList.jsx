import FoodItem from "./FoodItem";
export default function FoodList({ searchData, setrecipeId }) {
  return (
    <div>
      {searchData.map((foodItem) => (
        <FoodItem
          setrecipeId={setrecipeId}
          key={foodItem.id}
          foodItem={foodItem}
        />
      ))}
    </div>
  );
}
