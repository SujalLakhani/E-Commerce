import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  background-color: #f5f5f5;
  ${mobile({ height: "10px 0px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flexbox;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "50px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  /* background-color: #f5f5f5; */
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
  background-color: #f5f5f5;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
`;

const ManuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  white-space: nowrap;
  ${mobile({ flex: 2, fontSize: "12px", marginLeft: "10px" })}
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>STYLISH</Logo>
        </Center>
        <Right>
          <ManuItem>REGISTER</ManuItem> <ManuItem>SIGN IN</ManuItem>
          <ManuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </ManuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
