import React from "react";
import styled from "styled-components";
import RecipeComponent from "./RecipeComponent";
import BackgroundImage from "./BackgroundImage";

const RecipeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 2fr));
  padding: 30px;
  gap: 26px;
  background-color: #fcfcfc;
`;

const RecipeList = ({ recipeList, loading }) => {
  return (
    <RecipeListContainer>
      {recipeList.length ? (
        recipeList.map((recipeObj) => (
          <RecipeComponent recipeObj={recipeObj.recipe} />
        ))
      ) : (
        <BackgroundImage loading={loading} />
      )}
    </RecipeListContainer>
  );
};

export default RecipeList;
