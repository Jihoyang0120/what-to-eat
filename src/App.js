import "./App.css";
import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import HeaderComponent from "./components/HeaderComponent";
import RecipeList from "./components/RecipeList";

const APP_ID = "8505b103";
const APP_KEY = "c3165cce95e297baeeecd239cb01a70a";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
`;

function App() {
  const [timeoutId, setTimeoutId] = useState();
  const [recipeList, setRecipeList] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(response);
    setRecipeList(response.data.hits);
    setLoading(false);
  };

  const onTextChange = (event) => {
    setLoading(true);
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    setTimeoutId(timeout);
  };
  const setEmptyList = () => {
    setRecipeList("");
  };
  return (
    <Container>
      <HeaderComponent
        onTextChange={onTextChange}
        setEmptyList={setEmptyList}
      />
      <RecipeList recipeList={recipeList} loading={loading} />
    </Container>
  );
}

export default App;
