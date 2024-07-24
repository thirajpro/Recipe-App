import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import "./App.css";
import RecipeDetails from "./components/RecipeDetails";
function App() {
  const [searchData, setsearchData] = useState([]);
  const [recipeId, setrecipeId] = useState("658615");
  return (
    <div className="App">
      <NavBar />
      <Search searchData={searchData} setsearchData={setsearchData} />
      <Container>
        <InnerContainer>
          <FoodList setrecipeId={setrecipeId} searchData={searchData} />
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails recipeId={recipeId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
