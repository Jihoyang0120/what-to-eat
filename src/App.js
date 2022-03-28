import "./App.css";
import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import Header from "./components/headerComponents";
import Recipe from "./components/recipeComponent";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const APP_ID = "8505b103";
const APP_KEY = "c3165cce95e297baeeecd239cb01a70a";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Placeholder = styled.img`
  width: 35%;
  height: 35%;
  margin-top: 30px;
  border-radius: 20px;
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;

const RecipeComponent = (props) => {
  const [modal, setModal] = useState(false);
  const { recipeObj } = props;
  return (
    <>
      <Modal isOpen={modal} size="lg" centered="true">
        <ModalHeader>Recipe</ModalHeader>
        <ModalBody>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Quantity</th>
              <th>Weight(g)</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientsObj) => (
                <tr>
                  <td>{ingredientsObj.text}</td>
                  <td>{ingredientsObj.quantity}</td>
                  <td>{Math.floor(ingredientsObj.weight)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => window.open(recipeObj.url)}>
            See More
          </Button>
          <Button color="success" onClick={() => setModal(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <Recipe.RecipeContainer>
        <Recipe.CoverImage src={recipeObj.image} />
        <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
        <Recipe.IngredientsText onClick={() => setModal(true)}>
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
  const setEmptyList = () => {
    setRecipeList("");
  };
  return (
    <Container>
      <Header.Header>
        <Header.AppNameComponent onClick={setEmptyList}>
          🥪Recipe Finder
        </Header.AppNameComponent>
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
