import React from "react";
import { useSnapshot } from "valtio";
import styled from "styled-components/native";
import { proxyBusinesses } from "../../global-proxies/proxy-businesses";
import { proxyTerm } from "../../global-proxies/proxy-term";
import SearchBar from "../../components/SearchBar";

const StyledView = styled.View`
  background-color: #fff;
  height: 100%;
`;

const StyledText = styled.Text`
  color: #bf4f74;
`;

const SearchScreen = () => {
  const { value } = useSnapshot(proxyTerm.term);
  const { businesses } = useSnapshot(proxyBusinesses.data);

  return (
    <StyledView>
      <SearchBar />
      <StyledText>Search Screen</StyledText>
      <StyledText>{JSON.stringify(businesses.length)}</StyledText>
    </StyledView>
  );
};

export default SearchScreen;
