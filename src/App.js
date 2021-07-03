import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./contexts/AppProvider";
import ListItem from "./components/ListItem";
import FilterSelection from "./components/FilterSelection";
import { menu } from "./menu";

const Container = styled.div`
  padding: 40px 16px 0px 16px;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f1f5f8;
  /* border: 2px solid lightcoral; */

  @media (min-width: 720px) {
    padding-left: 232px;
    padding-right: 232px;
  }
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 40px;
  line-height: 48px;
  font-family: "Great Vibes", cursive;
  text-align: center;
  color: #414141;
  /* border: 1px dashed green; */
`;

export default function App() {
  const [menuItems] = useContext(AppContext);

  const findCategory = (item) => {
    const { category } = item;
    if (category === "lunch") {
      return item;
    }
  };

  if (menuItems) {
    let filteredList = menuItems.filter(findCategory);
    console.log(filteredList);
  }

  return (
    <div className="App">
      <Container>
        <Title>{"Our Menu"}</Title>
        <FilterSelection />
        <ListItem />
      </Container>
    </div>
  );
}
