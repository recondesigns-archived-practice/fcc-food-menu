import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px dashed black;
`;

export default function ListItem(props) {
  const { name } = props;
  return (
    <Container name={name}>
      <p>List item</p>
    </Container>
  );
}
