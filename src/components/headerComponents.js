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
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;

const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 9px;
  width: 30%;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export default {
  Header,
  AppNameComponent,
  SearchComponent,
  SearchInput,
};
