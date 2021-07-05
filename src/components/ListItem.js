import React from "react";
import styled from "styled-components";
import firstImage from "../assets/breakfast1.jpeg";

const Container = styled.div`
  /* border: 1px dashed black; */
`;

const ItemImage = styled.img`
  margin-bottom: 20px;
  box-sizing: border-box;
  width: 100%;
  border: 4px solid #c59d5f;
  border-radius: 8px;
`;

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  padding-bottom: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted #414141;
`;

const Title = styled.h3`
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #414141;
  /* border: 1px dashed green; */
`;

const ItemPrice = styled.h4`
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #c59d5f;
  /* border: 1px dashed green; */
`;

const ItemDescription = styled.p`
  box-sizing: border-box;
  box-sizing: border-box;

  margin-top: 8px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #414141;
  /* border: 1px dashed green; */
`;

export default function ListItem(props) {
  const { name, price, description, image } = props;
  console.log(image);
  return (
    <Container name={name}>
      <ItemImage src={image} alt={"random text"} />
      <HeaderWrapper>
        <Title>{name}</Title>
        <ItemPrice>{`$ ${price}`}</ItemPrice>
      </HeaderWrapper>
      <ItemDescription>{description}</ItemDescription>
    </Container>
  );
}
