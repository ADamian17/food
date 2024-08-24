import React from "react";
import styled from "styled-components/native";
import SearchBar from "../../components/SearchBar";

const StyledView = styled.View`
  background-color: #fff;
  height: 100%;
`;

const StyledText = styled.Text`
  color: #bf4f74;
`;

const SearchScreen = (props) => {
  return (
    <StyledView>
      <SearchBar />
      <StyledText>Search Screen</StyledText>
    </StyledView>
  );
};

export default SearchScreen;
