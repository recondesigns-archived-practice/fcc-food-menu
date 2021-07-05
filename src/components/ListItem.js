import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px dashed black; */
`;

const HeaderWrapper = styled.div`
  padding-bottom: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted #414141;
`;

const Title = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #414141;
  /* border: 1px dashed green; */
`;

const ItemPrice = styled.h4`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #c59d5f;
  /* border: 1px dashed green; */
`;

const ItemDescription = styled.p`
  margin-top: 8px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #414141;
  /* border: 1px dashed green; */
`;

export default function ListItem(props) {
  const { name, price, description } = props;
  return (
    <Container name={name}>
      <HeaderWrapper>
        <Title>{name}</Title>
        <ItemPrice>{`$ ${price}`}</ItemPrice>
      </HeaderWrapper>
      <ItemDescription>{description}</ItemDescription>
    </Container>
  );
}
