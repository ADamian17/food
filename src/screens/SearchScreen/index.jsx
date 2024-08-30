import React, { useCallback } from "react";
import { useSnapshot } from "valtio";
import styled from "styled-components/native";
import { proxyBusinesses } from "../../global-proxies/proxy-businesses";
import SearchBar from "../../components/SearchBar";
import ResultList from "../../components/ResultList";
import { Button, ScrollView } from "react-native";

const StyledText = styled.Text`
  color: #bf4f74;
`;

const SearchScreen = () => {
  const { businesses } = useSnapshot(proxyBusinesses.data);
  const [errorMsg, setErrorMsg] = React.useState("");

  const filterResultsByPrice = useCallback(
    (price) => {
      /* $ | $$ | $$$ */
      return businesses.filter((business) => {
        return business.price === price;
      });
    },
    [businesses]
  );

  return (
    <>
      <SearchBar setErrorMsg={setErrorMsg} errorMsg={errorMsg} />
      {errorMsg.trim() !== "" && <StyledText>{errorMsg}</StyledText>}

      <ScrollView>
        <ResultList
          title="Cost effective"
          businesses={filterResultsByPrice("$")}
        />
        <ResultList
          title="bit Pricier"
          businesses={filterResultsByPrice("$$")}
        />
        <ResultList
          title="big spender"
          businesses={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
