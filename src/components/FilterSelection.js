import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../contexts/AppProvider";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* border: 1px solid black; */

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FilterButton = styled.button`
  padding: 12px 0px 12px 0px;
  background: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #c59d5f;
  border-radius: 8px;
  border: 2px solid #c59d5f;

  &:hover {
    background: #c59d5f;
    color: #ffffff;
  }

  @media (min-width: 720px) {
    width: 128px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export default function FilterSelection() {
  const links = ["All", "Breakfast", "Lunch", "Dinner", "Shakes"];
  const { category } = useContext(AppContext);
  const { selectedCategory, setSelectedCategory } = category;

  function handleClick(e, state, setter) {
    const { name } = e.target;
    if (state === name) {
      // console.log("Already matches");
    } else {
      setter(() => name);
    }
  }

  return (
    <Container>
      {links.map((link, idx) => {
        return (
          <FilterButton
            key={idx}
            name={link.toLowerCase()}
            onClick={(e) =>
              handleClick(e, selectedCategory, setSelectedCategory)
            }
          >
            {link}
          </FilterButton>
        );
      })}
    </Container>
  );
}
