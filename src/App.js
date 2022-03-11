import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { Dialog, DialogContent } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import Header from "./components/headerComponents";
import Recipe from "./components/recipeComponent";

const APP_ID = "8505b103";
const APP_KEY = "c3165cce95e297baeeecd239cb01a70a";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Placeholder = styled.img`
  width: 50%;
  height: 50%;
  margin-top: 30px;
  border-radius: 20px;
  border: 1rem solid;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogTitle>Ingredients</DialogTitle>
        <table>
          <thead>
            <th>Ingredients</th>
            <th>weight</th>
          </thead>
          <tbody>
            {recipeObj.ingredients.map((ingredientsObj) => (
              <tr>
                <td>{ingredientsObj.text}</td>
                <td>{Math.floor(ingredientsObj.weight)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <DialogContent>
          <DialogActions>
            <Recipe.IngredientsText onClick={() => window.open(recipeObj.url)}>
              See More
            </Recipe.IngredientsText>
            <Recipe.SeeMoreText onClick={() => setShow(false)}>
              Close
            </Recipe.SeeMoreText>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <Recipe.RecipeContainer>
        <Recipe.CoverImage src={recipeObj.image} />
        <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
        <Recipe.IngredientsText onClick={() => setShow(true)}>
          Ingredients
        </Recipe.IngredientsText>
        <Recipe.SeeMoreText onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe
        </Recipe.SeeMoreText>
      </Recipe.RecipeContainer>
    </>
  );
};

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
      <Header.Header>
        <Header.AppNameComponent>🥪Recipe Finder</Header.AppNameComponent>
        <Header.SearchComponent>
          🍳
          <Header.SearchInput
            placeholder="Search Recipe"
            onChange={onTextChange}
          />
        </Header.SearchComponent>
      </Header.Header>
      <Recipe.RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder src="https://lazy-note.s3.ap-northeast-2.amazonaws.com/before_eating.gif" />
        )}
      </Recipe.RecipeListContainer>
    </Container>
  );
}

export default App;
