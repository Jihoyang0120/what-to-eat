import styled from "styled-components";

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

const IngredientsText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  font-weight: bold;
  color: black;
  margin-bottom: 12px;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👆</text></svg>")
      16 0,
    auto;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
`;

const SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;

export default {
  RecipeListContainer,
  CoverImage,
  RecipeContainer,
  RecipeName,
  IngredientsText,
  SeeMoreText,
};
