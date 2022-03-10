import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import {
  Header,
  AppNameComponent,
  SearchComponent,
  SearchInput,
} from "./components/headerComponents";
import {
  RecipeListContainer,
  CoverImage,
  RecipeComponent,
  RecipeName,
  IgnredientsText,
  SeeMoreText,
} from "./components/recipeComponent";

const APP_ID = "8505b103";
const APP_KEY = "c3165cce95e297baeeecd239cb01a70a";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [timeoutId, setTimeoutId] = useState();
  const [recipeList, setRecipeList] = useState(0);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(response);
    setRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    setTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <AppNameComponent>🥪Recipe Finder</AppNameComponent>
        <SearchComponent>
          🍳
          <SearchInput placeholder="Search Recipe" onChange={onTextChange} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length &&
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj} />
          ))}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
