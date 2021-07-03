import React from "react";
import styled from "styled-components";

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
    /* gap: 12px; */
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
  return (
    <Container>
      <FilterButton>{"All"}</FilterButton>
      <FilterButton>{"Breakfast"}</FilterButton>
      <FilterButton>{"Lunch"}</FilterButton>
      <FilterButton>{"Shakes"}</FilterButton>
      <FilterButton>{"Dinner"}</FilterButton>
    </Container>
  );
}
