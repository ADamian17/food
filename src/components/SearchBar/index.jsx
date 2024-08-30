import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useSnapshot } from "valtio";
import { proxyTerm, setTermValue } from "../../global-proxies/proxy-term";
import { setProxyBusinesses } from "../../global-proxies/proxy-businesses";
import yelp from "../../api/yelp";

const StyledView = styled.View`
  background-color: #f0eeee;
  height: 50px;
  border-radius: 5px;
  margin: 15px 15px 10px;
  flex-direction: row;
  gap: 10px;
  padding: 0 10px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
`;

const StyledIcon = styled(Feather)`
  font-size: 30px;
  align-self: center;
`;

const SearchBar = ({ setErrorMsg, errorMsg }) => {
  const { value } = useSnapshot(proxyTerm.term);

  useEffect(() => {
    searchApi("pasta");
  }, []);

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "oakland",
        },
      });

      setProxyBusinesses(response.data.businesses);
    } catch (error) {
      setErrorMsg("Something went wrong");
    }
  };

  const onChangeText = (text) => {
    if (errorMsg.trim() !== "") {
      setErrorMsg("");
    }

    setTermValue(text);
  };

  return (
    <StyledView>
      <StyledIcon name="search" />

      <StyledTextInput
        placeholder="search"
        value={value}
        onChangeText={onChangeText}
        onEndEditing={() => searchApi(value)}
      />
    </StyledView>
  );
};

export default SearchBar;
