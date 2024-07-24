import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "71eecac72dd242249d06500991093373";

export default function Search({ searchData, setsearchData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setsearchData(data.results);
    }
    fetchData();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      ></input>
    </div>
  );
}
