import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 350px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

const RecipeName = styled.span`
  font-family: "B612", "gothic";
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

const IngredientsText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  font-family: "B612", "gothic";
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

      <RecipeContainer>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setModal(true)}>
          Ingredients
        </IngredientsText>
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe
        </SeeMoreText>
      </RecipeContainer>
    </>
  );
};

export default RecipeComponent;
