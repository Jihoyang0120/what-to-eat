import styled from "styled-components";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const RecipeComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

export const CoverImage = styled.img`
  height: 200px;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

export const IgnredientsText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  font-weight: bold;
  color: black;
  margin-bottom: 12px;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
`;

export const SeeMoreText = styled(IgnredientsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;
