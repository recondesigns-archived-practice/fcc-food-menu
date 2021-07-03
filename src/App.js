import React from "react";
import styled from "styled-components";
import FilterSelection from "./components/FilterSelection";

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
  margin-bottom: 64px;
  font-size: 40px;
  line-height: 48px;
  font-family: "Great Vibes", cursive;
  text-align: center;
  color: #c59d5f;
  /* border: 1px dashed green; */
`;

export default function App() {
  return (
    <div className="App">
      <Container>
        <Title>{"Our Menu"}</Title>
        <FilterSelection />
      </Container>
    </div>
  );
}
