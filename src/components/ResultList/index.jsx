import React from "react";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ResultDetails from "../ResultDetails";
import { withNavigation } from "react-navigation";

const BusinessesWrapper = styled.FlatList`
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  margin-bottom: 5px;
`;

const ResultList = ({ businesses, title, navigation }) => {
  if (!businesses.length) return null;

  return (
    <View>
      <Title>{title}</Title>

      <BusinessesWrapper
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        keyExtractor={(business) => business.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ResultsShow", { id: item.id })}
          >
            <ResultDetails result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default withNavigation(ResultList);
