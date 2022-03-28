import styled from "styled-components";

const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-family: "B612", "gothic";
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  } ;
`;

const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👆</text></svg>")
      16 0,
    auto;

  @media screen and (max-width: 700px) {
    width: 95%;
    justify-content: center;
    margin-bottom: 20px;
  } ;
`;

const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 9px;
  width: 30%;
  @media screen and (max-width: 700px) {
    width: 95%;
  } ;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
  font-family: "B612", "gothic";
`;

export default {
  Header,
  AppNameComponent,
  SearchComponent,
  SearchInput,
};
