import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const StyledView = styled.View`
  background-color: #f0eeee;
  height: 50px;
  border-radius: 5px;
  margin: 15px 15px 0;
  flex-direction: row;
  gap: 10px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
`;

const StyledIcon = styled(Feather)`
  font-size: 30px;
  align-self: center;
`;

const SearchBar = () => {
  return (
    <StyledView>
      <StyledIcon name="search" />

      <StyledTextInput placeholder="search" />
    </StyledView>
  );
};

export default SearchBar;
