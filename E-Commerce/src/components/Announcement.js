import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #808080;
  color: white;
  display: flex;
  padding-top: 10px;
  justify-content: center;
  font-size: 14;
  font-weight: 500;
`;

export default function Announcement() {
  return (
    <Container>Super Deal! Free Shipping on Orders Over Rs. 1000!!</Container>
  );
}
