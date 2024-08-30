import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const ResultDetailsContainer = styled.View`
  margin-left: 15px;
`;

const ResultDetailsImage = styled.Image`
  width: 250px;
  height: 120px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const ResultDetailsName = styled.Text`
  font-weight: bold;
`;

const ResultDetails = ({ result, ...rest }) => {
  return (
    <ResultDetailsContainer {...rest}>
      <ResultDetailsImage source={{ uri: result?.image_url }} />
      <ResultDetailsName>{result?.name}</ResultDetailsName>
      <Text>
        {result?.rating} Stars, {result?.review_count} Reviews
      </Text>
    </ResultDetailsContainer>
  );
};

export default ResultDetails;
